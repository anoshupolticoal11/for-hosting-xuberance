"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HotkeyListener() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl + Y
      if (e.ctrlKey && e.key.toLowerCase() === "y") {
        e.preventDefault();
        sessionStorage.setItem("allowMeow", "true");
        router.push("/meow-route");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null;
}
