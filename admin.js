document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (!isLoggedIn || role !== "admin") {
    window.location.href = "login.html";
    return;
  }

  const form = document.getElementById("productForm");
  const productList = document.getElementById("productList");
  const logoutBtn = document.getElementById("logoutBtn");
  const editIndex = document.getElementById("editIndex");

  
  let products = JSON.parse(localStorage.getItem("products")) || [];

  function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
  }

  function renderProducts() {
    productList.innerHTML = products.map((p, i) => `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-content">
          <h4>${p.name}</h4>
          <div class="price">${p.price}</div>
          <p>${p.desc}</p>
          <div class="btn-group">
            <button class="btn-edit" onclick="editProduct(${i})">Sửa</button>
            <button class="btn-delete" onclick="deleteProduct(${i})">Xóa</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  renderProducts();

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const img = document.getElementById("img").value.trim();

    const productData = { name, price, desc, img };

    if (editIndex.value === "") {
      products.push(productData);
    } else {
      products[editIndex.value] = productData;
      editIndex.value = "";
    }

    saveProducts();
    renderProducts();
    form.reset();
  });

  window.editProduct = (index) => {
    const p = products[index];
    document.getElementById("name").value = p.name;
    document.getElementById("price").value = p.price;
    document.getElementById("desc").value = p.desc;
    document.getElementById("img").value = p.img;
    editIndex.value = index;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.deleteProduct = (index) => {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      products.splice(index, 1);
      saveProducts();
      renderProducts();
    }
  };

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "login.html";
  });
});
