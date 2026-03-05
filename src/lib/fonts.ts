import {
  Frank_Ruhl_Libre,
  Josefin_Sans,
  Poppins,
  Open_Sans,
  Montserrat,
  Catamaran
} from "next/font/google";

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-josefin",
});

export const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-frank-text",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-catamaran",
});
