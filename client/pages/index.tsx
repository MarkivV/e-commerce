import styles from "../styles/Home.module.scss"
import CustomSlider from "@/components/CustomSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
                        <div className={styles.infoCardMain}>Працюємо з Пн по Пт/з 07:00 до 19:00</div>
                        <div className={styles.infoCardSub}>увімкнено вихідні</div>
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
        </div>
    );
}
