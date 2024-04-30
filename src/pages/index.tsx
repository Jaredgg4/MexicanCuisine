import Image from "next/image"; // Import next/image
import pic1 from "../assets/Machaca.jpeg";
import pic2 from '../assets/Ceviche.jpeg';
import React from 'react';
import Card1 from '../components/Card1';
import styles from '../styles/Home.module.css';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import pic3 from '../assets/Cochinita.jpeg';
export default function Home() {
  return (
    <main className={styles.main}> 
      
      <div>
        <h1>Cuisine from Mexico</h1>
        <p>Mexican cuisine is incredibly diverse, with each region offering its own unique flavors and specialties. Here are three delicious dishes from different regions of Mexico:</p>
      </div>

      <Card1 src={pic1} alt="Machaca" width={300} height={200} href='../Food1'/>
      <Card2 src={pic2} alt="ceviche" width={300} height={200} href='../Food2'/>
      <Card3 src={pic3} alt="Cochinita" width={300} height={200} href='../Food3'/>
      
    </main>
  );
}