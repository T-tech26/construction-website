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
  document.getElementById('info-dob').textContent = data.DOB;
  document.getElementById('info-nationality').textContent = data.nationality;
  document.getElementById('info-state').textContent = data.state;
  document.getElementById('info-number').textContent = data.number;
  document.getElementById('info-email').textContent = data.email;
  document.getElementById('info-certificate').src = data.certificate;
  document.getElementById('info-resume').src = data.CV;

  dataContent.style.animationName = 'displayInfo';
  messageParent.style.display = 'block';
  messageParent.style.animationName = 'showInfo';
}

const submitForm = (alertMsg, data) => {
  const serverUrl = '/job.application.page';
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
  const { name, address, gender, DOB, nationality, state, number, email, certificate, CV, terms } = formData;
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

  } else if(!DOB) {

    alertMsg.textContent = 'Please specify your date of birth';
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

  } else if(!certificate) {

    alertMsg.textContent = 'Please upload your certificate of competency';
    alertMsg.style.animationName = 'show-res-msg';
    window.scrollTo({top: 0, behavior: 'smooth'})
    hideMsg(alertMsg);

  } else if(!CV) {

    alertMsg.textContent = 'Please upload your resume';
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
    const data = { 
      ...formData, 
      certificate: URL.createObjectURL(certificate), 
      CV: URL.createObjectURL(CV) 
    };
    
    submitForm(alertMsg, data);
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
  let DOB = document.getElementById('DOB');
  let nationality = document.getElementById('nationality');
  let state = document.getElementById('state');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let certificate = document.getElementById('certificate');
  let resume = document.getElementById('resume');
  let termncond = document.getElementById('termncond');

  // intailizing an object to hold all our form data
  const jobAppForm = {
    name: name.value,
    address: address.value,
    gender: gender.value,
    DOB: DOB.value,
    nationality: nationality.value,
    state: state.value,
    number: phone.value,
    email:email.value,
    certificate: certificate.files[0],
    CV: resume.files[0],
    terms: termncond.checked
  };

  validateForm(jobAppForm);
})