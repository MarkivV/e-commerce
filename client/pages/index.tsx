import styles from "../styles/Home.module.scss"
import CustomSlider from "@/components/CustomSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductCard from "@/components/ProductCard";

export default function Home() {
    const images = [
        'https://via.placeholder.com/1200x800?text=Slide+1',
        'https://via.placeholder.com/1200x800?text=Slide+2',
        'https://via.placeholder.com/1200x800?text=Slide+3',
    ];

    const categories = [
        { name: 'Книги', logo: 'book' },
        { name: 'Настільні ігри', logo: 'board-game' },
        { name: 'Іграшки', logo: 'toy' },
        { name: 'Творчість, хобі', logo: 'creativity' },
        { name: 'Канцелярія', logo: 'stationery' },
        { name: 'Аксесуари', logo: 'accessories' },
        { name: 'Аудіокниги', logo: 'audiobook' },
        { name: 'Всі категорії', logo: 'all-categories' },
    ];



    const products = [
        {name: "Товар", description: "Це новий товар", price: 999, salePrice: 6200, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 1099, salePrice: 2200, image: "https://picsum.photos/300/300", isNew: false, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 2399, salePrice: 3200, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 1199, salePrice: 3100, image: "https://picsum.photos/300/300", isNew: false, isOnSale: true},
        {name: "Товар", description: "Це новий товар", price: 979, salePrice: 1330, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 593, salePrice: 800, image: "https://picsum.photos/300/300", isNew: false, isOnSale: true},
        {name: "Товар", description: "Це новий товар", price: 595, salePrice: 770, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 699, salePrice: 890, image: "https://picsum.photos/300/300", isNew: false, isOnSale: true},
        {name: "Товар", description: "Це новий товар", price: 799, salePrice: 1300, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 899, salePrice: 1199, image: "https://picsum.photos/300/300", isNew: false, isOnSale: true},
        {name: "Товар", description: "Це новий товар", price: 1099, salePrice: 1202, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 2099, salePrice: 3230, image: "https://picsum.photos/300/300", isNew: false, isOnSale: true},
        {name: "Товар", description: "Це новий товар", price: 1599, salePrice: 2220, image: "https://picsum.photos/300/300", isNew: false, isOnSale: false},
        {name: "Товар", description: "Це новий товар", price: 2399, salePrice: 4200, image: "https://picsum.photos/300/300", isNew: true, isOnSale: false}
    ]

    return (
        <div className={styles.wrap}>
            <div className={styles.upperBlock}>
                <div className={styles.categories}>
                    <div className={styles.categories_list}>
                        {categories.map((category) => (
                            <div className={styles.category_item} key={category.name}>
                                <span className={styles.category_name}>{category.name}</span>
                                <span className={styles.category_arrow}><KeyboardArrowRightIcon/></span>
                            </div>
                        ))}
                    </div>
                </div>
                <CustomSlider images={images} />
            </div>
            <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardLogo}>Logo 1</div>
                    <div className={styles.infoCardInfo}>
                        <div className={styles.infoCardMain}>Працюємо з Пн по Пт</div>
                        <div className={styles.infoCardSub}>з 07:00 до 19:00</div>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardLogo}>Logo 2</div>
                    <div className={styles.infoCardInfo}>
                        <div className={styles.infoCardMain}>Безкоштовна доставка</div>
                        <div className={styles.infoCardSub}>При замовленні від 1000грн</div>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardLogo}>Logo 3</div>
                    <div className={styles.infoCardInfo}>
                        <div className={styles.infoCardMain}>Великий асортимент</div>
                        <div className={styles.infoCardSub}>Понад 100 000 позицій</div>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardLogo}>Logo 4</div>
                    <div className={styles.infoCardInfo}>
                        <div className={styles.infoCardMain}>Повернення за 3 доби</div>
                        <div className={styles.infoCardSub}>Без проблем та питань</div>
                    </div>
                </div>
            </div>

            <div className={styles.cardCollectionTitle}>
                <h2>Популярні товари</h2>
            </div>
            <div className={styles.productCardsContainer}>
                {
                    products.slice(0,8).map((item)=>(
                        <div className={styles.productCard} key={item.price}>
                            <ProductCard
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                isNew={item.isNew}
                                isOnSale={item.isOnSale}
                                salePrice={item.salePrice}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={styles.cardCollectionTitle}>
                <h2>Нові надходження</h2>
            </div>
            <div className={styles.productCardsContainer}>
                {
                    products.slice(0,8).map((item)=>(
                        <div className={styles.productCard} key={item.price}>
                            <ProductCard
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                isNew={item.isNew}
                                isOnSale={item.isOnSale}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={styles.cardCollectionTitle}>
                <h2>Акції</h2>
            </div>
            <div className={styles.productCardsContainer}>
                {
                    products.slice(0,8).map((item)=>(
                        <div className={styles.productCard} key={item.price}>
                            <ProductCard
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                isNew={item.isNew}
                                isOnSale={item.isOnSale}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
