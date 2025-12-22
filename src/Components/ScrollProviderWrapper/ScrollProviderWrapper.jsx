"use client";

import { ScrollProgress, ScrollProgressProvider } from "../animate-ui/primitives/animate/scroll-progress";


export default function ScrollProviderWrapper({ children }) {
  return (
    <ScrollProgressProvider global>
      <ScrollProgress
        className="fixed top-0 left-0 h-[3px] bg-black z-[9999]"/>
      {children}
    </ScrollProgressProvider>
  );
}
