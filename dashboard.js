const products = [
  {
    name: "iPhone 16 Pro Max Cover",
    price: "৳850",
    image: "images/iphone16.jpg"
  },
  {
    name: "Samsung S24 Ultra Cover",
    price: "৳750",
    image: "images/s24.jpg"
  },
  {
    name: "20W Fast Charger",
    price: "৳1200",
    image: "images/charger.jpg"
  },
  {
    name: "AirPods Pro",
    price: "৳1800",
    image: "images/earphone.jpg"
  }
];

const productContainer = document.getElementById("products");

function loadProducts() {

  productContainer.innerHTML = "";

  products.forEach(product => {

    productContainer.innerHTML += `
      <div class="product">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

          <h3>${product.name}</h3>

          <p class="price">${product.price}</p>

          <button>View Product</button>

        </div>

      </div>
    `;

  });

}

loadProducts();
document.getElementById("addProductBtn").addEventListener("click", () => {
    alert("Add Product page আসছে...");
});

document.getElementById("searchProduct").addEventListener("keyup", function () {
    const search = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
