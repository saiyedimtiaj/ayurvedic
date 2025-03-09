"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const useFacebookPixel = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents running on SSR

    if (!window.fbq) {
      window.fbq = function (...args: any[]) {
        if (window.fbq.callMethod) {
          window.fbq.callMethod(...args);
        } else {
          (window.fbq.queue = window.fbq.queue || []).push(args);
        }
      };
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    window.fbq("init", "1170484508077907"); // Replace with your Pixel ID
    window.fbq("track", "PageView");
  }, []);
};

export default useFacebookPixel;
