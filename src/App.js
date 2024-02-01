import React from "react";
import styles from "./app.module.scss";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Sales from "./components/header/sales/sale";
import Sidebar from "./components/sidebar/sidebar";
import Products from "./components/products/product";
import Footer from "./components/footer/footer";

export default function App() {
   return (
      <>
         <Navbar />
         <Header />
         <Sales />
         <div className={styles.data}>
            <div className={styles.main}>
               <Sidebar />
               <Products />
            </div>
         </div>
         <Footer />
      </>
   );
}
