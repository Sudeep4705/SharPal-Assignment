import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
export default function UserLayout() {
  return (
    <div className="layout">
        <Navbar/>
      <main className="main-content">
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
