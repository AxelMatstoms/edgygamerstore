const id = (i) => document.getElementById(i);
const to_a = (arrayLike) => [...arrayLike];
const cls = (n) => to_a(document.getElementsByClassName(n));
const c_el = (tname, props) => (el => (() => el)((props) ? Object.keys(props).forEach(key => ((k, v) => el[k] = v)(key, props[key])) : 0))(document.createElement(tname));
const c_txt = (text) => document.createTextNode(text);
const empty = (element) => ((remover) => (remover = () => (element.firstChild) ? (() => remover())(element.removeChild(element.firstChild)) : undefined)(element))()
const searchToObject = (search) => search.slice(1).split("&").map(str => str.split("=")).reduce((a, c) => (() => a)(a[c[0]] = c[1]), {});

//When JS gives you arrow functions don't make shorter maps and filters, REDUCE CODE TO ONE LINE, ONE STATEMENT
