import Header from './Header'

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