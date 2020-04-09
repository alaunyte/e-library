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

const table = document.querySelector("tbody");

firebase.firestore().collection("books").get().then((snapshot) => 
	snapshot.docs.forEach((doc) => {
		addBook(doc.data());
	})
);

function addBook(book) {
	const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = book.title;

    const td2 = tr.insertCell();
    td2.textContent = book.author;
}
	