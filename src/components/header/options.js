import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import {
   TbSearch,
   TbShoppingBag,
   TbHeart,
   TbUser,
   TbMenu2,
} from "react-icons/tb";

function getWindowDimensions() {
   return {
      width: window.innerWidth,
      height: window.innerHeight,
   };
}

export default function Options() {
   const [windowSize, setWindowSize] = useState(getWindowDimensions);

   useEffect(() => {
      function handleSize() {
         setWindowSize(getWindowDimensions());
      }

      window.addEventListener("resize", handleSize);
      return () => window.removeEventListener("resize", handleSize);
   }, []);
   return (
      <div className={styles.options}>
         <div className={styles.optionSearch}>
            <TbSearch size={20} />
            <input type='search' placeholder='Search' />
         </div>
         {windowSize.width >= 900 ? (
            <div className={styles.grpOptionBtn}>
               <button>
                  <TbHeart size={23} />
               </button>
               <button>
                  <TbShoppingBag size={23} />
               </button>
            </div>
         ) : (
            <div className={styles.grpOptionBtn}>
               <button>
                  <TbSearch size={23} />
               </button>
               <button>
                  <TbShoppingBag size={23} />
               </button>
               <button>
                  <TbUser size={23} />
               </button>
               <button>
                  <TbMenu2 size={23} />
               </button>
            </div>
         )}
      </div>
   );
}
