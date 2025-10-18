const categories = [
  {
    name: "SKZOO",
    options: [
      "skzoo1.png",
      "skzoo2.png",
      "skzoo3.png",
      "skzoo4.png",
      "skzoo5.png",
      "skzoo6.png",
      "skzoo7.png",
      "skzoo8.png",
    ],
  },
];

let selectedCategory = 0;
let selections = new Array(categories.length).fill(0);
const canvas = document.getElementById("previewCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 2048;
canvas.height = 2048;

function scrollToSelectors() {
  document
    .querySelector(".select-section")
    .scrollIntoView({ behavior: "smooth" });
}

function selectCategory(index) {
  selectedCategory = index;
  document
    .querySelectorAll(".category-button")
    .forEach((btn) => btn.classList.remove("active:"));
  document.getElementById("cat" + (index + 1)).classList.add("active");
  updateOptions();
}

function updateOptions() {
  const optionsDiv = document.getElementById("optionSelectors");
  optionsDiv.innerHTML = "";
  categories[selectedCategory].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.style.backgroundImage = `url('path/to/${option}')`;
    if (selections[selectedCategory] === index) {
      button.classList.add("selected");
    }
    button.onclick = () => selectOption(index);
    optionsDiv.appendChild(button);
  });
}

function selectOption(index) {
  selection[selectedCategory] = index;
  updateOptions();
  updatePreview();
}

function updatePreview() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  selections.forEach((sel, catIndex) => {
    const img = new Image();
    img.src = `path/to/${categories[catIndex].options[sel]}`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  });
}

function finishPfp() {
  document.getElementById("popup").style.display = "flex";
}

function savePfp() {
  const link = document.createElement("a");
  link.download = "skzoomii.png";
  link.href = canvas.toDataURL();
  link.click();
}

selectCategory(0);
updatePreview();
