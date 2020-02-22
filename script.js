// target input field

const filterInput = document.getElementById('filterInput');

// event listener

filterInput.addEventListener('keyup', filterNames);

// function

function filterNames() {
    // input value transformed to uppercase
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    // target ul and id 'names'
    const ul = document.getElementById('names');

    // target li items from the ul variable
    let li = ul.querySelectorAll('li.collection-item');
}

