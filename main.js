// const nameInput = document.querySelector('.form__name'),
//       emailInput = document.querySelector('.form__email'),
//       dateInput = document.querySelector('.form__date'),
//       formBtn = document.querySelector('.form__btn')
//
// //kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle; запуск главное функции цепочкой
// formBtn.setAttribute("disabled", "disabled")
// // formBtn.addEventListener('click', (e) => {
// //     e.preventDefault()
// //     formBtn.removeAttribute("disabled")
// // })
//
// let handleEmail = () => {
//     let  strEmail = emailInput.value
//
//     if (/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/.test(strEmail)){
//         emailInput.classList.remove("red_border")
//     }else {
//         emailInput.classList.add("red_border")
//     }
// }
// emailInput.onkeydown = handleEmail;
//
// let handleName = () => {
//     let strName = nameInput.value
//     if (/[a-zA-Z]/.test(strName) || strName.length < 3){
//         nameInput.classList.add("red_border")
//     }else {
//         nameInput.classList.remove("red_border")
//     }
// }
// nameInput.onkeydown = handleName;
//
// let handle = () =>{
//     console.log('Выхов handle')
//     if (/\d{5}/.test(dateInput.value) && dateInput.value.length < 6) {
//         dateInput.value = dateInput.value.substring(0, 2) + '.' + dateInput.value.substring(2, 4) + '.' + dateInput.value.substring(4, 5)
//         console.log(dateInput.value.length)
//         dateInput.classList.remove("red_border")
//     }else if(dateInput.value.length >=7){
//         if (dateInput.value.length === 9){
//             dateInput.classList.remove("red_border")
//         }
//     }
//     // }else if (/\d{0,2}\.\d{2,4}\.\d{4,6}/.test(dateInput.value)){
//     //     console.log('Else if')
//     //     console.log('ya lpg',dateInput.value)
//     //     dateInput.value = dateInput.value.substring(0,2) + '.' + dateInput.value.substring(2,4) + '.' + dateInput.value.substring(6,8)
//     //     dateInput.classList.remove("red_border")
//     // }
//     else {
//         dateInput.classList.add("red_border")
//     }
//
// }
// dateInput.onkeydown = handle;
//
// // function validate(){
// //
// // }
//
//
//
// //https://learn.javascript.ru/events-change
//
// //|| strDate.length === 6 || strDate.length === 8
//
// ///[а-яА-ЯїЇєЄіІёЁ]/


// if ((/[a-zA-Z]/.test(nameInput.value) || nameInput.value.length < 3) && (/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/.test(emailInput.value)) && (/\d{5}/.test(dateInput.value) && dateInput.value.length < 6)){
//     formBtn.removeAttribute("disabled")
// }
// if (nameInput.classList.contains('red_border') && emailInput.classList.contains('red_border') && dateInput.classList.contains('red_border')){
//     console.log('asdadsadsasd')
//     formBtn.removeAttribute("disabled")
// }
