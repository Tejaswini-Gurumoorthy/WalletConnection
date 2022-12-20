import MyApp from './_app'
import styles from '../styles/Home.module.css'
import axios from "axios"
import { useState } from 'react';

export default function Home() {
  const [name, setName]= useState('');
  async function getName()
  {
    const response= await axios.get('/api/hello');
    setName(response.data.name)
    
    console.log(response.data.name);
  }

  return (
    <div className={styles.container}>
      <button onClick={getName}>Get name</button>
      <p>Your name is: {name}</p>
    </div>
  )
}
