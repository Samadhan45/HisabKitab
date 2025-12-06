import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata = {
  title: "HisabKitab - AI-Powered Financial Intelligence",
  description: "Take control of your finances with HisabKitab. Track expenses, set budgets, and get AI-powered insights tailored for the Indian market.",
  keywords: "finance, budget, expense tracker, india, ai, money management, hisabkitab",
  authors: [{ name: "Samadhan Kadam" }],
  openGraph: {
    title: "HisabKitab - AI-Powered Financial Intelligence",
    description: "Take control of your finances with HisabKitab. Track expenses, set budgets, and get AI-powered insights.",
    url: "https://hisabkitab.click", // Assuming a URL or placeholder
    siteName: "HisabKitab",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "HisabKitab Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HisabKitab - AI-Powered Financial Intelligence",
    description: "Take control of your finances with HisabKitab. Track expenses, set budgets, and get AI-powered insights.",
    images: ["/banner.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made By Samadhan Kadam</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
