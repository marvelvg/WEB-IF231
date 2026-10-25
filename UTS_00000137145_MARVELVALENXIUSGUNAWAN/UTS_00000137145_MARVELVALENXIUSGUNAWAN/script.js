
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


// Category
const semua = document.getElementById("semua");
const masuk = document.getElementById("indoors");
const keluar = document.getElementById("outdoors");
const tertentu = document.getElementById("succulent");


// Kotak utama parent
const ayah = document.getElementById("box-utama");

semua.addEventListener("click", () => {
  semua.classList.add("active");
});

masuk.addEventListener("click", () => {
  masuk.classList.add("active");
});

keluar.addEventListener("click", () => {
  keluar.classList.add("active");
});

tertentu.addEventListener("click", () => {
  tertentu.classList.add("active");
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
