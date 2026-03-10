export type Palette = string[]

export function savePalette(palette:Palette){

  const stored = JSON.parse(localStorage.getItem("palettes") || "[]")

  stored.push(palette)

  localStorage.setItem("palettes", JSON.stringify(stored))
}

export function getPalettes():Palette[]{

  return JSON.parse(localStorage.getItem("palettes") || "[]")
}

export function deletePalette(index:number){

  const palettes = getPalettes()

  palettes.splice(index,1)

  localStorage.setItem("palettes", JSON.stringify(palettes))
}

export function setActivePalette(palette:Palette){

  localStorage.setItem("activePalette", JSON.stringify(palette))
}

export function getActivePalette(){

  return JSON.parse(localStorage.getItem("activePalette") || "null")
}