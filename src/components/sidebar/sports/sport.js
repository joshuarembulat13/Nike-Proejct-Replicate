import React, { useState } from "react";
import styles from "./sports.module.scss";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const list = [
   "Lifestyle",
   "Running",
   "Training & Gym",
   "Basketball",
   "American Football",
   "Football",
   "Yoga",
   "Baseball",
   "Golf",
   "Skateboarding",
   "Tennis",
   "Athletics",
   "Walking",
   "Outdoor",
   "Volleyball",
   "Hiking",
   "Dance",
   "Cheerleading",
   "Cycling",
   "HIIT",
];
export default function Sports() {
   const [down, setDown] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <button onClick={() => setDown(() => !down)}>
               <span>Kids</span>
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
