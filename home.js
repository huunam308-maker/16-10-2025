document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (!isLoggedIn || role !== "user") {
    window.location.href = "login.html";
    return;
  }

  const productList = document.getElementById("productList");
  const logoutBtn = document.getElementById("logoutBtn");

  const sampleProducts = [
    {
      name: "MONEY COUNTER WASHED TEE IN BLACK",
      price: "550,000 VND",
      img: "https://smakerclothing.com/thumb/320x300/1/upload/sanpham/_dsc6630-4974.jpg",
    },
    {
      name: "THE EYE SHORT SLEEVES WASHED TEE IN GREY",
      price: "500,000 VND",
      img: "https://smakerclothing.com/thumb/320x300/1/upload/sanpham/_dsc8420-6545.jpg",
    },
    {
      name: "FLAME $MAKER WASHED TEE IN BLACK",
      price: "550,000 VND",
      img: "https://smakerclothing.com/thumb/320x300/1/upload/sanpham/_dsc7136-7987.jpg",
    },
  ];

  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(sampleProducts));
  }

  productList.innerHTML = products
    .map(
      (p) => `
        <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-content">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <p>${p.desc}</p>
        </div>
        </div>
        `
    )
    .join("");

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "login.html";
  });
});
