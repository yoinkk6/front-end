function App() {
  return (
    <div class="h-screen w-screen">
      <nav class="h-[10%] w-full flex justify-between">
        <div></div>
        <div class="h-full w-1/3 relative">
          <div class="flex h-[100%] w-full font-bold text-xl">
            <div class="h-full w-1/4 flex justify-center items-center cursor-pointer">Home</div>
            <div class="h-full w-1/4 flex justify-center items-center cursor-pointer">About Us</div>
            <div class="h-full w-1/4 flex justify-center items-center cursor-pointer">Gallery</div>
            <div class="h-full w-1/4 flex justify-center items-center cursor-pointer">Login</div>
          </div>
          <div class="h-[5%] w-1/4 bg-purple-800 absolute left-0 bottom-0"></div>
        </div>
      </nav>
    </div>
  )
}

export default App