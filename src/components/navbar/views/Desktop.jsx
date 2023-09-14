import styles from "../Navbar.module.css"
import { A } from "@solidjs/router"

function Desktop(props) {
  const { position, setPosition } = props;
  return (
    <div class="h-full w-[80%] lg:w-[40%] relative">
      <div class="flex h-full w-full font-bold text-xl">
        <A href="/" class={styles.item}><div class="h-full w-full flex justify-center items-center cursor-pointer" onClick={() => setPosition('left-0')}>Home</div></A>
        <A href="/products" class={styles.item}><div class="h-full w-full flex justify-center items-center cursor-pointer" onClick={() => setPosition('left-[20%]')}>Products</div></A>
        <A href="/gallery" class={styles.item}><div class="h-full w-full flex justify-center items-center cursor-pointer" onClick={() => setPosition('left-[40%]')}>Gallery</div></A>
        <A href="/login" class={styles.item}><div class="h-full w-full flex justify-center items-center cursor-pointer" onClick={() => setPosition('left-[60%]')}>Login</div></A>
        <A href="/about" class={styles.item}><div class="h-full w-full flex justify-center items-center cursor-pointer" onClick={() => setPosition('left-[80%]')}>About Us</div></A>
      </div>
      <div class={`h-[5%] w-1/5 bg-[dodgerblue] absolute bottom-0 ${position()} transition-all duration-[250ms] ease-out hidden lg:block`}></div>
    </div>
  )
}

export default Desktop