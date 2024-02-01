import React from "react";
import styles from "./sales.module.scss";
import {
   TbFilter,
   TbChevronDown,
   TbAdjustmentsHorizontal,
} from "react-icons/tb";
export default function Sales() {
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <h2>Sale (1283)</h2>
            <div className={styles.optionBtn}>
               <button>
                  <span>Hide Filters</span>
                  <TbAdjustmentsHorizontal size={20} />
               </button>
               <button>
                  <span>Sort By</span>
                  <TbChevronDown size={20} />
               </button>
            </div>
         </div>
      </div>
   );
}
