import styles from './../styles/Slider.module.scss';
import {FC} from "react";
import Slider from 'react-slick';


interface ImageSliderProps {
    images?: string[];
}

const NextArrow: FC<any> = ({ onClick }) => (
    <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        &#10095;
    </button>
);

const PrevArrow: FC<any> = ({ onClick }) => (
    <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        &#10094;
    </button>
);

const CustomSlider: FC<ImageSliderProps> = ({ images =[] }) => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Slider {...settings} className={styles.carousel}>
            {images.map((image, index) => (
                <div key={index} className={styles.slide}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
            ))}
        </Slider>
    );

};

export default CustomSlider;