import { For, Show } from "solid-js"
import Form from "../components/comp/Form"
import Rectangle from "../svg/login/Rectangle"
import Triangle from "../svg/login/Triangle"
import styles from "./css/Login.module.css"

function Login() {
  return (
    <div class="h-[90%] w-full lg:w-full relative overflow-hidden">
      <section class="w-full h-full space-x-5 grid place-items-center">
        <div class= "h-[80%] aspect-[9/12] lg:aspect-[9/10] rounded-md grid place-items-center relative overflow-hidden">
          <div class={styles.animatedBg + " h-[200%] w-[90%] absolute top-[-50%] left-0 z-0"}></div>
          <div class="bg-[white] h-[98%] w-[98%] rounded-md flex overflow-hidden z-10">
            <form class="h-full w-full flex-shrink-0">
              {/* <input /> */}
            </form>
            <form class="h-full w-full flex-shrink-0 bg-[red]"></form>
          </div>
        </div>
      </section>
      <Rectangle/>
      <Triangle/>
    </div>
  )
}

export default Login