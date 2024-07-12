"use client";

import { Roboto } from "next/font/google";
import "./globals.scss";
import { Sidebar } from "@/components/blocks/Sidebar";
import { useState } from "react";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    preload: true,
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const onThemeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    console.log(theme);

    return (
        <html lang="en">
            <body className={roboto.className} data-theme={theme}>
                <Sidebar theme={theme} onThemeSwitch={onThemeSwitch} />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
