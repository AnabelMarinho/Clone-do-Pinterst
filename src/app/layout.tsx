import type { Metadata } from "next";
import {Inter} from "next/font/google";

import { Header } from "@/components/ui/headerPasta/Header";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Clone do Pinterest",
  description: "Criado com Nextjs, por Anabel Marinho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className="antialiased">
        <Header />
        <div className="pt-[80px]">{children}</div>
      </body>
    </html>
  );
}