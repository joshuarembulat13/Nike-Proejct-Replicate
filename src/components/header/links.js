import React from "react";
import styles from "./header.module.scss";
const link = [
   "Members Days 🎉",
   "New & Featured",
   "Men",
   "Women",
   " Kids",
   "Kids",
   "Sale",
   "Customise",
   "SNKRS",
];

export default function Link() {
   return (
      <div className={styles.links}>
         {link.map((name) => (
            <li key={name}>
               <span>{name}</span>
            </li>
         ))}
      </div>
   );
}
