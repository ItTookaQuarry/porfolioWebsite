"use client";
import { useContext } from "react";
import { LanguageContext } from "./L";
import React from "react";
import { usePathname } from "next/navigation";
import { InstagramIcon } from "./icons";
import { LinkedInIcon } from "./icons";
import { GitHubIcon  } from "./icons";
import { Link } from "@nextui-org/link";
import { English, Polish } from "./icons";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = usePathname();
  const isActive = (path) => router === path;

  const menuItems = {
    pl: [{text:"O Mnie",link:'/'},{text:"Moje projekty",link:'/projects'},{text:"Trójbój",link:'/powerlifting'} ],

    en: [{text:"About me",link:'/'}, {text:"My projects",link:'/projects'}, {text:"Powerlifting",link:'/powerlifting'}],
  };

  const active =
    "font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent";
  const notactive =
    "text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent";
  const { language, toggleLanguage } = useContext(LanguageContext);
  const changeLanguage = (lang) => {
    toggleLanguage(lang);
  };

  return (
    <Navbar className="">
      
      <NavbarMenuToggle className="sm:block md:hidden" />
      <NavbarContent justify="end" className="xs:hidden md:flex">
        <NavbarItem>
          <Link className={isActive("/") ? `${active}` : `${active}`} href="/">
            {language == "pl" ? `O mnie /` : "About me /"}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/projects"
            className={isActive("Projects") ? `${active}` : `${active}`}
          >
            {language == "pl" ? "Moje Projekty /" : "My Projects /"}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/powerlifting"
            className={isActive("Powerlifting") ? `${active}` : `${active}`}
          >
            {language == "pl" ? "Trójbój" : "Powerlifting"}
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className={`  w-[200px] `} >
        {menuItems[language].map((item, index) => (
          <>
          <NavbarMenuItem key={`${item.text}-${index}`} >

            <Link
            href={item.link}
           className=" text-2xl font-vt323 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
            {item.text}
            </Link>
          </NavbarMenuItem>
          <br></br>
          </>
        ))}
         <div className="grid gap-5">
   
         <Link href="https://www.instagram.com/przemyslawkoniecznyy/?igsh=cWI4Z3V1eDB1dXVv&utm_source=qr">    <InstagramIcon/></Link>
        <Link href="https://www.linkedin.com/in/przemys%C5%82aw-konieczny-2979a4266/">   <LinkedInIcon/></Link>
   <Link href="https://github.com/ItTookaQuarry"> <GitHubIcon  /></Link>
       
  



         </div>
     
      </NavbarMenu>






      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <div>
            {language == "en" ? (
              <button
                className="hover:text-gray-400"
                onClick={() => changeLanguage("pl")}
              >
                <Polish />
              </button>
            ) : (
              <button onClick={() => changeLanguage("en")}>
                <English />
              </button>
            )}
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
