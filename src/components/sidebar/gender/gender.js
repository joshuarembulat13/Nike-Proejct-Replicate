import React, { useState } from "react";
import styles from "./gender.module.scss";
import { TbCheck, TbChevronDown, TbChevronUp } from "react-icons/tb";
const gender = ["Male", "Women", "Unisex"];

export default function Gender() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Gender</span>
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
