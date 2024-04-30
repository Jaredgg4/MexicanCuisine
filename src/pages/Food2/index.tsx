import React from 'react';
import styles from './styles.module.css';

function Food1() {
    return (
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
    )
} 

export default Food1;