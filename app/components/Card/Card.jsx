import React from 'react';
import classes from "@/app/components/Card/Card.module.css";

export const Card = (props) => {
    return (
        <article className={classes.card}>
            <img
                src={props.image}
                alt=""
                className={classes["card__image"]}
            />
            <div className={classes["card__content-block"]}>
                <h3 className={classes["card__title"]}>{props.title}</h3>
                <p className={classes["card__description"]}>
                    {props.description}
                </p>
                <div className={classes["card__info-container"]}>
                    <p className={classes["card__author"]}>
                        Автор: <span className={classes["card__accent"]}>{props.developer}</span>
                    </p>
                    <p className={classes["card__votes"]}>
                        Голосов на сайте: <span className={classes["card__accent"]}>{props.users.length}</span>
                    </p>
                </div>
            </div>
        </article>
    );
};