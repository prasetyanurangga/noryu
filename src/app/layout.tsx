import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/custom/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="md:p-16 px-8 py-4 flex flex-row justify-between items-center">
              <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Noryu</h1>
              <ModeToggle />
            </div>
            {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
