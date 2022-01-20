const form = document.getElementById("uniqueID");
let names = document.getElementById("nameList");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target;
  console.log(input.name.value);
  names.innerHTML = input.name.value;
});
