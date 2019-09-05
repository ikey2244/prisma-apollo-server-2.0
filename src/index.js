require('dotenv').config()
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import { prisma } from '../src/generated/prisma-client'
import { resolvers } from './resolvers/index'

const typeDefs = importSchema('src/schema.graphql')
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => {
        return {
            ...req,
            prisma
        }
    }
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})