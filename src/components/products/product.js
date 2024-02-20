import React from "react";
import styles from "./product.module.scss";
import ProductCard from "./card/card";
import { data } from "./data";
export default function Products() {
   return (
      <div className={styles.container}>
         <div className={styles.productContainer}>
            <div className={styles.productG}>
               <div className={styles.promo}>
                  <img
                     src='/promo/promo.png'
                     alt='promo'
                     loading='lazy'
                     className={styles.promoImage}
                  />
               </div>
               {data.map(
                  ({
                     name,
                     size,
                     category,
                     description,
                     discount,
                     image,
                     price,
                     sub,
                  }) => (
                     <ProductCard
                        key={name}
                        name={name}
                        size={size}
                        category={category}
                        description={description}
                        discount={discount}
                        image={image}
                        price={price}
                        subImage={sub}
                     />
                  )
               )}
            </div>
         </div>
      </div>
   );
}
