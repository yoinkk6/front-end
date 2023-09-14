import { onMount } from "solid-js";

function Triangle() {
  let container;

  onMount(() => {
    container.addEventListener('click', () => {
      container.children[1].style.transition = 'translateY 500ms ease-in-out'
      container.children[1].style.transform = 'translateY(100%)'

    })
  })
  
  return (
    <div ref={container} class="absolute bottom-0 left-[15%] cursor-pointer">
      <svg class="translate-y-[50%] transition-all duration-500 ease-in-out" width="83" height="73" viewBox="0 0 83 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M44.0981 71.3013C42.9434 73.3013 40.0566 73.3013 38.9019 71.3013L0.796807 5.30127C-0.357894 3.30127 1.08548 0.80127 3.39488 0.80127L41.5 0.80127H79.6051C81.9145 0.80127 83.3579 3.30127 82.2032 5.30127L44.0981 71.3013Z" fill="#0099EF"/>
      </svg>

      <svg class="transition-transform duration-500 ease-in-out" width="84" height="72" viewBox="0 0 84 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M44.5981 70.5C43.4434 72.5 40.5566 72.5 39.4019 70.5L1.29681 4.5C0.142106 2.5 1.58548 0 3.89488 0L80.1051 0C82.4145 0 83.8579 2.5 82.7032 4.5L44.5981 70.5Z" fill="#00C4EF"/>
      </svg>

      {/* <svg class="translate-y-[-50%] transition-[translateY] duration-500 ease-in-out" width="83" height="72" viewBox="0 0 83 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M43.8993 70.5C42.7446 72.5 39.8579 72.5 38.7032 70.5L0.598076 4.5C-0.556624 2.5 0.886751 0 3.19615 0L79.4064 0C81.7158 0 83.1592 2.5 82.0045 4.5L43.8993 70.5Z" fill="#0099EF"/>
      </svg> */}
    </div>
  )
}

export default Triangle