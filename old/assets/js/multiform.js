const steps = document.querySelectorAll('.step')
let currentStep = 0

$(".select").select2({
    placeholder: "Select a state",
    allowClear: true
});

document.addEventListener('DOMContentLoaded', () => {
    showStep(0);
});

function nextStep() {
    // if (currentStep < steps.length - 1) {
    //     currentStep++;
    //     showStep(currentStep);
    // }
    const email = $("#email").val()
    const password = $("#password").val()
    const prenom = $("#prenom").val()
    const nom = $("#nom").val()
    const phone = $("#phone").val()
    const country = $("#country").val()
    const adresse = $("#adresse").val()
    const societe = $("#societe").val()
    const fonction = $("#fonction").val()
    if (currentStep < steps.length - 1) {
        if(currentStep == 0 && email && password){
            currentStep = 1;
            showStep(currentStep);
        }
        else if(currentStep == 1 && prenom && nom && fonction && societe){
            currentStep = 2;
            showStep(currentStep);
        }
        else if(currentStep == 2 && phone && country && adresse){
            currentStep = 3;
            showStep(currentStep);
        }else{
            alert("Veuillez rensigner tous les champs.")
        }
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

const subscription__designation = localStorage.getItem("subscription__designation")
const subscription_type__designation = localStorage.getItem("subscription_type__designation")
const period = localStorage.getItem("period")
const montant = localStorage.getItem("montant")

let subscription__designation__capitalize = ""
subscription__designation.split(" ").forEach((element) => {
    element.split('').forEach((el, index) => {
        if(index == 0){
            subscription__designation__capitalize += el.toUpperCase()
        }else{
            subscription__designation__capitalize += el.toLowerCase()
        }
    })
    subscription__designation__capitalize += " "
})

document.querySelector("#subscription__designation").innerHTML = subscription__designation__capitalize
document.querySelector("#subscription_type__designation").innerHTML = subscription_type__designation

function showStep(step) {
    steps.forEach((element, index) => {
        if (index === step) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
