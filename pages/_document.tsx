import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="name of the webapp"
                        content="description of the webapp"
                    />
                    {/* Picture to be served to 3rd party sites generating a preview of the site */}
                    {/* <meta
                        property="og:image"
                        content="https://res.cloudinary.com/mthomas/image/upload/v1637877381/portfolioSite/portfolio_Pic_c114254a60.jpg"
                    /> */}

                    {/* Permanent Marker */}
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
                        rel="stylesheet"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
