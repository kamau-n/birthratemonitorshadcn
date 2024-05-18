import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "birthrate",
    description: "created by 2bit",
};

export default function RootLayout({
    children,

}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex justify-end items-end p-3">
                        <ModeToggle />
                    </div>
                    {children}
               
                </ThemeProvider>
            </body>
        </html>
    );
}
