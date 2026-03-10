export async function fetchPalette() {

  const res = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      model: "default"
    })
  })

  const data = await res.json()

  return data.result.map((c:number[]) => {
    return `#${c.map(v=>v.toString(16).padStart(2,"0")).join("")}`
  })
}