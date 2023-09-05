'use client';
import React, { Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { AdditiveBlending, BackSide } from 'three';
import atmosphereFragment from './shaders/atmosphereFragment.glsl';
import atmosphereVertex from './shaders/atmosphereVertex.glsl';
import { useAppContext } from '@/context/AppContext';
import { convertToNumber } from '@/global/util';
import { gsap } from 'gsap';

import './Globe.scss';

function Scene() {
  const { filteredData } = useAppContext();
  const points =
    filteredData.length > 1500 ? filteredData.slice(0, 1500) : filteredData;
  const texture = useTexture('images/earth_uv_map.jpg');
  const pointRef: any = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      pointRef.current.children.forEach((item: any) => {
        gsap.to(item.scale, {
          z: 1.2,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'linear',
          delay: Math.random() * 2,
        });
      });
    }, pointRef);

    return () => ctx.revert();
  }, [points]);

  return (
    <group>
      <ambientLight intensity={6} />

      <mesh rotation={[0, -Math.PI / 2, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={texture}
          color='#ffffff'
        />
      </mesh>

      <mesh scale={1.08}>
        <sphereGeometry args={[2, 20, 20]} />
        <shaderMaterial
          fragmentShader={atmosphereFragment}
          vertexShader={atmosphereVertex}
          blending={AdditiveBlending}
          side={BackSide}
        />
      </mesh>

      <mesh ref={pointRef}>
        {points.map((point, index) => {
          const lat = convertToNumber(point.geolocation?.latitude!);
          const lng = convertToNumber(point.geolocation?.longitude!);
          const latitude = (lat / 180) * Math.PI;
          const longitude = (lng / 180) * Math.PI;
          const radius = 2;

          const x = radius * Math.cos(latitude) * Math.sin(longitude);
          const y = radius * Math.sin(latitude);
          const z = radius * Math.cos(latitude) * Math.cos(longitude);

          return (
            <mesh
              key={index}
              position={[x, y, z]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
              scale={[1, 1, 0.5]}
            >
              <boxGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color='#9f6af5' transparent opacity={0.8} />
            </mesh>
          );
        })}
      </mesh>
    </group>
  );
}

export default function Globe() {
  return (
    <div className='globeContainer'>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
