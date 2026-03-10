export function button(label:string){

  const btn = document.createElement("button")

  btn.className =
  "px-10 py-3 border-2 border-yellow-500 rounded text-white hover:bg-yellow-500 hover:text-black transition"

  btn.textContent = label

  return btn
}