import "./style.css"
import { homePage } from "./pages/home"
import { myPalettesPage } from "./pages/mypalettes"

const app = document.querySelector("#app")!

function router() {

  const path = window.location.pathname

  if (path === "/mypalettes") {
    app.innerHTML = ""
    app.appendChild(myPalettesPage())
  } else {
    app.innerHTML = ""
    app.appendChild(homePage())
  }
}

window.addEventListener("popstate", router)

router()