// target input field

const filterInput = document.getElementById("filterInput");

// event listener

filterInput.addEventListener("keyup", filterNames);

// button
const button = document.getElementById("hide").addEventListener("click", hide);

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

function hide() {
  const ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item");

 ul.classList.add('hide');

  //for some reason it will not work on li.classList.add(); it keeps saying it's undefined
  //need to work with arrays
}

//if click button all displays all items

//if click food, add display class to food items OR add hide class to all other items

//loop through array, but how to id what will add the class to the item?
