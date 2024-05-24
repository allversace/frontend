"use client";

import React from 'react';
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function PopularPage() {
    const popularGame = useGetDataByCategory(endpoints.games, "popular");

    return (
        <main className="main-inner">
            {popularGame ? (
                <CardsListSection id="popular" title="Популярные" data={popularGame}/>
            ) : (
                <Preloader/>
            )}
        </main>
    );
};
