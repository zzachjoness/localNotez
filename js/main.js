const form = document.getElementById("uniqueID");
let names = document.getElementById("nameList");
let namesArr = [];
let myStorage = window.localStorage;
for (let i = 0; i < myStorage.length; i++) {
  const getName = myStorage.getItem(myStorage.key(i));
  namesArr.push(getName);
  console.log(namesArr);
}
names.innerHTML = namesArr.map((name) => `<div>${name}</div>`);
form.addEventListener("submit", (e) => {
  const length = myStorage.length;
  e.preventDefault();
  const name = e.target.name.value;
  console.log("name: ", name);
  console.log("length: ", length);
  myStorage.setItem(`uid${length}`, name);
});
