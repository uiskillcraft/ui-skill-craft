"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ScrollContext = {
  scrolled: number;
  handleScrollPositionChange: (val: number) => void;
};

const Context = createContext<ScrollContext | undefined>(undefined);

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState<number>(100);

  const handleScrollPositionChange = (val: number) => {
    // if (val < 500) {
      setScrolled(val);
    // } else {
    //   setScrolled(val);
    // }
  };

  return (
    <Context.Provider value={{ scrolled, handleScrollPositionChange }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useScroll must be used inside ScrollProvider");
  }

  return context;
};
