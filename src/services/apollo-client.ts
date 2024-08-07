import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
