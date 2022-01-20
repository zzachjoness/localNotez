const form = document.getElementById("uniqueID");
let names = document.getElementById("nameList");
let namesArr = [];
let myStorage = window.localStorage;
function addName(name) {
  let div = document.createElement("div");
  div.innerText = name;
  names.appendChild(div);
}
for (let i = 0; i < myStorage.length; i++) {
  const getName = myStorage.getItem(myStorage.key(i));
  namesArr.push(getName);
}
namesArr.forEach((name) => {
  addName(name);
});
form.addEventListener("submit", (e) => {
  const length = myStorage.length;
  e.preventDefault();
  const name = e.target.name.value;
  myStorage.setItem(`uid${length}`, name);
  namesArr.push(name);
  addName(name);
  document.getElementById("name").value = "";
});
