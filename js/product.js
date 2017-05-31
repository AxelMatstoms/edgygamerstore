let productID;

(() => {
  productID = searchToObject(location.search)["id"];
  const url = `products/${productID}.json`;
  //console.log(url);
  fetch(url).then(resp => resp.json()).then(json => display(json));
})()

function display(info) {
  const name = id("productName");
  empty(name);
  name.appendChild(c_txt(info.name));
  const brand = id("productBrand");
  empty(brand);
  brand.appendChild(c_txt(info.brand));
  const pic = id("productPic");
  pic.style = `background-image: url(${info.image})`
  const slogan = id("productSlogan");
  empty(slogan);
  slogan.appendChild(c_txt(info.slogan));
  const buy = id("productBuy");
  empty(buy);
  buy.appendChild(c_txt(`Buy now ${productID != "diamondback" ? "$": ""}${info.price}`)) //Diamondback cost in CR instead of $
  const desc = id("productDescription");
  empty(desc);
  desc.appendChild(c_txt(info.description))
  const specs = id("productSpecs");
  empty(specs);
  Object.keys(info.specs).forEach(key => {
    const li = c_el("li", {"className": "product-details-spec-list-item"});
    const span = c_el("span", {"className": "product-spec-feature"});
    span.appendChild(c_txt(key));
    li.appendChild(span);
    li.appendChild(c_txt(info.specs[key]));
    specs.appendChild(li);
  })
}
