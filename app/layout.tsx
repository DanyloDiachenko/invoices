import { Roboto } from "next/font/google";
import "./globals.scss";

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
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
