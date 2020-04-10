// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6MfHKC_G_s3hnDadSMVnsFUhfXDteHac",
    authDomain: "page-registracija.firebaseapp.com",
    databaseURL: "https://page-registracija.firebaseio.com",
    projectId: "page-registracija",
    storageBucket: "page-registracija.appspot.com",
    messagingSenderId: "565999335957",
    appId: "1:565999335957:web:f009cbde37fe715cefec1c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const randNum1 = Math.floor(Math.random() * 20 + 1);
const randNum2 = Math.floor(Math.random() * 20 + 1);

const capchaLabel = document.querySelector("label[for=capcha]");
capchaLabel.textContent += ` ${randNum1} + ${randNum2}`;
const capchaInput = document.getElementById("capcha");
capchaInput.placeholder = ` ${randNum1} + ${randNum2} = `;

const notification = document.querySelector("div.notification");

document.forms.addBook.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const capcha = Number(e.target.elements.capcha.value);

    

     if(capcha === randNum1 + randNum2) {
		firebase.firestore().collection("books").add({title: title, author: author})
		.then(() => {
	        notification.classList.replace("nodisplay", "display");
	        notification.classList.add("green");
	        notification.textContent = "Jūs sėkmingai padovanojote knygą!";
	        notification.addEventListener("click", () => {
	        notification.classList.replace("display", "nodisplay");
	    	});
	    })
    } else {
    	showError();
    }
    
})

function showError() {
	notification.classList.replace("nodisplay", "display");
	notification.classList.add("red");
	notification.textContent = "Patikrinkite duomenis ir bandykite dar kartą";
	notification.addEventListener("click", () => {
	notification.classList.replace("display", "nodisplay");
	});
}