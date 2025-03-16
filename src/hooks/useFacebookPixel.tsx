"use client";
import { useEffect } from "react";

const useFacebookPixel = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((ReactPixel) => {
          ReactPixel.default.init("1170484508077907", undefined, {
            autoConfig: true,
            debug: false,
          });
          ReactPixel.default.pageView();
        })
        .catch((err) => console.error("Facebook Pixel failed to load", err));
    }
  }, []);
};

export default useFacebookPixel;
