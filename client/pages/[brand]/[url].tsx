import styles from "./../../styles/Product.module.scss";
import {GetServerSideProps} from "next";
import {useState} from "react";

type ProductProps = {
    image: string;
    brand: string;
    title: string;
    rating: number;
    description: string;
    isNew?: boolean;
    isSale?: boolean;
    price: number;
    salePrice?: number;
    availability: boolean;
    code: string;
};

const Product = ({
                     image,
                     brand,
                     title,
                     rating,
                     description,
                     isNew = false,
                     isSale = false,
                     price,
                     salePrice,
                     availability,
                     code,
                 }: ProductProps) => {

    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className={styles.product}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} className={styles.image}/>
                </div>
                <div className={styles.details}>
                    <div className={styles.brand}>{brand}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.rating}>
                        {Array.from({length: rating}, (_, i) => (
                            <span key={i} className={styles.star}/>
                        ))}
                    </div>

                    {isNew && <div className={styles.sticker}>Новинка</div>}
                    {isSale && (
                        <div className={styles.sticker}>
                            Акція ({Math.floor(((price - salePrice!) / price) * 100)}%)
                        </div>
                    )}
                    <div className={styles.prices}>
                        <div className={styles.price}>
                            {salePrice ? <s>{price}</s> : price} грн
                        </div>
                        {salePrice && (
                            <div className={styles.salePrice}>
                                {salePrice} грн
                                <div className={styles.save}>
                                    Заощаджуйте {price - salePrice} грн
                                </div>
                            </div>
                        )}
                        <div
                            className={`${styles.availability} ${
                                availability ? styles.available : styles.notAvailable
                            }`}
                        >
                            {availability ? "В наявності" : "Немає в наявності"}
                        </div>
                        <div className={styles.code}>Код товару: {code}</div>
                    </div>
                    <button className={styles.cartButton}>В корзину</button>
                    <button className={styles.favoriteButton}>
                        Додати до улюблених
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.tabs}>
                    <div className={styles.tab} onClick={()=>setSelectedTab(1)}>Характеристика</div>
                    <div className={styles.tab} onClick={()=>setSelectedTab(2)}>Опис бренду</div>
                    <div className={styles.tab} onClick={()=>setSelectedTab(3)}>Відгуки</div>
                </div>

                <div className={styles.tabContent}>
                    {
                        selectedTab === 1 && (
                                <div className={styles.features}>
                                    <div className={styles.feature}>
                                        <div className={styles.featureName}>Тип:</div>
                                        <div className={styles.featureValue}>Eau de Parfum</div>
                                    </div>
                                    <div className={styles.feature}>
                                        <div className={styles.featureName}>Обєм:</div>
                                        <div className={styles.featureValue}>50 мл</div>
                                    </div>
                                    <div className={styles.feature}>
                                        <div className={styles.featureName}>Склад:</div>
                                        <div className={styles.featureValue}>
                                            алкоголь, вода, ароматизатор
                                        </div>
                                    </div>
                                    <div className={styles.feature}>
                                        <div className={styles.featureName}>Парфумер:</div>
                                        <div className={styles.featureValue}>John Doe</div>
                                    </div>
                                </div>
                        )
                    }

                    {
                        selectedTab === 2 && (
                            <>
                                <div className={styles.brandDescription}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        non est augue. Morbi rhoncus pellentesque purus. Nullam gravida
                                        ullamcorper nisl, vitae aliquet nibh imperdiet eu. Nullam
                                        consectetur enim vel dolor porta dapibus.
                                    </p>
                                    <p>
                                        Quisque a massa id nisi venenatis facilisis. Praesent euismod
                                        ultrices turpis, vitae auctor dui dignissim vel. Aliquam semper
                                        tincidunt mattis. Vivamus vel magna libero. Mauris porttitor
                                        feugiat risus, non faucibus erat consequat non. In facilisis
                                        tellus eget arcu vehicula, eu maximus arcu venenatis.
                                    </p>
                                </div>
                            </>
                        )
                    }

                    {
                        selectedTab === 3 && (
                            <div className={styles.reviews}>
                                <div className={styles.rating}>
                                    <div className={styles.ratingBar}>
                                        <div
                                            className={`${styles.ratingValue}`}
                                            style={{width: "80%"}}
                                        />
                                    </div>
                                    <div className={styles.ratingCount}>4.0 (120 відгуків)</div>
                                </div>
                                <form className={styles.reviewForm}>
                                    <h3 className={styles.formTitle}>Залишити відгук</h3>
                                    <div className={styles.formRow}>
                                        <label htmlFor="name" className={styles.formLabel}>
                                            Імя:
                                        </label>
                                        <input type="text" id="name" className={styles.formInput}/>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label htmlFor="comment" className={styles.formLabel}>
                                            Коментар:
                                        </label>
                                        <textarea
                                            id="comment"
                                            className={`${styles.formInput} ${styles.formTextarea}`}
                                        />
                                    </div>
                                    <div className={styles.formRow}>
                                        <label htmlFor="rating" className={styles.formLabel}>
                                            Рейтинг:
                                        </label>
                                        <select id="rating" className={styles.formSelect}>
                                            <option value="5">5 зірок</option>
                                            <option value="4">4 зірки</option>
                                            <option value="3">3 зірки</option>
                                            <option value="2">2 зірки</option>
                                            <option value="1">1 зірка</option>
                                        </select>
                                    </div>
                                    <button className={styles.formSubmitButton}>Відправити</button>
                                </form>
                                <div className={styles.reviewList}>
                                    <div className={styles.review}>
                                        <div className={styles.reviewHeader}>
                                            <div className={styles.reviewAuthor}>John Doe</div>
                                            <div className={styles.reviewDate}>20.10.2022</div>
                                        </div>
                                        <div className={styles.reviewBody}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer non est augue. Morbi rhoncus perat purus. Nullam gravida ullamcorper nisl,
                                            vitae aliquet nibh imperdiet eu. Nullam consectetur enim vel dolor porta dapibus.
                                        </div>

                                    </div>
                                    <div className={styles.review}>
                                        <div className={styles.reviewHeader}>
                                            <div className={styles.reviewAuthor}>Jane Doe</div>
                                            <div className={styles.reviewDate}>18.10.2022</div>
                                        </div>
                                        <div className={styles.reviewBody}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer non est augue. Morbi rhoncus pellentesque purus.
                                            Nullam gravida ullamcorper nisl, vitae aliquet nibh
                                            imperdiet eu. Nullam consectetur enim vel dolor porta
                                            dapibus.
                                        </div>

                                    </div>
                                    <div className={styles.review}>
                                        <div className={styles.reviewHeader}>
                                            <div className={styles.reviewAuthor}>Max Mustermann</div>
                                            <div className={styles.reviewDate}>15.10.2022</div>
                                        </div>
                                        <div className={styles.reviewBody}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer non est augue. Morbi rhoncus pellentesque purus.
                                            Nullam gravida ullamcorper nisl, vitae aliquet nibh
                                            imperdiet eu. Nullam consectetur enim vel dolor porta
                                            dapibus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export const getServerSideProps: GetServerSideProps = async ({
                                                                 params,
                                                             }: any) => {

    return {
        props: {
            image: "https://via.placeholder.com/1200x800?text=Slide+1",
            brand: "Example Brand",
            title: "Example Product Title",
            rating: 4,
            description: "This is an example product description.",
            isNew: true,
            isSale: true,
            price: 100,
            salePrice: 80,
            availability: true,
            code: "EXM123"
        },
    };
};

    export default Product;


