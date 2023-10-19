"use client"
//1. Import Area
// import defaultimport from 'somelibrary/.../../../somelocation'
import { useState } from 'react';
import styles from './page.module.css'


//2. Defination Area
let name='PRADEEP';
 function Home() {
  //2.1 Hooks Area
  //const [variable,setVariableFunction]= useState(initialdata)
  const [name3,setVariableFunction]= useState('KAVISH')

  let name2='SHUBHAM';
  return (
    <main  >
      <h1>HELLO {name}</h1>
      <h1>HELLO {name2}</h1>
      <h1>HELLO {name3}</h1>
    </main>
  )
}

//3. Export Area
export default Home;