import styles from './../styles/ProductCard.module.scss';
import {FaBookmark, FaStar} from 'react-icons/fa';
import {FC} from "react";

interface Props {
    name: string;
    price: number;
    description: string;
    image: string;
    isNew: boolean;
    isOnSale: boolean;
}

const ProductCard: FC<Props> = ({name, price, description, image, isNew, isOnSale}) => {
    return (
        <div className={styles.productCard}>
            <div
                className={styles.productCardImage}
                style={{backgroundImage: `url(${image})`}}
            >
                {isNew && (
                    <div className={styles.newFlag}>
                        <span>Новинка</span>
                    </div>
                )}
                {isOnSale && (
                    <div className={styles.saleFlag}>
                        <span>-25%</span>
                    </div>
                )}
            </div>
            <div className={styles.productCardBody}>
                <div className={styles.productCardHeader}>
                    <h3 className={styles.productCardTitle}>{name}</h3>
                    <button className={styles.bookmarkButton}>
                        <FaBookmark/>
                    </button>
                </div>
                <div className={styles.productCardDescription}>
                    <p>{description}</p>
                </div>
                <div className={styles.productCardPrice}>
                    {isOnSale && (
                        <span className={styles.oldPrice}>1200 грн</span>
                    )}
                    <span className={styles.price}>{price} грн</span>
                </div>
                <div className={styles.productCardActions}>
                    <button className={styles.cartButton}>
                        <span>Купити</span>
                    </button>
                    <div className={styles.rating}>
                        <FaStar className={styles.starIcon}/>
                        <FaStar className={styles.starIcon}/>
                        <FaStar className={styles.starIcon}/>
                        <FaStar className={styles.starIcon}/>
                        <FaStar className={styles.starIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;