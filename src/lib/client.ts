import { GraphQLClient } from 'graphql-request'
import { getSdk } from '@/generated/graphql'

const client = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwue014v030507terwqh93o6/master'
)
export const sdk = getSdk(client)
