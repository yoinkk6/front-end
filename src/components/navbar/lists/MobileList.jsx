
function MobileList({ open }) {
  return (
    <div class="h-[90%] absolute transition-[width] duration-300 ease-out top-[10%] right-0 bg-black" classList={{ " w-full ": open(), " w-0 ": !open() }}></div>
  )
}

export default MobileList