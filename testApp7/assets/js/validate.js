


const quoteForm = document.getElementById("search-form");
const contactForm = document.getElementById("contact");
const footerForm = document.getElementById("footerForm");


const objPatts = {
    name: /^[A-Za-zԱ-Ֆա-ֆ]+$/,
    surname: /^[A-Za-zԱ-Ֆա-ֆ]+$/,
    subject: /^[A-Za-zԱ-Ֆա-ֆ]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    phone: /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    note: /^(?=.*[A-Za-zԱ-Ֆա-ֆ])(?:[A-Za-zԱ-Ֆա-ֆ0-9,.'"\s!?-]{10,})$/,
    message: /^(?=.*[A-Za-zԱ-Ֆա-ֆ])(?:[A-Za-zԱ-Ֆա-ֆ0-9,.'"\s!?-]{10,})$/,
    date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    search: /^[a-zA-Z0-9\s]+$/
}

if (quoteForm != null) {
    const inpes = document.querySelectorAll("#search-form .form-control");
    const labels = document.querySelectorAll("#search-form .form-label");
    quoteForm.addEventListener("submit", function (evf) {
        evf.preventDefault();
        inpes.forEach((input,index) => {
            if (input.value.match(objPatts[input.name.toLowerCase()]) == null) {
                input.classList.add("invalidINput");
                input.value = "";
                input.placeholder = "Invalid " + input.name;
            } else {
                input.classList.remove("invalidINput");
            }
        })
    });
}

if (contactForm != null) {
    const inpes = document.querySelectorAll(".form-control");
    // const labels = document.querySelectorAll("#contactF label");
    contactForm.addEventListener("submit", function (evf) {
        evf.preventDefault();
        console.log(inpes)
        inpes.forEach((input,index) => {
            if (input.value.match(objPatts[input.name.toLowerCase()]) == null) {
                input.classList.add("invalidINput");
                input.value = "";
                input.placeholder = "Invalid "+input.name;
                // labels[index].innerHTML = "Invalid "+input.name;
            } else {
                input.classList.remove("invalidINput");
            }
        })
    });
}

if(footerForm != null){
    const footerInput = document.querySelector("#footerForm input");
    footerForm.addEventListener("submit", function (evf){
        evf.preventDefault();
        if(footerInput.value.match(objPatts[footerInput.name.toLowerCase()]) == null){
            footerInput.classList.add("invalidINput");
            footerInput.value = "";
            footerInput.placeholder = "Invalid "+footerInput.name;
        }
    })
}