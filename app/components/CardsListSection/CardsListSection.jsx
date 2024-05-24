import React from 'react';

import Styles from "./CardsListSection.module.css";
import { CardsList } from "./CardsList";
import { CardsSlider } from "@/app/components/CardsListSection/CardsSlider";

export const CardsListSection = (props) => {
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id={props.id}>
                {props.title}
            </h2>
            {props.type === 'slider' ? <CardsSlider data={props.data} /> : <CardsList data={props.data} />}
        </section>
    );
};