const searchToObject = (search) => search.slice(1).split("&").map(str => str.split("=")).reduce((a, c) => (() => a)(a[c[0]] = c[1]), {});
const categories = {
  "kb": "products/keyboards.json",
  "m": "products/mice.json",
  "hp": "products/headphones.json"
}

const search = searchToObject(location.search);
const url = categories[search["c"]];

fetch(url).then(req => req.json()).then(json => console.log(json))

function displayProduct(info) {

}
