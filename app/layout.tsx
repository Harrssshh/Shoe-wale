import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shoeswale.in"),
  title: "Shoes Wale | Sport Sneakers — Visit Our Udaipur Store",
  description:
    "Shoes Wale — premium sport sneakers in Udaipur. Visit our store or follow @shoes_wale7773 on Instagram for the latest drops. Nike, Jordan, Adidas & more.",
  openGraph: {
    title: "Shoes Wale | Game On.",
    description: "Sport sneakers in Udaipur. In-store & Instagram.",
    images: ["/products/air-max-pulse.svg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}>
        <MotionProvider>
          <PageTransition>{children}</PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}
