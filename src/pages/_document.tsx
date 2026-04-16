import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
          <meta name="description" content="MemecoinOwner — The #1 no-code platform to create, deploy, and manage Solana tokens. Launch your memecoin in minutes at memecoinowner.com." />
          <meta name="keywords" content="Solana token creator, memecoin, no-code crypto, SPL token, Solana blockchain, token generator" />
          <meta property="og:title" content="MemecoinOwner — Launch Your Solana Token" />
          <meta property="og:description" content="Create and deploy Solana tokens without writing a single line of code. The all-in-one memecoin platform." />
          <meta property="og:url" content="https://memecoinowner.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
