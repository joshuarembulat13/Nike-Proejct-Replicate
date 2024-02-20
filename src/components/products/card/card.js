import React, { useState } from "react";
import styles from "./productCard.module.scss";

export default function ProductCard({
   name,
   size,
   category,
   description,
   discount,
   image,
   price,
   subImage,
}) {
   const compute = discount / 100;
   const disc = price * compute;
   const total = price - disc;

   const [subImages, setImage] = useState(image);
   return (
      <div className={styles.container}>
         <div className={styles.avatar}>
            {subImages ? (
               <img src={image} alt={name} className={styles.image} />
            ) : (
               subImage.map(({ img }) => (
                  <img src={img} className={styles.image} alt='' />
               ))
            )}
         </div>
         {subImage
            ? subImage.map(({ img, id }) => (
                 <button value={img} onClick={(e) => setImage(e.target.value)}>
                    <img src={img} alt='' height={40} width={40} />
                 </button>
              ))
            : null}
         <div className={styles.details}>
            <h2 className={styles.title}>{name}</h2>
            <h2 className={styles.category}>{category}</h2>
            <span className={styles.colour}>1 Colour</span>

            <div className={styles.pricing}>
               <div className={styles.mainPrice}>
                  <span className={styles.totalPrice}>
                     {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "PHP",
                        notation: "standard",
                        maximumFractionDigits: 0,
                     }).format(total - 58)}
                  </span>
                  <span className={styles.discount}>
                     {discount ? (
                        <s>
                           {Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "PHP",
                              notation: "standard",
                              maximumFractionDigits: 0,
                           }).format(price)}
                        </s>
                     ) : null}
                  </span>
                  <span className={styles.off}>{discount}% off</span>
               </div>
               <span className={styles.off}>30% off w/ code MEMBER</span>
            </div>
         </div>
      </div>
   );
}
