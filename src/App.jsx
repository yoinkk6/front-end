import { Show, createSignal } from "solid-js"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Gallery from "./pages/Gallery"

function App() {
  const [current, setCurrent] = createSignal('home');
  return (
    <div class="h-screen w-screen">
      <Navbar/>
      <Show when={current() === 'products'}>
        <Products/>
      </Show>
      <Show when={current() === 'home'}>
        <Home/>
      </Show>
      <Show when={current() === 'about'}>
        <About/>
      </Show>
      <Show when={current() === 'about'}>
        <Gallery/>
      </Show>
    </div>
  )
}

export default App