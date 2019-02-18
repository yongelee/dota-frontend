import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import withApollo from "../lib/withApollo";
import { FilterContextProvider } from "../lib/filterContext";
import { SelectedContextProvider } from "../lib/selectedContext";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <FilterContextProvider>
              <SelectedContextProvider>
                <Component {...pageProps} />
              </SelectedContextProvider>
            </FilterContextProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
