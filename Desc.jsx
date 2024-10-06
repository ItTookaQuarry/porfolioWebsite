
import { LanguageContext } from './components/L';
import React, { useContext } from 'react';
import {Button} from "@nextui-org/button";
import {Avatar} from "@nextui-org/avatar";
export default function Desc() {


    const { language} = useContext(LanguageContext);

const heading1 = {
    en:"I'm student of Computer science at WSTI in Katowice",
    pl:"Jestem studentem informatyki na WSTI w Katowicach"
}



const heading2 = {
    en:"From 05/2024 i work at Help Desk in eqsystem",
    pl:"Od 05/2024 pracuję na Help Desku w eqsystem"
}



const resp = {
    en:["Core Activities:"," -Problem solving", " -Writing advanced MSSQL queries","-Using internal technical documentation","-Working within Scrum methodology" ],
    pl:["Zakres działań:"," -Rozwiązywanie problemów"," -Pisanie zaawansowanych zapytań w języku MSSQL",
"-Korzystanie z wewnętrznej dokumentacji technicznej","-Praca w metodologii Scrum"]
    
}


const Aboutprojectsection = {
en:["I made some projects.",   <Button color="secondary">
You can see them here 
</Button>  ],
pl:["Zrobiłem kilka projektów.",   <Button color="secondary">
Możesz je zobaczyć tutaj
</Button>  ]
}


const Aboutpowerilftingsection = {
en:["Powerilfting is my biggest passion.",   <Button color="secondary">
You can learn about it here
</Button>  ],
pl:["Trójbój to moja największa pasja.",   <Button color="secondary">
Możesz się o tym dowiedzieć tutaj
</Button>  ]
}





    const ContainerClass =
    "col-start-1 col-span-full md:col-start-1 md:col-span-2  md:text-lg px-10 justify-center items-center font-vt323  font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent grid grid-cols-6";
  return (
    <div className={ContainerClass}>
          

     
<div className='text-xl col-span-full justify-center text-center items-center text-xl font-bold gap-3'>


    Przemysław Konieczny </div>
         
<div className='text-xl col-span-full justify-center text-center items-center text-xl font-bold gap-3'>

Front-end Developer </div>
<br></br>
        
<h1 className='col-span-full  flex gap-4 items-center   '>{heading1[language]} 
</h1>

<br></br>
<h2 className=' m-auto flex gap-4 items-center   '>{heading2[language]} 
</h2>

{resp[language].map((e)=>{
    return <div className='col-span-full  flex gap-4 items-center'>{e}</div>
})}


<br></br>


{Aboutprojectsection[language].map((e)=>{
    return <div className='col-span-4 m-auto flex gap-4 items-center justify-center '>{e}</div>
})}


<br></br>
{Aboutpowerilftingsection[language].map((e)=>{
    return <div className='col-span-4 m-auto flex gap-4 items-center justify-center'>{e}</div>
})}

    </div>
  )
}
