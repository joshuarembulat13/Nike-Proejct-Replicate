import React from "react";
import styles from "./sidebar.module.scss";
import Gender from "./gender/gender";
import Price from "./price/price";
import Kids from "./Kids/kids";
import SalesOffer from "./sales&offer/sales.offer";
import Colour from "./colour/colour";
import Sport from "./sports/sport";
import BestFor from "./bestfor/bestfor";
import Athletes from "./athletes/athlete";
import Brand from "./brand/brand";
import Sports from "./sports/sport";

const links = [
   "Shoes",
   "Tops & T-Shirts",
   "Hoodies & Sweatshirts",
   "Jackets",
   "Trousers & Tights",
   "Shorts",
   "Sports Bras",
   "Compression & Baselayer",
   "Tracksuits",
   "Jumpsuits & Rompers",
   "Socks",
   "Accessories & Equipment",
];
export default function Sidebar() {
   return (
      <div className={styles.container}>
         <div className={styles.links}>
            {links.map((name) => (
               <span key={name}>{name}</span>
            ))}
         </div>
         <Gender />
         <Kids />
         <Price />
         <SalesOffer />
         <Colour />
         <Brand />
         <Sports />
         <Athletes />
         <BestFor />
      </div>
   );
}
