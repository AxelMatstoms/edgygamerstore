let productsCont;

(() => {

  const categories = {
    "kb": "products/keyboards.json",
    "m": "products/mice.json",
    "hp": "products/audio.json"
  };

  const names = {
    "kb": "Keyboards",
    "m": "Mice",
    "hp": "Audio"
  };

  const search = searchToObject(location.search);
  const c_id = search["c"];
  const url = categories[c_id];

  productsCont = id("products");

  const h2 = c_el("h2", {"className": "categories-title"});
  h2.appendChild(c_txt(names[c_id]));
  productsCont.parentElement.insertBefore(h2, productsCont);

  fetch(url).then(req => req.json()).then(json => json.forEach(product => displayProduct(product)));

})();

function displayProduct(info) {
  const link = c_el("a", {"className": "product-link", "href": `product.html?id=${info.id}`});
  const div = c_el("div", {"className": "product"});
  const img = c_el("img", {"className": "product-img", "src": info.thumb});
  const name = c_el("p", {"className": "product-name"});
  const nameText = c_txt(info.name);
  name.appendChild(nameText);
  const price = c_el("p", {"className": "product-price"});
  const priceText = c_txt(`$${info.price}`);
  price.appendChild(priceText);
  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(price);
  link.appendChild(div);
  productsCont.appendChild(link);
}
