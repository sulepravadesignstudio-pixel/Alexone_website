import { useLayoutEffect } from 'react';
import { Html, OrbitControls, Sphere, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import * as THREE from 'three';
import type { ResidentialHotspot } from '../constants';

interface PanoramaProps {
  imageUrl: string;
  hotspots: ResidentialHotspot[];
  focusedHotspot: string | null;
  onHotspotClick: (hotspot: ResidentialHotspot) => void;
}

export default function Panorama({ imageUrl, hotspots, focusedHotspot, onHotspotClick }: PanoramaProps) {
  const texture = useTexture(imageUrl);
  const { camera, gl } = useThree();

  useLayoutEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = Math.max(4, gl.capabilities.getMaxAnisotropy());
    texture.needsUpdate = true;
  }, [texture, gl]);

  useFrame(() => {
    const perspectiveCamera = camera as THREE.PerspectiveCamera;

    if (focusedHotspot) {
      const hotspot = hotspots.find((item) => item.id === focusedHotspot);

      if (hotspot) {
        const phi = (parseFloat(hotspot.top) / 100) * Math.PI;
        const theta = (parseFloat(hotspot.left) / 100) * Math.PI * 2;
        const target = new THREE.Vector3(
          500 * Math.sin(phi) * Math.cos(theta),
          500 * Math.cos(phi),
          500 * Math.sin(phi) * Math.sin(theta),
        );

        perspectiveCamera.lookAt(target);
        perspectiveCamera.fov = THREE.MathUtils.lerp(perspectiveCamera.fov, 42, 0.05);
        perspectiveCamera.updateProjectionMatrix();
      }
    } else {
      perspectiveCamera.fov = THREE.MathUtils.lerp(perspectiveCamera.fov, 75, 0.05);
      perspectiveCamera.updateProjectionMatrix();
    }
  });

  return (
    <>
      <Sphere args={[500, 128, 80]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </Sphere>

      <OrbitControls
        enableZoom
        enablePan={false}
        rotateSpeed={-0.45}
        autoRotate={!focusedHotspot}
        autoRotateSpeed={0.45}
        minDistance={0.1}
        maxDistance={100}
        enabled={!focusedHotspot}
      />

      {hotspots.map((hotspot) => {
        const phi = (parseFloat(hotspot.top) / 100) * Math.PI;
        const theta = (parseFloat(hotspot.left) / 100) * Math.PI * 2;
        const x = 400 * Math.sin(phi) * Math.cos(theta);
        const y = 400 * Math.cos(phi);
        const z = 400 * Math.sin(phi) * Math.sin(theta);

        return (
          <Html position={[x, y, z]} key={hotspot.id} center zIndexRange={[0, 10]}>
            <motion.button
              type="button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${
                focusedHotspot && focusedHotspot !== hotspot.id ? 'pointer-events-none opacity-0' : 'opacity-100'
              } ${focusedHotspot === hotspot.id ? 'bg-white' : 'bg-[#b4b43c]'}`}
              onClick={() => onHotspotClick(hotspot)}
            >
              {focusedHotspot === hotspot.id ? <X size={16} className="text-black" /> : <Maximize2 size={16} className="text-black" />}
              {!focusedHotspot && (
                <>
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#b4b43c]" />
                  <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 translate-x-4 rounded-sm border border-[#b4b43c]/30 bg-black/85 px-4 py-2 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap text-[#b4b43c] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    {hotspot.title}
                  </span>
                </>
              )}
            </motion.button>
          </Html>
        );
      })}
    </>
  );
}

