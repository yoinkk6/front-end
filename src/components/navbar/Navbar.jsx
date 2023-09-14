import { createSignal, onMount } from "solid-js"
import Desktop from "./views/Desktop";
import Mobile from "./views/Mobile";
import { useLocation } from "@solidjs/router";

function Navbar() {
  const { pathname } = useLocation()
  const [position, setPosition] = createSignal('left-0');
  onMount(() => {
    setPosition(() => {
      return (
        pathname === '/' ? 'left-0' : 
        pathname === '/products' ? 'left-[20%]' :
        pathname === '/gallery' ? 'left-[40%]' :
        pathname === '/login' ? 'left-[60%]' : 'left-[80%]'
      )
    })
  })
  return (
    <nav class="h-[10%] w-full flex justify-between lg:px-10 px-2">
      <div class="h-full aspect-square grid place-items-center">
        <div class="h-[90%] w-[90%] rounded-full bg-black text-white grid place-items-center">Logo</div>
      </div>
      <Desktop position={position} setPosition={setPosition} />
      <Mobile/>
    </nav>
  )
}

export default Navbar