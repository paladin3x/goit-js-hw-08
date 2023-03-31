import throttle from "lodash.throttle";

const refForm = document.querySelector(".feedback-form");
const refTextArea = document.querySelector("textarea");
const refEmailInput = document.querySelector("input");

populateMessegOutPut();

const KEYOBJECT_DATA = "feedback-data";

refForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) { 
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-msg");
    localStorage.removeItem("feedback-email");
};


refTextArea.addEventListener("input", throttle(onTextAreaInput,500));
function onTextAreaInput(evt) {
    const messageText = evt.target.value;
    localStorage.setItem("feedback-msg", messageText);
};


refEmailInput.addEventListener("input", throttle(onEmailInput,500));
function onEmailInput(evt) {
    const emailValue = evt.target.value;
    localStorage.setItem('feedback-email' , emailValue)
}


function populateMessegOutPut() {
    const saveEmail = localStorage.getItem("feedback-email")
    if (saveEmail) {
        refEmailInput.value = saveEmail;
    }
    const savedMsg = localStorage.getItem("feedback-msg")
    if (savedMsg) {
        refTextArea.value = savedMsg;
    }
}

