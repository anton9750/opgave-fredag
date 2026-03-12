export function header() {

  const header = document.createElement("header")

 header.className =
"w-full bg-zinc-900 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center px-6 sm:px-12 py-4 sm:py-6"

  header.innerHTML = `
  
  <h1 class="text-2xl font-semibold text-yellow-500">
  Colorizer Palette Generator
  </h1>

 <nav class="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">

   <a href="/" class="border border-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-500 hover:text-black transition text-center w-full sm:w-auto">
      Random Palette
    </a>

    <a href="/mypalettes" class="border border-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-500 hover:text-black transition">
      My Palettes
    </a>

  </nav>
  `

  return header
}