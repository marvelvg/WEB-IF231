
// ---------------------------------------------------------
// Product Data (Given) — copied verbatim from the exam sheet.
// Students must NOT hand-write the cards in HTML; this array
// is the single source of truth for Feature 2.
// ---------------------------------------------------------
const plants = [
  { id: 1, name: "Monstera Deliciosa", category: "Indoor", price: 125000, icon: "🪴" },
  { id: 2, name: "Golden Barrel Cactus", category: "Succulent", price: 65000, icon: "🌵" },
  { id: 3, name: "Dwarf Frangipani", category: "Outdoor", price: 180000, icon: "🌳" },
  { id: 4, name: "Snake Plant", category: "Indoor", price: 95000, icon: "🌱" },
  { id: 5, name: "Bougainvillea", category: "Outdoor", price: 140000, icon: "🌸" },
  { id: 6, name: "Echeveria Elegans", category: "Succulent", price: 55000, icon: "🌵" }
];

console.log("processing data,,,");
console.log(plants);
const row = document.querySelector("#box-utama .row");

function render(list) {
  row.innerHTML = list.map(p => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="box-style card h-100 bg-color text-dark border-0">
        <h1 class="text-center my-5"> ${p.icon} </h1>
        <div class="card-body d-flex flex-column">
          <button class="type btn btn-outline-success w-25">${p.category}</button>
          <h2 class="item-name card-title">${p.name}</h2>
          <p class="item-price card-text mt-auto fw-bold">Rp ${p.price.toLocaleString("id-ID")}</p>
          <button class="keranjang btn btn-success">+Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

render(plants);

// Category
const semua = document.getElementById("semua");
const masuk = document.getElementById("indoors");
const keluar = document.getElementById("outdoors");
const tertentu = document.getElementById("succulent");

// Target
const type = document.querySelectorAll(".type");
const itemname = document.querySelectorAll(".item-name");
const itemprice = document.querySelectorAll(".item-price");

// Kotak utama parent
const ayah = document.getElementById("box-utama");
const tombol = [semua, masuk, keluar, tertentu];

function setActive(btn) {
  tombol.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

semua.addEventListener("click", () => {
  setActive(semua);
  render(plants);
});

masuk.addEventListener("click", () => {
  setActive(masuk);
  render(plants.filter(p => p.category === "Indoor"));
});

keluar.addEventListener("click", () => {
  setActive(keluar);
  render(plants.filter(p => p.category === "Outdoor"));
});

tertentu.addEventListener("click", () => {
  setActive(tertentu);
  render(plants.filter(p => p.category === "Succulent"));
});

// Fitur keranjang
const cart = document.querySelectorAll(".keranjang");
const hitung = document.querySelector(".hitungan");

console.log("halo", hitung, cart);

cart.forEach((btn) => {
  btn.addEventListener("click", () => {
    const x = parseInt(hitung.textContent);
    hitung.innerHTML = x + 1;
  })
});
