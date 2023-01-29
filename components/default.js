import Header from './header'
import { Container } from '@chakra-ui/react'

const Layout = ( { children } ) => {
  return (
    <div>
      <Container maxW='container.md'>
      <Header />
        <main>
            {children}
        </main>
        <footer><p>Test Footer</p></footer>
      </Container>

    </div>
  )
}

export default Layout