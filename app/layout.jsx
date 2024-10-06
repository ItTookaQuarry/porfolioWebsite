import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "../components/L";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { cookies } from 'next/headers'
 


export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {

  const cookieStore = cookies()
  const lang = cookieStore?.get('language')?.value || 'pl'
console.log(lang)
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >  
         <Providers lang={lang}>
      <Nav/>
          {children}
          <Footer/>
          
          </Providers>
      </body>
    </html>
  );
}
