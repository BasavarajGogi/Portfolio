import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraChoreographyProps {
  scrollProgress: number; // 0.0 to 1.0
  activeSectionIndex: number; // 0 to 7
  prefersReducedMotion?: boolean;
}

// Section camera offset profiles relative to the moving car's dynamic Z location
const SECTION_CAMERA_OFFSETS = [
  // 0: HERO (Three-quarter front hero angle looking down the track)
  { offset: new THREE.Vector3(-1.8, 1.6, 6.2), lookAtOffset: new THREE.Vector3(0, 0.35, 0) },
  // 1: ABOUT (Side-three-quarter profile tracking view)
  { offset: new THREE.Vector3(-5.2, 1.8, 3.2), lookAtOffset: new THREE.Vector3(0, 0.35, 0) },
  // 2: EDUCATION (High elevated track tracking view)
  { offset: new THREE.Vector3(0, 8.0, -1.5), lookAtOffset: new THREE.Vector3(0, 0, -3.5) },
  // 3: PROJECTS (Right-quarter garage inspection view)
  { offset: new THREE.Vector3(4.8, 1.8, 4.0), lookAtOffset: new THREE.Vector3(0, 0.35, 0) },
  // 4: SKILLS (Cockpit & Halo driver view)
  { offset: new THREE.Vector3(0, 1.5, 2.4), lookAtOffset: new THREE.Vector3(0, 0.5, -0.8) },
  // 5: CERTIFICATIONS (Rear wing & DRS exhaust quarter view)
  { offset: new THREE.Vector3(4.2, 2.0, -3.5), lookAtOffset: new THREE.Vector3(0, 0.35, 0) },
  // 6: ACHIEVEMENTS (Wall display side angle)
  { offset: new THREE.Vector3(-4.8, 2.0, 1.5), lookAtOffset: new THREE.Vector3(0, 0.4, 0) },
  // 7: CONTACT (Pit stop finish line front view)
  { offset: new THREE.Vector3(0, 1.8, 7.2), lookAtOffset: new THREE.Vector3(0, 0.35, 0) },
];

export const CameraChoreography: React.FC<CameraChoreographyProps> = ({
  scrollProgress,
  activeSectionIndex,
  prefersReducedMotion = false
}) => {
  const { camera } = useThree();
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.35, 8.0));

  useFrame((_, delta) => {
    // Current dynamic car Z position along race track (8.0 -> -87.0)
    const carZ = 8.0 - scrollProgress * 95.0;

    const clampedIndex = Math.min(Math.max(activeSectionIndex, 0), SECTION_CAMERA_OFFSETS.length - 1);
    const profile = SECTION_CAMERA_OFFSETS[clampedIndex];

    // Compute target camera position relative to moving car
    const targetCameraPos = new THREE.Vector3(
      profile.offset.x,
      profile.offset.y,
      carZ + profile.offset.z
    );

    // Compute target lookAt vector relative to moving car
    const targetLookAt = new THREE.Vector3(
      profile.lookAtOffset.x,
      profile.lookAtOffset.y,
      carZ + profile.lookAtOffset.z
    );

    if (prefersReducedMotion) {
      camera.position.copy(targetCameraPos);
      camera.lookAt(targetLookAt);
      return;
    }

    // Smooth lerp tracking easing
    const lerpFactor = Math.min(delta * 4.0, 0.18);
    camera.position.lerp(targetCameraPos, lerpFactor);

    currentLookAt.current.lerp(targetLookAt, lerpFactor);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};
