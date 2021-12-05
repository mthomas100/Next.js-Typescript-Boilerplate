import React from "react";
import { GetStaticProps } from "next";

// import {
//     MarketingCards,
// } from "components";

// import createApolloClient from "@services/graphql";

// import {
//     MarketingCard,
// } from "graphql/types";

// import {
//     MARKETING_CARDS_QUERY,
// } from "graphql/queries";

type HomeProps = {
    marketingCards: MarketingCard[];
};

const Home: React.FC<HomeProps> = (
    {
        // marketingCards,
    },
) => {
    return (
        <div id="indexWrapper">
            <MarketingCards marketingCards={marketingCards} />
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    /* eslint-disable */

    // const { data: { marketingCards }} = await createApolloClient.query({
    //     query: MARKETING_CARDS_QUERY,
    // });

    /* eslint-enable */

    return {
        props: {
            // marketingCards,
        },
    };
};
