import { createSignal } from "solid-js"
import MobileList from "../lists/MobileList";

function Mobile() {
  const [open, setOpen] = createSignal(true);
  return (
    <div onClick={() => setOpen(prev => !prev)} class="h-full w-[60%] lg:hidden flex">
    <div class="h-[90%] w-[100%] flex flex-col justify-center space-y-2 items-end relative" classList={{ " space-y-0 ": open() }}>
      <div class="h-[5%] transition-transform duration-500 ease-out aspect-[12/1] bg-black rounded-md" classList={{ " rotate-[-45deg] ": open()  }}></div>
      <div class="h-[5%] transition-transform duration-500 ease-out aspect-[12/1] bg-black rounded-md" classList={{ " hidden ": open()  }}></div>
      <div class="h-[5%] transition-transform duration-500 ease-out aspect-[12/1] bg-black rounded-md" classList={{ " rotate-[45deg] relative top-[-12.5%] ": open()  }}></div>
    </div>
    <MobileList open={open} />
    </div>
  )
}

export default Mobile