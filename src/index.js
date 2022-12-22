const dogDiv = document.querySelector("#dog-bar");
const dogStatus = document.getElementById('dog-status');
const dogAPI = 'http://localhost:3000/pups';

fetch(dogAPI)
    .then(resp => resp.json())
    .then(displayDogInfo)
    .catch(console.err);


function displayDogInfo(dogArray) {
    dogArray.forEach(addDogToPage)
}

function addDogToPage(dog) {
    const dogDiv = document.querySelector('#dog-bar');

    let span = document.createElement('span')
    span.innerText = `${dog.name}`
    span.id = 'dog-span'

    span.addEventListener('click', () => {
        displayDogDetails(dog)
    })

    dogDiv.append(span)
}

function displayDogDetails(details){
    const dogInfo = document.querySelector('#dog-info');

    let img = document.createElement('img')
    img.src = details.image
    let h2 = document.createElement('h2')
    h2.textContent = details.name
    let button = document.createElement('button')
    button.id = 'dog-status'
    button.textContent = 'Good dog!'

    dogInfo.append(img, h2, button)

    button.addEventListener('click', dogStatusChange)
}


function dogStatusChange(e){
    e.preventDefault();
    let goodStatus = e.target.textContent;
    let badStatus = e.target.textContent = 'Bad dog!'
    if (goodStatus) {
        badStatus
    } else if (badStatus) {
        goodStatus
    }
  
}
