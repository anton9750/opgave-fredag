export function header() {

  const header = document.createElement("header")

  header.className =
  "w-full bg-zinc-900 flex justify-between items-center px-12 py-6"

  header.innerHTML = `
  
  <h1 class="text-2xl font-semibold text-yellow-500">
  Colorizer Palette Generator
  </h1>

  <nav class="flex gap-6">

    <a href="/" class="border border-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-500 hover:text-black transition">
      Random Palette
    </a>

    <a href="/mypalettes" class="border border-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-500 hover:text-black transition">
      My Palettes
    </a>

  </nav>
  `

  return header
}