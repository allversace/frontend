"use client";

import React from 'react';
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function TdsPage() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

    return (
        <main className="main-inner">
            {tdsGames ? (
                <CardsListSection id="TDS" title="TDS" data={tdsGames}/>
            ) : (
                <Preloader/>
            )}
        </main>
    );
};