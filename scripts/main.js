const myHeadin = document.querySelector("h3");
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/drink up.gif") {
    myImage.setAttribute("src", "images/don't do that again.jpg");
    myHeadin.textContent = "what the fuck.";
  } else {}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h5");

function setUserName() {
  const myName = prompt("WHO ARE YOU?!");
  localStorage.setItem("name", myName);
  myHeading.textContent = `enjoying yourself, ${storedName}? You sick freak.`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `enjoying yourself, ${storedName}? You sick freak.`;
}

myButton.onclick = () => {
  setUserName();
};


