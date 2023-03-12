// get the form and response table elements
const form = document.querySelector('form');
const responseTable = document.querySelector('#responseTable');

// listen for form submissions
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // create a new FormData object from the form data
  const formData = new FormData(form);
  
  // create a new table row with the form data
  const row = responseTable.insertRow(0);
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const genderCell = row.insertCell(2);
  const skillsCell = row.insertCell(3);
  const imageCell = row.insertCell(4);
  
  nameCell.innerText = formData.get('name');
  emailCell.innerText = formData.get('email');
  genderCell.innerText = formData.get('gender');
  skillsCell.innerText = formData.get('skills');
  
  // create an image element and set its src attribute to the uploaded image
  const image = document.createElement('img');
  image.src = URL.createObjectURL(formData.get('image'));
  image.width = 100;
  imageCell.appendChild(image);

  // reset the form for the next submission
  form.reset();
  });
// create a div to hold the image and set its styles
const imageWrapper = document.createElement('div');
imageWrapper.style.display = 'flex';
imageWrapper.style.flexDirection = 'column';
imageWrapper.style.alignItems = 'center';

// create an image element and set its src attribute to the uploaded image
const image = document.createElement('img');
image.src = URL.createObjectURL(formData.get('image'));
image.width = 100;

// create a label to display the image file name
const fileName = document.createElement('span');
fileName.innerText = formData.get('image').name;

// append the image and file name elements to the image wrapper
imageWrapper.appendChild(image);
imageWrapper.appendChild(fileName);

// append the image wrapper to the image cell
imageCell.appendChild(imageWrapper);