import React from 'react';

export const GarageEnvironment: React.FC = () => {
  return (
    <>
      {/* Soft Ambient Fill Light */}
      <ambientLight intensity={1.5} color="#CBD5E1" />

      {/* Main Overhead Key Spotlight */}
      <directionalLight
        position={[10, 18, 10]}
        intensity={2.8}
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Front Nose Spotlight */}
      <directionalLight
        position={[0, 6, 14]}
        intensity={2.0}
        color="#FFB020"
      />

      {/* Left Amber Rim Light */}
      <pointLight position={[-7, 5, 4]} intensity={5.0} color="#FFB020" distance={25} />

      {/* Right Telemetry Blue Rim Light */}
      <pointLight position={[7, 5, -2]} intensity={5.0} color="#38BDF8" distance={25} />

      {/* Track Center Underbody Uplight */}
      <pointLight position={[0, 0.4, 0]} intensity={4.0} color="#38BDF8" distance={10} />
    </>
  );
};
