import React, { useState } from "react";
import styles from "./colour.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
const gender = [
   "Purple",
   "Black",
   "Red",
   "Orange",
   "Blue",
   "White",
   "Brown",
   "Green",
   "Yellow",
   "Grey",
   "Pink",
];

export default function Colour() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Colour</span>
               {down ? <TbChevronDown size={23} /> : <TbChevronUp size={23} />}
            </button>
            <div className={styles.asa}>
               {down
                  ? null
                  : gender.map((name) => (
                       <div className={styles.card} key={name}>
                          <button
                             style={{
                                background: `${name}`,
                                width: "28px",
                                height: "28px",
                                borderRadius: "100px",
                                border: "1px solid #ccc",
                             }}
                          ></button>
                          <span>{name}</span>
                       </div>
                    ))}
            </div>
         </div>
      </div>
   );
}
