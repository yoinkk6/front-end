import { createSignal } from "solid-js"
import styles from "./Navbar.module.css"

function Navbar() {
  const [position, setPosition] = createSignal('left-0');
  return (
    <nav class="h-[10%] w-full flex justify-between px-10">
      <div class="h-full aspect-square grid place-items-center">
        <div class="h-[90%] w-[90%] rounded-full bg-black"></div>
      </div>
      <div class="h-full w-[40%] relative">
        <div class="flex h-full w-full font-bold text-xl">
          <div class={styles.item} onClick={() => setPosition('left-0')}>Home</div>
          <div class={styles.item} onClick={() => setPosition('left-[25%]')}>About Us</div>
          <div class={styles.item} onClick={() => setPosition('left-[50%]')}>Gallery</div>
          <div class={styles.item} onClick={() => setPosition('left-[75%]')}>Login</div>
        </div>
        <div class={`h-[5%] w-1/4 bg-purple-700 absolute bottom-0 ${position()} transition-all duration-[250ms] ease-out`}></div>
      </div>
    </nav>
  )
}

export default Navbar