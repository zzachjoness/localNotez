const form = document.getElementById("uniqueID");
let nameList = document.getElementById("nameList");
let namesArr = [];
let myStorage = window.localStorage;

function addName(key, name) {
  let div = document.createElement("div");
  let userName = document.createElement("div");
  let button = document.createElement("button");
  div.setAttribute("id", key);
  userName.innerText = name;
  console.log("should be name: ", name);
  button.innerText = "-";

  button.onclick = function () {
    myStorage.removeItem(key);

    /*
    
    this statment is not needed as dom will be manipulated with remove
    instead of repainting the entire namesArr array

    namesArr = namesArr.filter((obj) => obj.key !== key);
    
    */
    var el = document.getElementById(key);
    el.remove();
  };

  div.appendChild(userName);
  div.appendChild(button);
  nameList.appendChild(div);
}

for (let i = 0; i < myStorage.length; i++) {
  const key = myStorage.key(i);
  const name = myStorage.getItem(key);
  namesArr.push({ key: key, name: name });
}

namesArr.forEach(({ key: key, name: name }) => {
  addName(key, name);
});

form.addEventListener("submit", (e) => {
  const key = `uid${myStorage.length}`;
  e.preventDefault();
  const name = e.target.name.value;
  myStorage.setItem(key, name);
  namesArr.push({ key: key, name: name });
  console.log(namesArr);
  addName(key, name);
  document.getElementById("name").value = "";
});
