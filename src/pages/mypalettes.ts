import { header } from "../components/header"
import { footer } from "../components/footer"
import { getPalettes, deletePalette } from "../components/palette"
import { colorCard } from "../components/colorCard"

export function myPalettesPage() {

  const page = document.createElement("div")

  page.appendChild(header())

  const container = document.createElement("div")
  container.className = "container mt-10"

  const palettes = getPalettes()

  palettes.forEach((palette, index) => {

    const row = document.createElement("div")
    row.className = "flex flex-wrap gap-3 sm:gap-4 mb-10 items-center"

    palette.forEach((color) => {
      row.appendChild(colorCard(color))
    })

    const del = document.createElement("button")
    del.textContent = "Delete"

    del.className =
      "px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"

    del.onclick = () => {
      deletePalette(index)
      location.reload()
    }

    row.appendChild(del)

    container.appendChild(row)
  })

  page.appendChild(container)

  // 👇 THIS FIXES THE WARNING
  page.appendChild(footer())

  return page
}