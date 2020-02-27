// target input field

const filterInput = document.getElementById("filterInput");

// event listener

filterInput.addEventListener("keyup", filterNames);

// button
const button = document
  .getElementById("dessert")
  .addEventListener("click", check);

// function

function filterNames() {
  // input value transformed to uppercase
  const filterValue = document
    .getElementById("filterInput")
    .value.toUpperCase();

  // target ul and id 'names'
  const ul = document.getElementById("names");

  // target li items from the ul variable
  let li = ul.querySelectorAll("li.collection-item");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// function check() {
//   const ul = document.getElementById("names");

//   // target li items from the ul variable
//   let li = ul.querySelectorAll("li.collection-item");

//   if (li.classList === "dessert") {
//     li.style.display = "none";
//   }
// }

//if click button all it displays all items
//if click cakes display only cake items with class cake else hide all other items
