const nameInput = document.querySelector('.form__name'),
     emailInput = document.querySelector('.form__email'),
     dateInput = document.querySelector('.form__date'),
     formBtn = document.querySelector('.form__btn'),
     name = document.querySelector('.name'),
     email = document.querySelector('.email'),
     date = document.querySelector('.date'),
    form = document.querySelector('.form')


formBtn.setAttribute("disabled", "disabled")

let eml = false
let nme = false
let dte = false
let handleEmail = () => {
    let  strEmail = emailInput.value

    if (/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/.test(strEmail)){
        emailInput.classList.remove("red_border")
        email.classList.add('show')
        eml = true
    }else {
        emailInput.classList.add("red_border")
        email.classList.remove('show')

    }
}
emailInput.onkeydown = handleEmail;

let handleName = () => {
    let strName = nameInput.value
    if (/[a-zA-Z]/.test(strName) || strName.length < 3){
        nameInput.classList.add("red_border")
        name.classList.remove('show')

    }else {
        nameInput.classList.remove("red_border")
        name.classList.add('show')
        nme = true
    }
}
nameInput.onkeydown = handleName;

let handle = () =>{
    console.log('Выхов handle')
    if (/\d{5}/.test(dateInput.value) && dateInput.value.length < 6) {
        dateInput.value = dateInput.value.substring(0, 2) + '.' + dateInput.value.substring(2, 4) + '.' + dateInput.value.substring(4, 5)
        console.log(dateInput.value.length)
        dateInput.classList.remove("red_border")
        date.classList.add('show')
        dte = true
    }else if(dateInput.value.length >= 7){
        if (dateInput.value.length === 9){
            dateInput.classList.remove("red_border")
            date.classList.add('show')
            dte = true
        }
    }
    else {
        dateInput.classList.add("red_border")
        date.classList.remove('show')
    }
    // formBtn.removeAttribute("disabled")
}
dateInput.onkeydown = handle;

form.oninput = () => {
    console.log(Boolean(eml && nme && dte === true))
    if (eml && nme && dte === true) {
        console.log('asdadsadsasd')
        formBtn.removeAttribute("disabled")
    }
}
