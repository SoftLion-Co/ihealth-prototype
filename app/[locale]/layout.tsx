import HeaderComponent from "@/components/HeaderComponent";
import "./globals.css";
import type { Metadata } from "next";
import FooterComponent from "@/components/FooterComponent";
import localFont from "next/font/local";

const lato = localFont({
  src: [
    {
      path: "../../fonts/Lato-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/Lato-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "IHealth",
  description: "IHealth",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang={locale}>
      <body className={lato.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
