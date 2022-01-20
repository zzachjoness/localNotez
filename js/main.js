const form = document.getElementById("uniqueID");
let names = document.getElementById("nameList");
let namesArr = [];
let myStorage = window.localStorage;
function addName(name) {
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.innerText = "-";
  button.onclick = function () {
    alert("here be dragons");
  };
  div.innerText = name;
  div.appendChild(button);
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
  const key = `uid${myStorage.length}`;
  e.preventDefault();
  const name = e.target.name.value;
  myStorage.setItem(key, name);
  namesArr.push(name);
  addName(name);
  document.getElementById("name").value = "";
});
