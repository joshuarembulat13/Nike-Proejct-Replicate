import React, { useState } from "react";
import styles from "./price.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const gender = [
   "Under ₱3,000",
   "₱3,000 - ₱6,000",
   "₱6,001 - ₱11,199",
   "Over ₱12,000",
];

export default function Price() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Shop By Price</span>
               {down ? <TbChevronDown size={23} /> : <TbChevronUp size={23} />}
            </button>
            {down
               ? null
               : gender.map((name) => (
                    <div className={styles.card} key={name}>
                       <input type='checkbox' />
                       <span>{name}</span>
                    </div>
                 ))}
         </div>
      </div>
   );
}
