"use client"

import React from 'react';
import classes from "./Footer.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className={classes["footer"]}>
            {
                pathname === '/' ? <div className={classes["footer__logo"]}>
                    <span className={classes["footer__logo-name"]}>pindie</span>
                    <span className={classes["footer__logo-copy"]}>, XXI век</span>
                </div> : <Link href="/" className={classes["footer__logo"]}>
                    <span className={classes["footer__logo-name"]}>pindie</span>
                    <span className={classes["footer__logo-copy"]}>, XXI век</span>
                </Link>
            }
            <ul className={classes["social-list"]}>
                <li className={classes["social-list__item"]}>
                    <a href="" className={`button ${classes["social-list__link"]}`}>YT</a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a href="" className={`button ${classes["social-list__link"]}`}>ВК</a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a href="" className={`button ${classes["social-list__link"]}`}>TG</a>
                </li>
            </ul>
        </footer>
    );
};