import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ميزانيتي", description: "خططي لراتبج وادخارج ومصاريفج بالدينار العراقي", applicationName: "ميزانيتي", appleWebApp: { capable: true, title: "ميزانيتي", statusBarStyle: "default" }, manifest: "/mizani-app/manifest.webmanifest" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f7fc" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
