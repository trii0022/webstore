const url = "https://kea-alt-del.dk/t7/api/products/";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

{
  /* <article class="sale-item">

<img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
    alt="Sahara Team India Fanwear Round Neck Jersey" />
<h3>Sahara Team India Fanwear Round Neck Jersey</h3>
<p class="subtle">Tshirts | Nike</p>
<p class="price"><span>Prev.</span> DKK 1595,-</p>
<div class="discounted">
    <p>Now DKK 1148,-</p>
    <p>-28%</p> </div>

    <a href="product.html">Read More</a>

</article> */
}

function showProduct(product) {
  console.log(product);
  //soldOut onSale

  //grab the template
  const template = document.querySelector("#smallproducttemplate").content;
  //clone it

  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype}| ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldOut) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }

  copy.querySelector(".discounted p").textContent =
    product.price / product.discount;
  //grab parent

  const parent = document.querySelector("main");
  //append

  parent.appendChild(copy);
}
