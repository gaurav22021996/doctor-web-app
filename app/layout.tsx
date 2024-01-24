import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import App from "./app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
        <App>
          {children}
          </App>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
