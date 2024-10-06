"use client"

import React from 'react'
import { useContext } from "react";
import { LanguageContext } from "./L";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function Chessproject() {

      const { language } = useContext(LanguageContext);

      const appDescription = {
        pl: [
          "-tworzenie pokojów do gry",
          "-czat w czasie rzeczywistym (powiadomienia)",
          "-przeglądanie historii gier (wykaz ruchów każdego z graczy)",
          "-wyszukiwanie innych użytkowników, przeglądanie ich profili oraz dodawanie do znajomych",
          "-wyświetlanie na bieżąco powiadomień",
        ],
        en: [
          "-create game rooms",
          "-real-time chat (notifications)",
          "-view game history (list of moves for each player)",
          "-search for other users, view their profiles, and add them as friends",
          "-receive real-time notifications",
        ]
      };
  return (
    <>



<div className="grid col-span-full mds:col-span-2  gap-y-2 mds:gap-y-1  font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
<h1 className='text-center hidden mds:block'>{language== 'pl' ? "Wirtualne Szachy": "Chess website"}</h1>
{appDescription[language].map((e)=>{
    return (<div className='text-base md:text-lg px-10'>{e}</div>)
})}

<Button
      href="https://chessappp.vercel.app"
      as={Link}
      color="secondary"
      showAnchorIcon
      variant="solid"
      className='m-auto'
    >
     {language=='pl' ? "Przejdź do projektu" : "Go to the project"}
    </Button>
</div>



<div className='m-auto row-start-1 col-span-full mds:col-start-3 mds:col-span-2 m-auto font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
<h1 className='text-center block mds:hidden'>{language== 'pl' ? "Wirtualne Szachy": "Chess website"}</h1>
<video controls class="border-4 border-purple-500 rounded-lg shadow-lg  h-[200px] w-[300px] mds:h-[400px] mds:w-[500px]">
  <source
            src="https://firebasestorage.googleapis.com/v0/b/stripesetup-7f02d.appspot.com/o/szachy.mp4?alt=media&token=4b0a6a43-921e-4c37-adbf-a8b13233d75c"
            type="video/mp4"
          />
 


  </video></div>

 
  </>
  )
}
