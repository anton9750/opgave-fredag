import { header } from "../components/header"
import { flexRow } from "../components/flexRow"
import { colorCard } from "../components/colorCard"
import { button } from "../components/button"
import { fetchPalette } from "../data/api"
import { savePalette } from "../components/palette"
import { footer } from "../components/footer"

export function homePage() {

  const page = document.createElement("div")


  page.appendChild(header())


  const content = document.createElement("section")

  content.className =
  "w-full min-h-[85vh] bg-gradient-to-b from-[#c9890a] to-[#7a2f2f] flex flex-col items-center justify-center px-10"

 
  const row = flexRow()

  let currentPalette: string[] = []

  async function generate() {

    row.innerHTML = ""

    currentPalette = await fetchPalette()

    currentPalette.forEach(color => {

      row.appendChild(colorCard(color))

    })
  }


  const generateBtn = button("Generate")

  generateBtn.addEventListener("click", generate)

  const saveBtn = button("Save this one")

  saveBtn.addEventListener("click", () => {

    if (!currentPalette.length) return

    savePalette(currentPalette)

  })

  const btnRow = document.createElement("div")

btnRow.className = "flex flex-col sm:flex-row gap-6 sm:gap-16 mt-10 sm:mt-16 w-full sm:w-auto"

  btnRow.append(generateBtn, saveBtn)


  content.append(row, btnRow)

  page.appendChild(content)

  page.appendChild(content)
page.appendChild(footer())

generate()

return page

  footer

  generate()

  return page

}