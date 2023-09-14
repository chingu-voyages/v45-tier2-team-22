import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AppContext from "@/context/AppContext";

const roboto = Roboto({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fireball",
  description: "Chingu Level II Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
