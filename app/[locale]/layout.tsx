import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { ContextProvider } from "@/store/ContextProvider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import CartProvider from "@/hooks/CartProvider";
import CartModal from "@/components/CartModal";

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
  title: "Wellness",
  description: "Wellness",
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
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={lato.className}>
        <NextIntlClientProvider messages={messages}>
          <ContextProvider>
            <CartProvider>
              <HeaderComponent />
              <CartModal />
              {children}
              <FooterComponent />
            </CartProvider>
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
