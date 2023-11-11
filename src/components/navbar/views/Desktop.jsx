import styles from "../Navbar.module.css"

function Desktop({ position, setPosition }) {
  return (
    <div class="h-full w-[80%] lg:w-[40%] relative">
      <div class="flex h-full w-full font-bold text-xl">
        <div class={styles.item} onClick={() => setPosition('left-0')}>Home</div>
        <div class={styles.item} onClick={() => setPosition('left-[25%]')}>About Us</div>
        <div class={styles.item} onClick={() => setPosition('left-[50%]')}>Gallery</div>
        <div class={styles.item} onClick={() => setPosition('left-[75%]')}>Login</div>
      </div>
      <div class={`h-[5%] w-1/4 bg-[dodgerblue] absolute bottom-0 ${position()} transition-all duration-[250ms] ease-out hidden lg:block`}></div>
    </div>
  )
}

export default Desktop