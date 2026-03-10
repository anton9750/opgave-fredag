import { header } from "../components/header"
import { getPalettes, deletePalette } from "../components/palette"
import { colorCard } from "../components/colorCard"

export function myPalettesPage() {

  const page = document.createElement("div")

  page.appendChild(header())

  const container = document.createElement("div")
  container.className = "container mt-10"

  const palettes = getPalettes()

  // Safety check so the page never crashes
  if (!Array.isArray(palettes)) {
    console.error("Palettes is not an array:", palettes)
    page.appendChild(container)
    return page
  }

  palettes.forEach((palette, index) => {

    const row = document.createElement("div")
    row.className = "flex gap-4 mb-8"

    // Ensure palette is an array before looping
    if (Array.isArray(palette)) {
      palette.forEach((color) => {
        row.appendChild(colorCard(color))
      })
    }

    const del = document.createElement("button")
    del.textContent = "Delete"
    del.className = "btn btn-primary"

    del.onclick = () => {
      deletePalette(index)
      location.reload()
    }

    row.appendChild(del)

    container.appendChild(row)

  })

  page.appendChild(container)

  return page
}