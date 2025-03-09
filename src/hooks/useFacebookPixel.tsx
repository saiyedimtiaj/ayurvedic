"use client";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true,
  debug: false,
};

const useFacebookPixel = () => {
  useEffect(() => {
    ReactPixel.init("1170484508077907", undefined, options);
    ReactPixel.pageView();
  }, []);
};

export default useFacebookPixel;
