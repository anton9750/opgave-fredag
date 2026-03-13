export function footer() {

  const footer = document.createElement("footer")

  footer.className =
  "w-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-gray-300 flex flex-col items-center justify-center py-6 mt-10"

  footer.innerHTML = `
    <p class="text-lg font-medium">
      Colorizer Palette Generator
    </p>

    <p class="text-sm text-gray-400 mt-1">
      Created by Mike Montgomery
    </p>

    <p class="text-xs text-gray-500 mt-2">
      Made possible by colormind.io palette API
    </p>
  `

  return footer
}