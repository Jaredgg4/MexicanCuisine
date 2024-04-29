import styles from '../styles/Home.module.css';
import Image from "next/image"; // Import next/image
import React from 'react';

type props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
}

const Card3:React.FC<props> = ({src, alt, width, height, href}) =>{
    return (
        <div className={styles.card3}>
            <h3>Oaxaqueño: </h3>
            {/* Use next/image component */}
            <Image src={src} alt={alt} width={width} height={height} />
            <a href={href}><button className={styles.btn1}>Learn More</button></a>
        </div>
    )
}

export default Card3;