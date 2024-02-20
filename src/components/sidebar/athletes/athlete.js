import React, { useState } from "react";
import styles from "./athletes.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const list = [
   "LeBron James",
   "Kevin Durant",
   "Ja Morant",
   "Serena Williams",
   "Rafael Nadal",
   "Naomi Osaka",
   "Kylian Mbappe",
   "Russel Westbrook",
   "Giannis Antetokoumpo",
   "Nyjah Huston",
   "Jayson Tatum",
];
export default function Athletes() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Athletes</span>
               {down ? <TbChevronDown size={23} /> : <TbChevronUp size={23} />}
            </button>
            {down
               ? null
               : list.map((name) => (
                    <div className={styles.card} key={name}>
                       <input type='checkbox' />
                       <span>{name}</span>
                    </div>
                 ))}
         </div>
      </div>
   );
}
