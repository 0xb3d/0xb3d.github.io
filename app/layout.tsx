import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Cormorant_Garamond,
  Open_Sans,
  Inter,
  Roboto,
  STIX_Two_Text,
  EB_Garamond,
  Lora,
  Source_Serif_4,
  Crimson_Pro,
} from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

import PolymathDecorations from "@/components/PolyMathDecorations";
import GridOverlay from "@/components/GridOverlay";  // ← Add import

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "GRIMLABS", 
  description: "GRIMLABS — a public, long-term independent research and tinkering lab. Exploring, building, and documenting experimental projects in engineering, technology, and scientific inquiry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${cormorantGaramond.variable} ${openSans.variable} ${inter.variable} ${roboto.variable} ${stixTwoText.variable} ${ebGaramond.variable} ${lora.variable} ${sourceSerif4.variable} ${crimsonPro.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Grid first (lowest z-index) */}
          <GridOverlay pattern="hybrid" gridSize={40} cornerEmphasis={true} />
          
          {/* Then decorations */}
          <PolymathDecorations
            fixed={true}
            density='medium'
            opacityMultiplier={0.4}
          />
          
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}