import React from 'react';
import {inspect} from "util";
import styles from "./../styles/NavbarBottom.module.scss"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
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
                    <button className={styles.searchButton}>
                        <h2>Знайти</h2>
                    </button>
                </div>
            </div>
            <div className={styles.activities}>
                <div>
                    <BookmarkBorderIcon style={{fontSize: "36px", color: "#1b71e7"}}/>
                    <h2>Закладки</h2>
                </div>
                <div>
                    <LocalMallOutlinedIcon style={{fontSize: "36px", color: "#1b71e7"}}/>
                    <h2>Кошик</h2>
                </div>
            </div>
        </div>
    );
};

export default NavbarBottom;
