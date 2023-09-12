import AboutUs from "../../../svg/navbar/AboutUs"
import Gallery from "../../../svg/navbar/Gallery"
import Home from "../../../svg/navbar/Home"

function MobileList({ open }) {
  return (
    <div class="h-[20%] absolute flex flex-col justify-between transition-[width] duration-500 ease-out top-[10%] overflow-hidden right-0" classList={{ " w-[35%] ": open(), " w-0 ": !open() }}>
      <div class="flex items-center justify-start space-x-2 px-2 overflow-hidden">
        <Home/>
        <div classList={{ "hidden": !open() }}>Home</div>
      </div>
      <div class="flex items-center justify-start space-x-2 px-2 overflow-hidden">
        <AboutUs/>
        <div classList={{ "hidden": !open() }} class="whitespace-nowrap">About Us</div>
      </div>
      <div class="flex items-center justify-start space-x-2 px-2 overflow-hidden">
        <Gallery/>
        <div classList={{ "hidden": !open() }}>Gallery</div>
      </div>
    </div>
  )
}

export default MobileList