import React, { useState } from "react";
import styles from "./bestfor.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const list = ["Warm Weather", "Wet Weather Condition", "Winter Wear"];
export default function BestFor() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Best For</span>
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
