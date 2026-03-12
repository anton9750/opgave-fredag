export function button(label: string) {

  const btn = document.createElement("button")

  btn.className =
  "px-6 py-3 sm:px-10 sm:py-3 border-2 border-yellow-500 rounded text-white text-sm sm:text-base hover:bg-yellow-500 hover:text-black transition w-full sm:w-auto"

  btn.textContent = label

  return btn
}