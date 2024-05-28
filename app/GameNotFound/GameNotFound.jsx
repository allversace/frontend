import React from 'react';
import {NotFoundImage} from "@/app/GameNotFound/not-found";
import Styles from './GameNotFound.module.css';

const GameNotFound = () => {
    return (
        <div className={Styles["not-found"]}>
            <NotFoundImage/>
            <h2 className={Styles["not-found__text"]}>Такой игры не существует :(</h2>
        </div>
    );
};

export default GameNotFound;