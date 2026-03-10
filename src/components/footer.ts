export function footer() {

  const footer = document.createElement("footer")

  footer.className =
  "w-full bg-zinc-900 text-center text-gray-300 py-10 flex flex-col gap-2"

  footer.innerHTML = `
  
    <p class="text-lg">Colorizer Palette Generator</p>
    
    <p class="text-sm text-gray-400">
      Created by Mike Montgomery
    </p>

    <p class="text-xs text-gray-500">
      Made possible by colormind.io palette API
    </p>

  `

  return footer
}