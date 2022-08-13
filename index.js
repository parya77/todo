const inputBox = document.querySelector(".input-box");
const todoItems = document.querySelector(".todo-items");
let todo = [];
let myTemp;
const todo1 = document.querySelector(".todo-item")
let complete1 = document.querySelector(".complete");
let pending1 = document.querySelector(".pending");
let all1 = document.querySelector(".all");

all1.addEventListener("click" , () => {
  let allOptions = document.querySelectorAll(".todo-item");

  allOptions.forEach(function(item) {
    item.classList.remove("d-none");
  })
})

pending1.addEventListener("click" , () => {
  let pendingItems = document.querySelectorAll(".pendingg");
  pendingItems.forEach(function(item) {
    item.classList.remove("d-none");
  });
  let allCompleteItems = document.querySelectorAll(".completed");
  allCompleteItems.forEach((e) => {
    e.classList.add("d-none");
  })
})


complete1.addEventListener("click" , function() {
  let pendingItems = document.querySelectorAll(".pendingg");
  pendingItems.forEach(function(item) {
    item.classList.add("d-none");
  });
  let allCompleteItems = document.querySelectorAll(".completed");
  allCompleteItems.forEach((e) => {
    e.classList.remove("d-none");
  })
})


inputBox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {

    if (myTemp) {
      myTemp.innerHTML = inputBox.value;
      myTemp = "";
      inputBox.value = ""
      return;
    }

    todo.push(inputBox.value);


    let myLi = document.createElement('li');
    myLi.className = ('todo-item pendingg');


    let myUl = document.createElement('ul');
    myUl.className = 'todo-item-actions d-none';

    let liEdit = document.createElement('li');
    liEdit.innerHTML = 'Edit';


    let liDel = document.createElement('li');
    liDel.innerHTML = 'Delete';


    myUl.appendChild(liEdit);
    myUl.appendChild(liDel);

    let myInput = document.createElement('input');
    myInput.type = 'checkbox';
    myInput.name = 'todo-item1';

    let mySpan = document.createElement('span');
    mySpan.className = 'todo-item-text';

    mySpan.innerHTML = inputBox.value;

    liEdit.addEventListener("click", function () {

      inputBox.value = mySpan.innerHTML;
      myTemp = mySpan;
    })


    let myI = document.createElement('i');
    myI.className = 'fa-solid fa-ellipsis todo-item2';

    myLi.appendChild(myUl);
    myLi.appendChild(myInput);
    myLi.appendChild(mySpan);
    myLi.appendChild(myI);
    todoItems.appendChild(myLi);

    myI.addEventListener('click', temp);
    liDel.addEventListener('click', function () {
      todoItems.removeChild(myLi);
    });

    myInput.addEventListener("change", (e) => {
      if (e.target.checked) {
        mySpan.style.textDecoration = "line-through";
        myLi.classList.remove("pendingg");
        myLi.classList.add("completed");
      } else {
        mySpan.style.textDecoration = "none";
        myLi.classList.add("pendingg");
        myLi.classList.remove("completed");
      }
    });


    // let htmlList = '';
    // htmlList += `<li class="todo-item">
    //       <ul class="todo-item-actions list-reset d-none">
    //         <li class="todo-itemm"><i class="fa-light fa-pencil">Edit</i></li>
    //         <li class="todo-itemm"><i class="fa-light fa-trash-can">Delete</i></li>
    //       </ul>
    //       <input type="checkbox" name="todo-item1" class="todo-item-check" id="" onchange="onCheckBox(event)">
    //       <span class="todo-item-text">${inputBox.value}</span>
    //       <i onclick="temp(event)" class="fa-solid fa-ellipsis todo-item2"></i>
    //     </li>`;



    // todoItems.innerHTML += htmlList;

    inputBox.value = ""
  }
})

let filters = document.querySelectorAll('.todo-filter-buttons li');
  filters.forEach(btn => {
    btn.addEventListener("click" , () =>{
     document.querySelector('li.active').classList.remove('active');
     btn.classList.add('active');
    })
     
  })
 
  

const button = document.querySelector(".button")
button.addEventListener("click", function (e) {
  todo = [];
  todoItems.innerHTML = '';

})


// function onCheckBox(e) {
//   console.log(e.target.nextElementSibling);
//   let spanelm = e.target.nextElementSibling;
//   if (e.target.checked == true) {
//     spanelm.style.textDecoration = "line-through";
//   } else {
//     spanelm.style.textDecoration = "none";
//   }
// }

function temp() {
  const itemss = document.querySelectorAll(".todo-item-actions");
  const submenu = this.parentElement.firstElementChild;
  itemss.forEach(function (element) {
    element.classList.add("d-none");
  });
  submenu.classList.toggle("d-none");
  closeSubs.classList.remove("d-none");
}


const closeSubs = document.querySelector(".close_submenu");
closeSubs.addEventListener("click", closefun)

function closefun() {
  const itemss = document.querySelectorAll(".todo-item-actions");
  itemss.forEach(function (element) {
    element.classList.add("d-none");
  });
  this.classList.add("d-none");
}



// 