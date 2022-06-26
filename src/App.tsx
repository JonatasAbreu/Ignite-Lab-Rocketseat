import { ApolloProvider } from "@apollo/client"
import { client } from './lib/apollo'
import React from "react"
import Event from "./pages/Event"
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"

function Home() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ApolloProvider>

    )
}
export default Home