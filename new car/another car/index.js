const playFunc = () => {
  var logAni = document.getElementById("log-ani");
  logAni.classList.add("log-play");
};
const regFunc = () => {
  var regAni = document.getElementById("reg-ani");
  regAni.classList.add("log-play");
};

const errPop = () => {
  var errAni = document.getElementById("support-pop");
  errAni.classList.add("support-pop-open");
};
const errPopClose = () => {
  var errAni = document.getElementById("support-pop");
  errAni.classList.remove("support-pop-open");
};

var txtIn = document.getElementById("txt-in").value;
var txtPass = document.getElementById("txt-pass").value;
const loginAlert = () => {
  if (txtIn == null || txtIn == "" || txtPass == null || txtPass == "") {
    alert("cant be empty");
  }
};
