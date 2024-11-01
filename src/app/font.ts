import localFont from "next/font/local";

const yekan = localFont({
  src: "./fonts/YekanV3.0/Yekan.woff",
  variable: "--font-yekan",
  weight: "100 900 400 500 600",
});

const vazire = localFont({
  src: "./fonts/vazir-font/Vazir.woff2",
  variable: "--font-vazir",
  weight: "400",
});

export { yekan, vazire };
