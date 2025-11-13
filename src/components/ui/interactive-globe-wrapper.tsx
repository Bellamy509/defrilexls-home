"use client";

import React, { useEffect, useState } from 'react';
import InteractiveGlobe from './interactive-globe';

export default function InteractiveGlobeWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <div className="animate-pulse text-[#1E40AF]">Loading globe...</div>
      </div>
    );
  }

  return <InteractiveGlobe />;
}
