import { Show, createSignal } from "solid-js"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Login from "./pages/Login"
import { Route, Routes } from "@solidjs/router"

function App() {
  return (
    <div class="h-screen w-screen">
      <Navbar/>
      <Routes>
        <Route path={'/'} component={Home}/>
        <Route path={'/products'} component={Products}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/gallery'} component={Gallery}/>
        <Route path={'/login'} component={Login}/>
      </Routes>
    </div>
  )
}

export default App