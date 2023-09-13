import { For } from "solid-js"

function Home() {
  return (
    <div class="h-[90%] w-full overflow-x-hidden">
      <div class="h-full w-full flex lg:flex-row flex-col-reverse">
        <div class="lg:h-full h-[40%] lg:w-[45%] w-full flex flex-col justify-center items-center text-left">
          <div class="lg:h-[50%] h-full lg:w-[70%] w-full lg:px-0 px-5">
            <div class="lg:h-[30%] h-[15%] w-full text-3xl lg:text-[4rem] font-extrabold">ALPHA FOODS</div>
            <div class="h-[20%] lg:w-[70%] w-full lg:text-xl text-lg font-bold">Explore Our Premium Selection of Cooking Equipments</div>
            <div class="h-1/2 w-full flex items-end py-5">
              <button class="h-fit w-fit lg:px-10 lg:py-3 px-5 py-2 rounded-full text-white font-bold text-md lg:text-lg bg-[dodgerblue] hover:bg-opacity-[0.85]">Order</button>
            </div>
          </div>
        </div>
        <div class="lg:h-full lg:w-[55%] h-[50%] w-full"></div>
      </div>
      <div class="h-full w-full">
        <div class="h-[20%] w-full font-bold text-2xl grid place-items-center">CATEGORIES</div>
        <div class="h-[80%] w-full flex flex-wrap overflow-y-scroll justify-center">
          <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
            {(item) => (
              <div class="h-[40%] aspect-square cursor-pointer bg-[rgb(46,46,46)] border-[3px] border-zinc-400 flex-shrink-0 m-5 rounded-md">
                <div class="h-[85%] w-full grid place-items-center">
                  <div class="h-[90%] w-[90%]"></div>
                </div>
                <div class="h-[15%] w-full flex items-center justify-center text-white bg-black p-0">Name {item}</div>
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="h-full w-full bg-[green]">

      </div>
    </div>
  )
}

export default Home

{/* 

  slide
  <div class="h-[80%] w-full grid place-items-center">
    <div class="h-[80%] w-[80%] flex items-center overflow-y-hidden last:mr-0">
      <div class="h-[90%] w-[5%] flex items-center justify-center font-extrabold text-4xl cursor-pointer">&lt</div>
      <div class="w-[90%] h-full flex overflow-x-scroll relative">
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>
          {(item) => <div class="h-[90%] aspect-[3/4] bg-black flex-shrink-0 mr-5"></div>}
        </For>
      <div class="h-2 w-full ml-0 bg-[dodgerblue] absolute bottom-0 left-0 rounded-full"></div>
      </div>
      <div class="h-[90%] w-[5%] flex items-center justify-center font-extrabold text-4xl cursor-pointer">&gt</div>
    </div>
  </div>
*/}