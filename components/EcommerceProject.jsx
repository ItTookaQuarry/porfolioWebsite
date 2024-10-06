"use client"

import React from 'react'
import { useContext } from "react";
import { LanguageContext } from "./L";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function EcommerceProject() {

      const { language } = useContext(LanguageContext);

      const appDescription = {
        pl: [
          "-tworzenie spersonalizowanych produktów przy użyciu sztucznej inteligencji - wycinanie tła ze zdjęć, uzupełnianie tła przy pomocy zapytań (zewnętrzne API)",
          "-manualna edycja grafik: powiększanie zdjęć, zmiana kontrastu czy kształtu",
          "-nakładanie tekstu lub naklejek na projekt",
          "-zapisywanie projektu w koszyku i jego wyświetlanie (baza danych Firebase)",
          "-wykonywanie płatności z wykorzystaniem biblioteki Stripe w wersji testowej",
        ],
        en: [
          "-create personalized products using artificial intelligence - background removal from images, background completion via queries (external API)",
          "-manual image editing: zooming in, adjusting contrast, or altering shape",
          "-overlay text or stickers onto the project",
          "-save the project to the cart and display it (Firebase database)",
          "-perform payments using the Stripe library in test mode",
        ]
      };
  return (
    <>



<div className="grid col-span-full mds:col-span-2 gap-y-2 mds:gap-y-4 row-auto mds:row-start-2  font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
<h1 className='text-center hidden mds:block'>{language== 'pl' ? "Sklep z edytorem graficznym": "Store with a graphic editor"}</h1>
{appDescription[language].map((e)=>{
    return (<div className='text-base md:text-md px-10'>{e}</div>)
})}

<Button
      href="https://sklep-iota.vercel.app/edytor"
      as={Link}
      color="secondary"
      showAnchorIcon
      variant="solid"
      className='m-auto'
    >
     {language=='pl' ? "Przejdź do projektu" : "Go to the project"}
    </Button>
</div>


<div className='m-auto row-start-3 md:row-start-2 col-span-full mds:col-start-3 mds:row-start-2 mds:col-span-2 m-auto font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
<h1 className='text-center block mds:hidden'>{language== 'pl' ? "Sklep z edytorem graficznym": "Store with a graphic editor"}</h1>
<video controls class="border-4 m-auto border-purple-500 rounded-lg shadow-lg  h-[200px] w-[300px] mds:h-[400px] mds:w-[500px]">
  <source
            src="https://firebasestorage.googleapis.com/v0/b/stripesetup-7f02d.appspot.com/o/sklep.mp4?alt=media&token=77fe0a21-bb27-4139-9bb7-4dc8fdbd964d"
            type="video/mp4"
          />
 


  </video></div>


 
  </>
  )
}

