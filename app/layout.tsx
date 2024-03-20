import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderNavBar from "./HeaderNavBar";
import Logo from "./Logo";

// const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorldWise",
  description:
    "WorldWise is a single page application that allows users to share all the interesting places they visited.",
};

type RootLayoutProp = {
  readonly children: React.ReactNode;
};

// className={clsx(montserrat.className)}

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en">
      <body className="min-h-full w-full overflow-hidden">
        <HeaderNavBar />
        <Logo />
        <>{children}</>
      </body>
    </html>
  );
}
