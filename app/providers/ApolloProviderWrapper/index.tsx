'use client'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { ReactNode } from 'react'

function ApolloProviderWrapper({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    ssrMode: false,
    link: new HttpLink({
      uri: 'https://api-fotober.fotober.com/graphql', // URL của API GraphQL Directus của bạn
      fetchOptions: {
        credentials: 'omit',
      },
    }),
    cache: new InMemoryCache(),
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
export default ApolloProviderWrapper
