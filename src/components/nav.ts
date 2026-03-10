
export const nav = (() => {
  const nav = document.createElement("nav");

  nav.classList = "bg-black text-white px-4 py-2 flex justify-between items-center";


  const leftText = document.createElement("span");
  leftText.textContent = "Colorizer Palette Generator";
  leftText.className = "font-bold text-lg";


  const rightButtons = document.createElement("div");
  rightButtons.className = "flex space-x-2";


  const button1 = document.createElement("button");
  button1.textContent = "random palette";
  button1.className = "bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded";


  const button2 = document.createElement("button");
  button2.textContent = "my palettes";
  button2.className = "bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded";

 
  return nav;
})();