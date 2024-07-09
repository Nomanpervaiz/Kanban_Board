// All varible declasartion getting from id tag
let signUpp = document.getElementById("signup");
let logIn = document.getElementById("login");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let animationReg = document.getElementById("register-ani")
let animationLog = document.getElementById("login-ani")
//Onclick to switch display from sign up to login in
function switchToLogin() {
  section1.style.display = "none";
  section2.style.display = "inline-flex";
};
function switchToSign() {
  section1.style.display = "inline-flex";
  section2.style.display = "none";
};



function getUser() {
  let users = localStorage.getItem('users')
  if (users) {
    users = JSON.parse(users)
  } else {
    users = []
  }
  return users;
}


// Sign up  function onclick sign up button
function signUp() {
  let userName = document.getElementById("s-username");
  let email = document.getElementById("s-email");
  let password = document.getElementById("s-password");
  let error1 = document.getElementById('error1');
  let error2 = document.getElementById('error2');
  let error3 = document.getElementById('error3');
  let users = getUser();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let storeEmails = users.map(user => user.email);

  // Reset error states
  error1.style.visibility = "hidden";
  error2.style.visibility = "hidden";
  error3.style.visibility = "hidden";
  userName.style.border = "";
  email.style.border = "";
  password.style.border = "";

  // Check if inputs are valid
  let isValid = true;

  if (!userName.value.trim()) {
    error1.style.visibility = "visible";
    error1.value = "Input Field is empty"
    userName.style.border = "2px solid red";
    isValid = false;
  }

  if (!email.value.trim() || !regex.test(email.value) || storeEmails.includes(email.value)) {
    error2.style.visibility = "visible";
    error2.value = "Input Field is empty"
    email.style.border = "2px solid red";
    if (storeEmails.includes(email.value)) {
      error2.value = "Email already exists";
    }
    isValid = false;
  }

  if (!password.value.trim()) {
    error3.style.visibility = "visible";
    error3.value = "Input Field is empty"
    password.style.border = "2px solid red";
    isValid = false;
  }

  if (isValid) {
    let userSignUp = {
      name: userName.value,
      email: email.value,
      password: password.value
    };

    users.push(userSignUp);
    localStorage.setItem('users', JSON.stringify(users));
    userName.style.border = "2px solid green";
    password.style.border = "2px solid green";
    email.style.border = "2px solid green";
    userName.value = '';
    email.value = '';
    password.value = '';
    animationReg.style.display = "block"
    animationReg.innerHTML = `<lottie-player src="https://lottie.host/6b137c04-c090-4450-a599-68c77c05d011/CHHgNdNemg.json" background="transparent" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>`
    setTimeout(() => {
      section1.style.display = "none"
      section2.style.display = "none"
      window.location.href = "kanban.html"
    }, 2500);
  }
}


function onFocus() {
  let error1 = document.getElementById('error1')
  let error2 = document.getElementById('error2')
  let error3 = document.getElementById('error3')
  let userName = document.getElementById("s-username")
  let email = document.getElementById("s-email")
  let password = document.getElementById("s-password")
  userName.style.border = "none";
  email.style.border = "none";
  password.style.border = "none";
  error1.style.visibility = "hidden"
  error2.style.visibility = "hidden"
  error3.style.visibility = "hidden"
}



function onFocusLogin() {
  let email = document.getElementById("email-login");
  let password = document.getElementById("password-login");
  email.style.border = "none";
  password.style.border = "none";
  let loginError1 = document.getElementById('l-error1')
  let loginError2 = document.getElementById('l-error2')
  loginError1.style.visibility = "hidden"
  loginError2.style.visibility = "hidden"
}

function logInn() {
  let email = document.getElementById("email-login");
  let password = document.getElementById("password-login");
  let loginError1 = document.getElementById('l-error1');
  let loginError2 = document.getElementById('l-error2');
  let users = getUser();
  let storeEmails = users.map(user => user.email);
  let storePassword = users.map(user => user.password);


  loginError1.style.visibility = "hidden";
  loginError2.style.visibility = "hidden";
  email.style.border = "";
  password.style.border = "";

  let saveEmails = ""
  let savePasswords = ""
  let match = false
  for (let i = 0; i < storeEmails.length; i++) {
    if (email.value === storeEmails[i]) {
      match = true
      saveEmails = storeEmails[i]
      if (password.value === storePassword[i]) {
        match = true
        savePasswords = storePassword[i]
      }
      break
    }

  }
  if (match === false) {
    loginError1.style.visibility = "visible";
    loginError1.value = "Input Field is empty"
    email.style.border = "2px solid red";
    loginError2.style.visibility = "visible";
    loginError2.value = "Input Field is empty"
    password.style.border = "2px solid red";
  }
  if (email.value.trim() && password.value.trim()) {
    if (email.value === saveEmails) {
      if (password.value === savePasswords) {
        password.style.border = "2px solid green";
        email.style.border = "2px solid green";
        email.value = '';
        password.value = '';
        animationLog.style.display = "block"
        animationLog.innerHTML = ` <lottie-player src="https://lottie.host/087b7e27-2f50-44fb-8a40-583506d9990f/FhifUvr3Wy.json" background="##fff" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>`
        setTimeout(() => {
          section1.style.display = "none"
          section2.style.display = "none"
          window.location.href = "kanban.html"
        }, 2500);
      } else {
        loginError2.style.visibility = "visible";
        loginError2.value = "Incorrect password"
        password.style.border = "2px solid red";

      }
    } else {
      loginError1.style.visibility = "visible";
      loginError1.value = "Email not existed"
      email.style.border = "2px solid red";
    }

  }
}

// section 3 work 

let todoData = localStorage.getItem('TodoData');
function getTodoData() {
  if (todoData) {
    todoData = JSON.parse(todoData);
  } else {
    todoData = [];
  }
  return todoData;
}

let titel = document.getElementById("titel");
let description = document.getElementById("description");
let list = document.getElementById("list");
let progressList = document.getElementById("progressList");
let doneList = document.getElementById("doneList");
let todoAdd = getTodoData();

function listItemMaker(task) {
  let taskItem = document.createElement("li");
  taskItem.className = 'listItem';
  taskItem.draggable = true;
  taskItem.id = 'task-' + new Date().getTime();
  taskItem.ondragstart = dragStart;
  taskItem.innerHTML = `
    <p class="time">${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    Titel: <h5>${task.title}</h5>
    Description: <p>${task.description}</p>
    <button class="fa-solid fa-xmark deleteBtn" onclick="deleteItem(this)"></button>`;
  list.appendChild(taskItem);
}

function addTask() {
  if (titel.value !== '' && description.value !== '') {
    let kanbanData = {
      title: titel.value.toUpperCase(),
      description: description.value,
    };
    todoAdd.push(kanbanData);
    localStorage.setItem('todoAdd', JSON.stringify(todoAdd));
    listItemMaker(kanbanData);
    titel.value = '';
    description.value = '';
  }

}

window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < todoData.length; i++) {
    console.log(todoData[i]);
  }
})

function deleteItem(element) {
  let listItem = element.parentNode;
  listItem.parentNode.removeChild(listItem);
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let listItem = document.getElementById(data);
  event.target.appendChild(listItem);
}

window.onload = (event) => {
  let listItems = document.getElementsByClassName("listItem");
  list.addEventListener('dragover', allowDrop);
  list.addEventListener('drop', drop);
  progressList.addEventListener('dragover', allowDrop);
  progressList.addEventListener('drop', drop);
  doneList.addEventListener('dragover', allowDrop);
  doneList.addEventListener('drop', drop);
};