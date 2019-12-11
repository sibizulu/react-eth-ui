import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import EtherAddress from './components/EtherAddress'
import Blockie from './components/Blockie'
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <Container text>
            <Header as="h2">
                <Header.Content>UI Example</Header.Content>
            </Header>
            <EtherAddress
                address={'0xd12Cd8A37F074e7eAFae618C986Ff825666198bd'}
            />
            <Blockie
                opts={{
                    seed: 'foo',
                    color: '#dfe',
                    bgcolor: '#a71',
                    size: 15,
                    scale: 3,
                    spotcolor: '#000'
                }}
            />
        </Container>
    )
}

export default App
