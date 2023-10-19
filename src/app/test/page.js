'use client'

import { Button } from '@mui/material';
//1. Import Area
import React, { useEffect, useState } from 'react'


//2. Define Area
function page() {
    //2.1 Hooks area
        const [name4,setName4 ] = useState('VIKKY')
        console.log('Good morning')
        useEffect(()=>{
            console.log(`Hello ${name4}, The page loaded successfully now you can do anything`)
        },[]);


    //2.2 Function Defination Area
       const  pradeep =()=>{
        console.log("Hello");
        let x =  prompt("Please enter your name");
        console.log(x)
        setName4(x);
    }

    //function returning JSX
  return (
    <>
        <div> Hello {name4}</div>
        <div> This is a test page</div>
    <Button variant="contained" onClick={()=>{ pradeep() }}>Enter your Name</Button>
    </>
  )
}

//3. Export Area 
export default page ;