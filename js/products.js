const searchToObject = (search) => search.slice(1).split("&").map(str => str.split("=")).reduce((a, c) => (() => a)(a[c[0]] = c[1]), {});
const categories = {
  "kb": "products/keyboards.json",
  "m": "products/mice.json",
  "hp": "products/headphones.json"
}

const search = searchToObject(location.search);
const url = categories[search["c"]];

const productsCont = cls("products")[0];

fetch(url).then(req => req.json()).then(json => json.forEach(product => displayProduct(product)));

function displayProduct(info) {
    const link = document.createElement("a");
    link.className = "product-link";
    link.href = `product.html?id=${info.id}`
    const div = document.createElement("div");
    div.className = "product";
    const img = document.createElement("img");
    img.className = "product-img";
    img.src = info.thumb;
    const name = document.createElement("p");
    name.className = "product-name";
    const nameText = document.createTextNode(info.name);
    name.appendChild(nameText);
    const price = document.createElement("p");
    price.className = "product-price";
    const priceText = document.createTextNode(`$${info.price}`);
    price.appendChild(priceText);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    link.appendChild(div);
    productsCont.appendChild(link);
}
