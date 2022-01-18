var firebaseConfig = {
    apiKey: "AIzaSyDoZWSWhbjhtXgFkZV0UDwowhTznqcuofY",
    authDomain: "contact-form-2adbe.firebaseapp.com",
    projectId: "contact-form-2adbe",
    storageBucket: "contact-form-2adbe.appspot.com",
    messagingSenderId: "822602987737",
    appId: "1:822602987737:web:80eb035ed5572245d8a6c8",
    measurementId: "G-CXMJFX7VTX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference message collection
var messagesRef = firebase.database().ref('messages');

//listen for form submitting
document.getElementById('contactForm').addEventListener('submit',);

//Submit form
function submitform(e){
    e.preventDefault();

   //Get values
   var name =getInputVal('name');
   var email =getInputVal('email');
   var phone =getInputVal('phone');
   var message =getInputVal('message');

//save message
  saveMessage(name, email, phone, message);

//show alert 
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('alert').style.display = 'none';
},3000); 

//Clear form
document.getElementById('contactForm').reset();
}
//function to get form values
function getInputVal(id){
     return document.getElementById(id),values;
}

//save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
    });
}