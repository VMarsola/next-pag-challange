import withRedux from "next-redux-wrapper";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import { initStore } from "@/store";

import "@/styles/globals.css";

function App({ Component, store, pageProps, ...props }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} {...props} />
      </ChakraProvider>
    </Provider>
  );
}

export default withRedux(initStore)(App);
