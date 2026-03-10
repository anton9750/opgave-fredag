import { copyToClipboard } from "../utils/copy"

export function colorCard(color:string){

  const card = document.createElement("div")

  card.className =
  "w-48 h-48 flex flex-col justify-end items-center pb-4 rounded"

  card.style.backgroundColor = color

  card.innerHTML = `

  <div class="flex gap-4 items-center text-sm">

    <span>${color}</span>

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