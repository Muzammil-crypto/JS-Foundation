// DOM Manipulation Examples

// 1. Selecting Elements
const mainTitle = document.getElementById('mainTitle');
const paragraphs = document.getElementsByClassName('description');
const itemList = document.getElementById('itemList');
const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');

// 2. Modifying Content
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', function() {
    mainTitle.textContent = 'Title Changed!';
    paragraphs[0].innerHTML = 'First paragraph has <strong>changed</strong>.';
    paragraphs[1].textContent = 'Second paragraph has also changed.';
});

// 3. Modifying Attributes
mainTitle.setAttribute('title', 'This is the main title');
console.log(mainTitle.getAttribute('title')); // Output the title attribute value

// 4. Modifying Styles and Classes
const addClassButton = document.getElementById('addClassButton');
addClassButton.addEventListener('click', function() {
    mainTitle.classList.toggle('highlight');
});

// 5. Creating and Removing Elements
const createElementButton = document.getElementById('createElementButton');
createElementButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

const removeElementButton = document.getElementById('removeElementButton');
removeElementButton.addEventListener('click', function() {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});

// 6. Handling Events
itemList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert(`You clicked on ${event.target.textContent}`);
    }
});

// 7. Traversing the DOM
console.log('First child of itemList:', itemList.firstElementChild.textContent);
console.log('Last child of itemList:', itemList.lastElementChild.textContent);

// 8. Working with Forms
const submitFormButton = document.getElementById('submitFormButton');
submitFormButton.addEventListener('click', function() {
    alert(`Form submitted with username: ${usernameInput.value}`);
    form.submit(); // This would submit the form if it had an action
});

const resetFormButton = document.getElementById('resetFormButton');
resetFormButton.addEventListener('click', function() {
    form.reset(); // Reset the form to its initial state
});

// Additional: Adding and removing attributes
usernameInput.setAttribute('placeholder', 'Enter your username');
if (usernameInput.hasAttribute('placeholder')) {
    console.log('Placeholder attribute exists.');
    usernameInput.removeAttribute('placeholder');
}

// Traversing using siblings
console.log('Next sibling of the first paragraph:', paragraphs[0].nextElementSibling.textContent);

// Adding styles dynamically
usernameInput.style.backgroundColor = 'lightyellow';
usernameInput.style.padding = '10px';
