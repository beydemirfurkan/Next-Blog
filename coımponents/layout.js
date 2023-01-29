import Header from './header'

const Layout = ( { children } ) => {
  return (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <footer><p>Test Footer</p></footer>
    </div>
  )
}

export default Layout