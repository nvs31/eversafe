firebase.initializeApp({
    apiKey: "AIzaSyBLst35rteO0hJvomawd3LDJpNVm-R1sLc",
    authDomain: "emprendimiento-empr.firebaseapp.com",
    databaseURL: "https://emprendimiento-empr-default-rtdb.firebaseio.com",
    projectId: "emprendimiento-empr",
    storageBucket: "emprendimiento-empr.appspot.com",
    messagingSenderId: "235390604886",
    appId: "1:235390604886:web:8a7954230e62d988b24df7",
    measurementId: "G-42NNYGQ9T2"
})  
var db = firebase.firestore();
// TESTING
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// TESTING

function guardar(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var tema = document.getElementById('tema').value;
    var mensaje = document.getElementById('mensaje').value;
    var fecha = new Date();
    var txt = "";
    txt += "Browser CodeName: " + navigator.appCodeName;
    txt += "Browser Name: " + navigator.appName;
    txt += "Browser Version: " + navigator.appVersion;
    txt += "Cookies Enabled: " + navigator.cookieEnabled ;
    txt += "Browser Language: " + navigator.language;
    txt += "Browser Online: " + navigator.onLine ;
    txt += "Platform: " + navigator.platform ;
    txt += "User-agent header: " + navigator.userAgent ;
    if(nombre!="" && email!="" && tema != "" && mensaje != ""){
        db.collection("comentarios").add({
            Nombre : nombre,
            Email : email,
            Asunto : tema,
            Mensaje : mensaje,
            Fecha:fecha,
            infoUser : txt
        })
        .then(function(docRef){
            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("tema").value = "";
            document.getElementById("mensaje").value = "";
            //console.log("Document: ",docRef.id);
        })
        .catch(function(error){
            console.log("Error ",error);
        });
    }
}
