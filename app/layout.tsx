import type { Metadata } from "next";
import { JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${jetbrainsMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Grid first (lowest z-index) */}
          <GridOverlay pattern="hybrid" gridSize={40} cornerEmphasis={true} />
          {/* <GridOverlay pattern="dots" dotSize={2} /> */}
          {/* <GridOverlay pattern="blueprint" /> */}
          
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
      </body>
    </html>
  );
}