
(function addBtnClickHandler() {
    const userInputText = () => document.querySelector('.userInputText').value;
    const addButton = document.querySelector('.btn-add');
    addButton.addEventListener('click', (event) => {
        addNewPendingItem(userInputText());
        document.querySelector('.userInputText').value = null
        
    });
})();


// Add new pending item to pending list

function addNewPendingItem(label) {
    document.querySelector('.pending-items')
        .insertAdjacentHTML('afterbegin', newPendingItemHTML(label));
   
    // Add EventListeners to New Pending Items:
    let trashButton = document.querySelector('.pending-items>li>.btn-delete-item')
        trashButton.addEventListener('click', (event) => {
            event.currentTarget.parentElement.remove()
        });
    let checkBox = document.querySelector('.pending-items>li>.checkbox')
    checkBox.addEventListener('change', (event) => {
            if (checkBox.checked == true) {
                moveToCompleted(event)
            }
        })
    pendingNote();
    completedNote();
    
};




function newPendingItemHTML(label) {
    return `<li><input class="checkbox" type="checkbox" id="${label}">
<label class="pending">${label}</label><button class="btn btn-delete-item">
<i class="fa fa-trash-o" aria-hidden="true"></i></button></li>`
};

// Add new completed item to completed-list (move from pending-list)

function addNewCompletedItem(label) {
    document.querySelector('.completed-items')
        .insertAdjacentHTML('afterbegin', newCompletedItemHTML(label));
    // Add EventListeners to New Items:
    let trashButton = document.querySelector('.btn-delete-item')
        trashButton.addEventListener('click', (event) => {
            event.currentTarget.parentElement.remove()
        });
    let checkBox = document.querySelector('.completed-items>li>.checkbox')
    checkBox.addEventListener('change', (event) => {
             if (checkBox.checked == false) {
                moveToPending(event);
            };

        
    });
};


function newCompletedItemHTML(label) {
    return `<li><input class="checkbox" type="checkbox" id="${label}" checked>
<label class="completed">${label}</label><button class="btn btn-delete-item">
<i class="fa fa-trash-o" aria-hidden="true"></i></button></li>`
};


(function deleteItemClickHandler() {
    const trashButtons = document.querySelectorAll('.btn-delete-item')
    trashButtons.forEach(element => element.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove();
        pendingNote()
        completedNote()
    }));

})();

function removeAllPendingElements() {
    document.querySelectorAll('.pending').forEach(element => element.parentElement.remove());
    pendingNote();
    completedNote();
};

(function clearAllBtnClickHandler() {
    document.querySelector('.btn-clear-all-pending').addEventListener('click', (event) => {
        removeAllPendingElements();
        

    });
})();

(function showHideBtnClickHandler() {
    document.querySelector('.btn-show-hide-completed').addEventListener('click', (event) => {
        showHideCompletedItems();
    })
})();

function showHideCompletedItems() {
    document.querySelectorAll('.completed-items')
        .forEach(element => element.parentElement.classList.toggle("hidden"))
};

function moveToCompleted(event) {
    event.currentTarget.parentElement.remove()
    let label = event.currentTarget.parentElement.childNodes[2].textContent;
    addNewCompletedItem(label);
    pendingNote()
    completedNote()
};

function moveToPending(event) {
    event.currentTarget.parentElement.remove()
    let label = event.currentTarget.parentElement.childNodes[2].textContent;
    addNewPendingItem(label);
    pendingNote()
    completedNote()
};


function pendingNote() {
    const numberOfPendingItems = document.querySelectorAll('.pending').length;
    const pendingNote = `You have ${numberOfPendingItems} pending items`;
    document.querySelector('.pending-note').textContent = pendingNote;
}

function completedNote() {
    const numberOfCompletedItems = document.querySelectorAll('.completed').length;
    const numberOfPendingItems = document.querySelectorAll('.pending').length;
    const percentage = 100 ||
    Math.round(numberOfCompletedItems/(numberOfCompletedItems + numberOfPendingItems)*100)
    const completedNote = `Completed tasks:${percentage}%`;
    document.querySelector('.completed-note').textContent = completedNote;
};


// Show date.

const showDate = () =>
const currentDate = new Date()
    const day = [
        currentDate.getMonth() + 1,
        currentDate.getDate(),
        currentDate.getFullYear(),

    ].map;


    // const dayNames =  [
    //     'Sunday',
    //     'Monday',
    //     'Tuesday',
    //     'Wednesday',
    //     'Thursday',
    //     'Friday',
    //     'Saturday'
    // ];

    // // Localstorage handler object.
    // const localDB = {
    //     //localDB
    // }



// CSERKO  JOZSI MEGOLDASA
// CSERKO  JOZSI MEGOLDASA
// CSERKO  JOZSI MEGOLDASA



// Set event listeners.

const setListeners = () =>{
    todoAddBtn.addEventListeners('click',addNewTodo);

};

// Save and Add todo to the date base
const addNewToDo = () => {
    const value = todoInput.value;
    if (value === '') {
        alert('Please type todo.');

        return;
    };

    const todo = {
        text: value,
        done: false
    }

    // teendok tombbe elmentem:
    todos.push(todo);
    // localStorage kezeles
    localDB.setItem('todos', todos);

    showTodo(todo);nt
    todoInput.value = '';
};


// Show todo in the list

const showTodo = todo => {
    const todoItem = document.createElement('div');
    todoListPending.appendChild(todoItem);

    todoItem.innerHTML = `
    <input type = "checkbox">
    <span>${todo.text}</span>
    <button>
    <i class="fa fa-trash"
    </button>

    `;
    
};

// Load existing todos

const loadExistingTodos = () => {
    if (todos && Array.isArray(todos)) {   // nem Null-e, es tombe-e?
        todos.foEach( todo => showTodo(todo) );
    }
}

//========================
init();



function animateNewitem(label) {
    let t = setTimeout(function(){
        clearTimeout(t);
        const itemSelector = () => document.querySelector(`#${label}`);
        itemSelector().parentElement.style.transform="translateX(0)";
      },1);
};

function newPendingItemHTML(label) {
    return `<li class="slide-in"><input class="checkbox" type="checkbox" id="${label}">
<label class="pending">${label}</label><button class="btn btn-hidden btn-delete-item">
<i class="fa fa-trash-o" aria-hidden="true"></i></button></li>`
};