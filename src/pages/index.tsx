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
      
      <Card1 src={pic1} alt="Machaca" width={300} height={200} href='#Machaca'/>
      <Card2 src={pic2} alt="ceviche" width={300} height={200} href='#Cochinita'/>
      <Card3 src={pic3} alt="Cochinita" width={300} height={200} href='#Ceviche'/>
      
      <br/>
      <div id="Ceviche" className={styles.desc}>
        <h2>Ceviche</h2>
        <p>Ceviche, also known as seviche or cebiche, is a delightful dish with a rich history. Let’s dive into its origins and description:</p>
        <ol>
          <li>History:</li>
          <ul>
            <li>Incas and Tumbo: Food historians believe that ceviche originated among the Incas, who seasoned their fish with salt and chili peppers and “cooked” it in the juice of tumbo, also known as banana passionfruit.</li>
            <li>Arabian Influence: Another intriguing theory suggests that Arabian immigrants brought ceviche to Peru</li>
          </ul>
          <li>Description</li>
          <ul>
            <li>Origin: Ceviche comes from coastal areas of Central and South America.</li>
            <li>Ingredients: It typically consists of raw fish or shellfish marinated in citrus juice (usually lemon or lime).</li>
            <li>Seasonings: The marinade includes local chili peppers or chili, sliced or chopped onion, and chopped cilantro.</li>
          </ul>
        </ol>
      </div>

      

      <div id="Cochinita" className={styles.desc}>
        <h2>Cochinita</h2>
        <p>Cochinita pibil is a traditional Yucatec Mayan slow-roasted pork dish from the Yucatán Peninsula. Let’s explore its history and description:</p>
        <ol>
          <li>History:</li>
          <ul>
            <li>Mayan Roots: Cochinita pibil has Mayan origins, dating back hundreds of years.</li>
            <li>Marination: Traditionally, it involves marinating the meat (usually a whole suckling pig) in a paste made primarily with annatto seeds.</li>
            <li>Cooking Method: The marinated meat is then wrapped in banana leaves and baked underground on hot stones until it becomes meltingly tender</li>
          </ul>
          <li>Description:</li>
          <ul>
            <li>Pork: Traditionally, it uses a whole suckling pig, but pork shoulder (butt roast) or pork loin can also be used.
Citrus Marinade: The meat is marinated in strongly acidic citrus juice (usually Seville or bitter oranges).
Annatto (Achiote): Annatto seeds give the dish its characteristic burnt orange color and add flavor.</li>
            <li>The high acid content of the marinade and slow cooking time tenderizes the meat, making even tough cuts usable.</li>
            <li>It’s typically enjoyed with yellow corn tortillas, red pickled onion, refried black beans, and habanero chilies</li>
          </ul>
        </ol>
      </div>

      <div id="Machaca" className={styles.desc}>
        <h2>Machaca</h2>
        <p>Machaca is a traditional meat delicacy from Northern Mexico. Here are some interesting facts about it:</p>
        <ol>
          <li>Origin and Preparation:</li>
          <ul>
            <li>Machaca is dried meat that is typically prepared with pork or beef.</li>
            <li>It is believed to have been invented in the little pueblo of Ciénega de Flores in Nuevo Leon.</li>
            <li>Back then, it was often prepared with venison, but these days, beef tenderloin is the preferred choice.</li>
          </ul>
          <li>Regional Association:</li>
          <ul>
            <li>Machaca is associated with rancheros, vaqueros (Mexican cowboys), and people living in rural areas.</li>
            <li>You’ll find it frequently in the states of Sonora, Sinaloa, Nuevo Leon, Monterrey, and Chihuahua.</li>
            <li>Even in random states and cities in other parts of Mexico, you can find places that sell or serve this specialty.</li>
          </ul>
          <li>Preparation for Consumption:</li>
          <ul>
            <li>When preparing machaca, a cut of meat is rubbed and seasoned with salt.</li>
            <li>It is then left out in the sun to dry.</li>
            <li>The dried meat is rehydrated with water and cooked in oil before being eaten.</li>
          </ul>
        </ol>
      </div>
    </main>
  );
}