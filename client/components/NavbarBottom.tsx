import React from 'react';
import {inspect} from "util";
import styles from "./../styles/NavbarBottom.module.scss"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const NavbarBottom = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.categories}>
                <div>
                    <h1>Каталог товарів</h1>
                </div>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.searchDiv}>
                    <input type="text" placeholder={"Пошук"}/>
                    <input type={"submit"} className={styles.searchButton} placeholder={"Знайти"}/>
                </div>
            </div>
            <div className={styles.activities}>
                <BookmarkIcon/>
                <LocalMallOutlinedIcon/>
            </div>
        </div>
    );
};

export default NavbarBottom;
