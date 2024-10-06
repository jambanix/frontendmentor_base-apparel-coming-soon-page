"use strict";

const emailInput = document.querySelector("#email");
const emailSubmit = document.querySelector("#btn-submit");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");


// regex from https://dev.to/dailydevtips1/vanilla-javascript-email-validation-21b3

const validateEmail = (str) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return str.match(regex) ? true : false;
}

const success = () => {
    alert("Success");
    emailInput.value = "";
}

const setError = (bool) => {
    if (!bool) {
        errorMsg.classList.add("hide");
        errorIcon.classList.add("hide");
        emailInput.classList.remove("error");
    }
    else {
        errorMsg.classList.remove("hide");
        errorIcon.classList.remove("hide");
        emailInput.classList.add("error");
    }
}

const submit = () => {
    if (emailInput.value) {
        if (!validateEmail(emailInput.value)) {
            setError(true);
        }
        else {
            setError(false);
            success();
        }
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        submit();
    }
})

emailSubmit.addEventListener("click", () => {
    submit();
});

emailInput.addEventListener("keydown", () => {
    setError(false);
});