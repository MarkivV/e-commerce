import React from 'react';
import styles from "./../../styles/Delivery.module.scss"
const Delivery = () => {
    return (
        <div className={styles.deliveryContainer}>
            <h1 className={styles.deliveryTitle}>Доставка</h1>

            <div className={styles.deliveryItem}>
                <p className={styles.deliveryItemDescription}>
                    Звичайна доставка за адресою проживання клієнта є найбільш популярним варіантом серед покупців. Однак, ми розуміємо, що час і швидкість доставки також є важливими чинниками. У магазині Бражкович ми надаємо три різні варіанти доставки, які задовольнять потреби кожного покупця.                </p>
                <h2 className={styles.deliveryItemTitle}>Курєром по Києву</h2>
                <p className={styles.deliveryItemDescription}>
                    Цей варіант доставки підходить для тих, хто хоче отримати свої покупки якомога швидше та зручніше. Ми пропонуємо доставку замовлень прямо до дверей у вказаний час. Якщо замовлення оформлене до 15:00, то воно буде доставлене в той же день. Вартість доставки становить лише 50 грн.
                </p>
            </div>

            <div className={styles.deliveryItem}>
                <h2 className={styles.deliveryItemTitle}>Нова Пошта</h2>
                <p className={styles.deliveryItemDescription}>
                    Для тих, хто проживає далеко від Києва, ми пропонуємо доставку через службу Нова Пошта. Замовлення, оформлені до 15:00, відправляються в той же день. Вартість доставки залежить від ваги та обєму відправки, але ми завжди намагаємося забезпечити найбільш приємну ціну для наших клієнтів.
                </p>
            </div>

            <div className={styles.deliveryItem}>
                <h2 className={styles.deliveryItemTitle}>Укрпошта</h2>
                <p className={styles.deliveryItemDescription}>
                    Для тих, хто бажає скористатися послугами Укрпошти, ми також пропонуємо доставку через цей оператор. Замовлення, оформлені до 15:00, будуть відправлені в той же день. Ціна доставки залежить від ваги та обєму відправки.
                </p>
            </div>
            <div className={styles.deliveryItem}>
                <p className={styles.deliveryItemDescription}>
                    Ми дбаємо про те, щоб кожен наш клієнт мав можливість вибрати найбільш зручний та ефективний варіант доставки, який відповідає його потребам.                </p>
            </div>
        </div>
    );
};

export default Delivery;
