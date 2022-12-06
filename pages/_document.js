import Document, {Html, Main, NextScript} from "next/document";
import Head from 'next/head'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head ><title>Alternativo, conseil gestion patrimoine</title></Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;
