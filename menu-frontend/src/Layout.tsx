import { Header } from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'

export function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}