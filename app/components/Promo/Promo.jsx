"use client"

import React, {useState, useEffect} from 'react';
import classes from './Promo.module.css';

export const Promo = () => {
    const [codeIsVisible, setCodeIsVisible] = useState(false);

    function handleButtonClick() {
        setCodeIsVisible(true);
    }

    useEffect(() => {
        let timeout;
        if (codeIsVisible) {
            timeout = setTimeout(() => {
                setCodeIsVisible(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [codeIsVisible]);

    return (
        <section className={classes["promo"]}>
            <div className={classes["promo__description-block"]}>
                <h2 className={classes["promo__title"]}>Твой промо-код</h2>
                <p className={classes["promo__description"]}>Скидка на все курсы Яндекс Практикума для пользователей
                    нашего
                    сайта!</p>
                <button className={`button ${classes["promo__button"]}`} onClick={handleButtonClick}>
                    {
                        codeIsVisible ? <span className={classes["promo-code"]}>WEBTEENS10</span> : "Получить код"
                    }
                </button>
            </div>
            <img src="./images/promo-illustration.svg" alt="Собака" className={classes["promo__image"]}/>
        </section>
    );
};