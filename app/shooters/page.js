"use client";

import React from 'react';
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function ShooterPage() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className="main-inner">
            {shooterGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={shooterGames}/>
            ) : (
                <Preloader/>
            )}
        </main>
    );
};