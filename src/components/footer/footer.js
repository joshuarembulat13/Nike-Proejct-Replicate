import styles from "./footer.module.scss";
import React from "react";
import {
   TbMapPinFilled,
   TbBrandTwitterFilled,
   TbBrandFacebookFilled,
   TbBrandYoutubeFilled,
   TbBrandInstagram,
} from "react-icons/tb";

const links = [
   "Guides",
   "Terms of Service",
   "Term of Use",
   "Nike Privacy Policy",
];

const ss = [
   "FIND A STORE",
   "BECOME A MEMBER",
   "STUDENT DISCOUNTS",
   "Send Us Feedback",
];

const aa = [
   "Order Status",
   "Delivery",
   "Returns",
   "Payment Options",
   "Contact Us",
];

const nike = ["News", "Careers", "Investors", "Sustainability"];
const socmed = [
   { name: "Twitter", icon: <TbBrandTwitterFilled size={20} /> },
   { name: "Facebook", icon: <TbBrandFacebookFilled size={20} /> },

   { name: "Youtube", icon: <TbBrandYoutubeFilled size={20} /> },
   { name: "Instagram", icon: <TbBrandInstagram size={20} /> },
];
export default function Footer() {
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <div className={styles.stores}>
               <div className={styles.storeContainer}>
                  {ss.map((name) => (
                     <button key={name}>{name}</button>
                  ))}
               </div>

               <div className={styles.sheesh}>
                  <h2>Get Help</h2>
                  <div className={styles.sc}>
                     {aa.map((name) => (
                        <button key={name}>{name}</button>
                     ))}
                  </div>
               </div>

               <div className={styles.sheesh}>
                  <h2>About Nike</h2>
                  <div className={styles.sc}>
                     {nike.map((name) => (
                        <button key={name}>{name}</button>
                     ))}
                  </div>
               </div>
            </div>
            <div className={styles.socialMedia}>
               {socmed.map(({ icon, name }) => (
                  <button key={name}>{icon}</button>
               ))}
            </div>
         </div>
         <div className={styles.footer}>
            <div className={styles.footerContainer}>
               <div className={styles.location}>
                  <TbMapPinFilled size={18} />
                  <span>Philippines</span>
               </div>
               <div className={styles.copyrights}>
                  <span>&copy; 2023 Nike, Inc. All Rights Reserved</span>
               </div>
            </div>
            <div className={styles.links}>
               {links.map((name) => (
                  <button key={name}>
                     <span>{name}</span>
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
}
