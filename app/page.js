"use client";

import {Banner} from "@/app/components/Banner/Banner";
import {Promo} from "@/app/components/Promo/Promo";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function Home() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main">
            <Banner/>
            {popularGames && newGames ? (
                <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider"/>
            ) : (
                <Preloader/>
            )}
            {newGames ? (
                <CardsListSection id="new" title="Новинки" data={newGames} type="slider"/>
            ) : (
                <Preloader/>
            )}
            <Promo/>
        </main>
    );
}
