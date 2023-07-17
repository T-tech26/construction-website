"use strict"

const submit = document.getElementById('form');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  const messageParent = document.getElementById('response-data');
  const dataContent = document.getElementById('data-content');

  dataContent.style.animationName = 'disappearInfo';
  messageParent.style.animationName = 'hideInfo';
  window.location.reload();
});

const hideMsg = (alertMsg) => {
  setTimeout(() => {
    alertMsg.style.animationName = 'hide-res-msg';
  }, 2000);
}

const displayData = (data) => {
  const { Name, Email, Message } = data;
  const messageParent = document.getElementById('response-data');
  const dataContent = document.getElementById('data-content');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');

  name.textContent = Name;
  email.textContent = Email;
  msg.textContent = Message;
  messageParent.style.display = 'block';
  messageParent.style.animationName = 'showInfo';
  dataContent.style.animationName = 'displayInfo';
}

const sendMessage = (alertMsg, formData) => {
  fetch('/contact.page', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(formData)
  }).then(res => res.json())
  .then(data => {
    setTimeout(() => {
      displayData(data);
    }, 2500);
  }).catch((err) => {
    alertMsg.textContent = `${err}`;
    alertMsg.style.animationName = 'show-res-msg'
    hideMsg(alertMsg);
  })
}

const validateForm = (formData) => {
  const { name, email, message } = formData;
  const alertMsg = document.getElementById('response-msg');

  if (!name || name.length < 3) {

    alertMsg.textContent = 'Please enter your fullname';
    alertMsg.style.animationName = 'show-res-msg';
    hideMsg(alertMsg);

  }else if (!email) {
    
    alertMsg.textContent = 'Please enter your Email address';
    alertMsg.style.animationName = 'show-res-msg';
    hideMsg(alertMsg);
    
  }else if(!email.includes('@gmail.com')) {
    
    alertMsg.textContent = 'Please enter a valid Email address';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);
    
  }else if(message.length < 20) {

    alertMsg.textContent = 'Please send us a message of at least 15 characters to well describe your purpose';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);
  }else {
    alertMsg.textContent = 'Form successfully submitted';
    alertMsg.style.animationName = 'show-res-msg'
    hideMsg(alertMsg);
    sendMessage(alertMsg, formData);
  }
}

// on form submission
submit.addEventListener('submit', (e) => {
  // on form submission prevent the default form submission
  e.preventDefault();

  // accessing all our form fields
  let name = document.getElementById('input-name');
  let email = document.getElementById('input-email');
  let msg = document.getElementById('message');

  // create an object to hold the  form data
  const formData = {
    name: name.value,
    email: email.value,
    message: msg.value
  }

  validateForm(formData);
})