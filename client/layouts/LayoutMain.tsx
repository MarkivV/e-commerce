import React from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "./../styles/LayoutMain.module.scss"
import NavbarBottom from "@/components/NavbarBottom";

const LayoutMain = ({children}) => {
    return (
        <div className={styles.wrap}>
            <Head>
                <title>Бражкович</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar/>
            <NavbarBottom/>
            <div >
                <div>{children}</div>
            </div>
        </div>
    );
};

export default LayoutMain;
