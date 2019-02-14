import Head from "next/head";

import "bulma/css/bulma.min.css";

export default ({ children }) => (
  <div>
    <Head>
      <title>Swag report</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>this is header</p>
    {children}
    <p>this is footer</p>
  </div>
);
