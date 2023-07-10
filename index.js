const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

const customAlert = document.getElementById("custom-alert");
  const customAlertMessage = document.getElementById("custom-alert-message");
  const customAlertButton = document.getElementById("custom-alert-button");




form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const sum = Number(number1.value) + Number(number2.value);
    result.innerText = `Resultado: ${sum}`;
    
    if (sum === 1997) {
        result.innerText += ' 🤘';
        showAlert("¡Felicitaciones! La solución converge al misterio del año 1997.")
    }
})


function showAlert(message) {
 
    customAlertMessage.textContent = message;
  
    customAlert.style.display = "flex";
  
    customAlertButton.addEventListener("click", hideAlert);
  }
  
  function hideAlert() {
    customAlert.style.display = "none";
  }
