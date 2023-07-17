// using strict mode
'use strict'

// accessing the form
const form = document.getElementById('form');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  const messageParent = document.getElementById('response-data');
  const dataContent = document.getElementById('data-content');

  dataContent.style.animationName = 'disappearInfo';
  messageParent.style.animationName = 'hideInfo';
  window.location.reload();
  window.history.back();
});

const hideMsg = (alertMsg) => {
  setTimeout(() => {
    alertMsg.style.animationName = 'hide-res-msg';
  }, 2000);
}

const displayData = (data) => {
  const messageParent = document.getElementById('response-data');
  const dataContent = document.getElementById('data-content');
  document.getElementById('info-name').textContent = data.name;
  document.getElementById('info-address').textContent = data.address;
  document.getElementById('info-gender').textContent = data.gender;
  document.getElementById('info-nationality').textContent = data.nationality;
  document.getElementById('info-state').textContent = data.state;
  document.getElementById('info-occupation').textContent = data.occupation;
  document.getElementById('info-certificate').textContent = data.certificate;
  document.getElementById('info-number').textContent = data.number;
  document.getElementById('info-email').textContent = data.email;

  dataContent.style.animationName = 'displayInfo';
  messageParent.style.display = 'block';
  messageParent.style.animationName = 'showInfo';
}

const submitForm = (alertMsg, data) => {
  const serverUrl = '/certificate.application.page';
  fetch(
    serverUrl,
    {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    }
    )
    .then(res => res.json())
    .then(data => {
      displayData(data);
    })
    .catch(err => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      alertMsg.textContent = `${err}`;
      alertMsg.style.animationName = 'show-res-msg'
      hideMsg(alertMsg);
    })
}

const validateForm = (formData) => {
  const { name, address, gender, nationality, state, occupation, certificate, number, email, terms } = formData;
  const alertMsg = document.getElementById('response-msg');

  if(!name || name.length < 3) {

    alertMsg.textContent = 'Please provide a valid name';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({ top: 0, behavior: 'smooth' })
    hideMsg(alertMsg);

  } else if(!address || address.length < 4) {

    alertMsg.textContent = 'Please provide a valid resident address';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!gender) {

    alertMsg.textContent = 'Please specify your gender';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!nationality) {

    alertMsg.textContent = 'Please specify your country';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!state) {

    alertMsg.textContent = 'Please specify your state of origin';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!occupation) {

    alertMsg.textContent = 'Please specify your occupation';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!certificate) {

    alertMsg.textContent = "Please select the certificate you're applying for";
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!number || isNaN(number)) {

    alertMsg.textContent = 'Please provide a valid phone numbere';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!email || !email.includes('@gmail.com')) {

    alertMsg.textContent = 'Please provide a valid email address';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!terms) {

    alertMsg.textContent = 'Please make sure to agree to our terms and conditions';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });    
    submitForm(alertMsg, formData);
  }
}

// adding an onsubmit event listener to the form
form.addEventListener('submit', (e) => {
  // preventing the default form submission method
  e.preventDefault();

  // accessing all our form fields
  let name = document.getElementById('name');
  let address = document.getElementById('address');
  let gender = document.getElementById('gender');
  let nationality = document.getElementById('nationality');
  let state = document.getElementById('state');
  let occupation = document.getElementById('occupation');
  let certificate = document.getElementById('certificate');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let termncond = document.getElementById('tnc');

  // intailizing an object to hold all our form data
  const data = {
    name: name.value,
    address: address.value,
    gender: gender.value,
    nationality: nationality.value,
    state: state.value,
    occupation: occupation.value,
    certificate: certificate.value,
    number: phone.value,
    email:email.value,
    terms: termncond.checked
  };

  validateForm(data);
})