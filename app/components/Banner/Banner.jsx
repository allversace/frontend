import React from 'react';
import classes from "./Banner.module.css";

export const Banner = () => {
    return (
        <section className={classes["banner"]}>
            <div className={classes["banner__description"]}>
                <h1 className={classes["banner__title"]}>
                    Портал инди-игр от&nbsp;студентов Яндекс Практикума
                </h1>
                <div className={classes["banner__text-block"]}>
                    <p className={classes["banner__text"]}>
                        Студенты курсов разрабатывают свои игры на Unity, здесь мы их
                        публикуем. Вы можете играть прямо на сайте. А если у вас есть
                        аккаунт пользователя — получаете возможность голосовать за игры.
                    </p>
                </div>
                <a href="#popular" className={`button ${classes["banner__link"]}`}>Смотреть игры</a>
            </div>
            <img
                src="./images/banner-illustration.jpg"
                alt="Рука, утопленная в желтом фоне"
                className={classes["banner__image"]}
            />
        </section>
    );
};