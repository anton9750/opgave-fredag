import { header } from "../components/header"
import { footer } from "../components/footer"
import { getPalettes, deletePalette, setActivePalette } from "../components/palette"
import { colorCard } from "../components/colorCard"

export function myPalettesPage() {

const page = document.createElement("div")
page.className = "min-h-screen flex flex-col bg-[#212121]"

  page.appendChild(header())

  const container = document.createElement("div")
  container.className =
  "flex flex-col items-center mt-12 px-6 flex-grow"

  const palettes = getPalettes()

  if (!Array.isArray(palettes) || palettes.length === 0) {

    const empty = document.createElement("p")
    empty.textContent = "No palettes saved yet."
    empty.className = "text-white text-lg"

    container.appendChild(empty)
  }

  palettes.forEach((palette, index) => {

    const row = document.createElement("div")

    row.className =
    "flex flex-wrap gap-4 mb-10 items-center justify-center"

    palette.forEach((color:string) => {

      row.appendChild(colorCard(color))

    })


    const useBtn = document.createElement("button")

    useBtn.textContent = "Use Palette"

    useBtn.className =
    "px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded"

    useBtn.onclick = () => {

      setActivePalette(palette)

      window.history.pushState({}, "", "/")

      window.dispatchEvent(new PopStateEvent("popstate"))
    }


    const del = document.createElement("button")

    del.textContent = "Delete"

    del.className =
    "px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"

    del.onclick = () => {

      deletePalette(index)

      location.reload()
    }


    const buttonRow = document.createElement("div")

    buttonRow.className =
    "flex gap-4 w-full justify-center mt-4"

    buttonRow.append(useBtn, del)

    const paletteBlock = document.createElement("div")

    paletteBlock.className =
    "flex flex-col items-center"

    paletteBlock.append(row, buttonRow)

    container.appendChild(paletteBlock)

  })

  page.appendChild(container)

  page.appendChild(footer())

  return page
}