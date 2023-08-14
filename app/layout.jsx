import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cozy Dev~",
  description: "Developed with Nextjs and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
