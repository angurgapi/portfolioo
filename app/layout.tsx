import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/meteor.svg" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

// Change this data with your own 🤭
export const metadata: Metadata = {
  title: {
    default: "Sofia Zarowska ✷ Portfolio",
    template: "%s - Sofia Zarowska",
  },
  description: "Fullstack web developer with JavaScript/TypeScript stack.",
  icons: {
    icon: "./favicon.ico",
  },
  applicationName: "Sofia Zarowska's Portfolio",
  generator: "Next.js",
  referrer: "origin",
  themeColor: "#120012",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
};
