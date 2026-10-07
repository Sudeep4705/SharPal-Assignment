import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./Layouts/UserLayout"
import GamingPage from "./Page/GamingPage"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserLayout/>}>
            <Route index element={<GamingPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
