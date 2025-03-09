"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactPixel from "react-facebook-pixel";
export const puchageEvent = async (data: any) => {
  await ReactPixel.track("Purchage", data);
};
