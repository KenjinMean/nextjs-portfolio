import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kenjinmean.github.io/nextjs-portfolio/"),

  title: "Jin",
  authors: {
    name: "Jin",
  },

  description:
    "a Fullstack Developer. Passionate about building modern web applications that users love, I'm dedicated to creating high-quality solutions that make a meaningful impact. Let's build something amazing together!",
  openGraph: {
    title: "Jin",
    description:
      "a Fullstack Developer. Passionate about building modern web applications that users love, I'm dedicated to creating high-quality solutions that make a meaningful impact. Let's build something amazing together!",
    url: "https://kenjinmean.github.io/nextjs-portfolio/",
    siteName: "Jin",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Jin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
