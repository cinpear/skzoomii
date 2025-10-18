const characterData = [
  {
    name: "Wolfchan",
    categories: [],
  },
  {
    name: "Leebit",
    categories: [],
  },
  {
    name: "Dwaekki",
    categories: [],
  },
  {
    name: "Jiniret",
    categories: [],
  },
  {
    name: "Hanquokka",
    categories: [],
  },
  {
    name: "Bbokari",
    categories: [],
  },
  {
    name: "Puppym",
    categories: [],
  },
  {
    name: "Foxiny",
    categories: [],
  },
];

let selectedCharacter = 0;
let categories = characterData[selectedCharacter].categories;
let selectedCategory = 0;
let selections = new Array(categories.length).fill(0);
const canvas = document.getElementById("previewCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 2048;
canvas.height = 2048;

function scrollToSelectors() {
  document
    .querySelector(".character-selection")
    .scrollIntoView({ behavior: "smooth" });
}

function selectCharacter(index) {
  selectedCharacter = index;
  categoires = characterData[selectedCharacter].categories;
  selections = new Array(categories.length).fill(0);
  selectedCategory = 0;
  document
    .querySelectorAll(".character-button")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById("char" + (index + 1)).classList.add("active");
  document
    .querySelectorAll(".category-button")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById("cat1").classList.add("active");
  updateOptions();
  updatePreview();
}

function selectCategory(index) {
  selectedCategory = index;
  document
    .querySelectorAll(".category-button")
    .forEach((btn) => btn.classList.remove("active"));
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

  const charIMG = new Image();
  charIMG.src = `path/to/char${selectedCharacter + 1}.png`;
  charIMG.onload = () => {
    ctx.drawImage(charIMG, 0, 0, canvas.width, canvas.height);
    selections.forEach((sel, catIndex) => {
      const img = new Image();
      img.src = `path/to/${categories[catIndex].options[sel]}`;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    });
  };
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
