import React, { useState } from "react";
import styles from "./brand.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const list = [
   "Nike Sportswear",
   "Jordan",
   "NikeLab",
   "ACG",
   "Nike Pro",
   "Nike",
];
export default function Brand() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Brand</span>
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
