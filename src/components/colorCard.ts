import { copyToClipboard } from "../utils/copy"

export function colorCard(color:string){

  const card = document.createElement("div")

card.className =
"w-full sm:w-40 md:w-48 h-40 sm:h-44 md:h-48 flex flex-col justify-end items-center pb-4 rounded"

  card.style.backgroundColor = color

  card.innerHTML = `

  <div class="flex gap-4 items-center text-sm">

<span class="text-xs sm:text-sm break-all">${color}</span>

    <button class="underline">
      copy
    </button>

  </div>

  `

  const btn = card.querySelector("button")!

  btn.addEventListener("click",()=>{

    copyToClipboard(color)

  })

  return card
}