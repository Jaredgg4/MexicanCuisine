import React from 'react';
import styles from './styles.module.css';

function Food1() {
    return (
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
    )
} 

export default Food1;