import { For } from "solid-js"

function Products() {
  return (
    <div class="h-[90%] w-full flex">
      <div class="h-full hidden lg:block w-[30%] bg-gradient-to-b from-[rgb(235,234,234)] to-white">
        <div class="text-2xl font-semibold text-center">CATEGORIES</div>
        <div class="flex justify-center items-center h-[10%]">
          <div class="h-fit w-fit flex">
            <input type="text" class="focus:outline-none placeholder:text-black bg-inherit focus:border-b-[2px] border-b-[dodgerblue]" placeholder="Search"/>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="dodgerblue" className="h-6 aspect-square cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="h-full w-full lg:w-[70%] flex lg:justify-between justify-center flex-wrap gap-5 p-2 overflow-x-hidden">
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>
          {(item) => <div class="lg:w-1/4 w-[90%] lg:aspect-[3/4] aspect-video bg-black"></div>}
        </For>
      </div>
    </div>
  )
}

export default Products