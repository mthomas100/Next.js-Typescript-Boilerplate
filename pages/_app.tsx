import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../src/styles/tailwindGlobal.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Page } from "@components/Page";
import { LayoutStateProvider } from "lib/layoutState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    const queryClient = new QueryClient();
    return (
        <StyledThemeProvider>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <LayoutStateProvider>
                            <Page>
                                <Component {...pageProps} />
                            </Page>
                        </LayoutStateProvider>
                    </Hydrate>
                </QueryClientProvider>
            </ApolloProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
