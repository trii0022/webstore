const url = "https://kea-alt-del.dk/t7/api/products/1163";
/* const url = "https://kea-alt-del.dk/t7/api/products/2801"; */

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;

  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(".purchaseBox .productname").textContent =
    product.productdisplayname;

  document.querySelector(".productdetails .productname").textContent =
    product.productdisplayname;

  document.querySelector(".productdetails .articletype").textContent =
    product.articletype;

  document.querySelector(".productdetails .season").textContent =
    product.season;

  document.querySelector(".purchaseBox .price").textContent = product.price;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector("img.productimage").alt = product.productdisplayname;
}
