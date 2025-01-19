window.addEventListener("DOMContentLoaded", function () {
    getFormValue()
})
let mainArray = new Array();
const getFormValue = () => {
    let description = document.querySelector("#description")
    let amount = document.querySelector("#number")
    let dateVal = document.querySelector("input[type='date']")
    let subBtn = document.querySelector("#subBtn")
    let formElem = document.querySelector("form")
    let selected = document.querySelector("#cate")
    description.addEventListener("change", (e) => {
        description = String(e.target.value)
    })
    amount.addEventListener("change", (e) => {
        amount = Number(e.target.value)
    })
    // subBtn.addEventListener("click", (e) => {
    //     // selected = selected.options[selected.selectedIndex].text
    //     // formElem.addEventListener("submit", (e) => {
    //     //     let storeVal = new Array
    //     //     storeVal.push(description)
    //     //     storeVal.push(number)
    //     //     storeVal.push(dateVal)
    //     //     storeVal.push(selected)
    //     //     e.preventDefault()
    //     // })
    // })
    subBtn.addEventListener("click", (e) => {
        e.preventDefault()
        dateVal = dateVal.value
        selected = selected.options[selected.selectedIndex].text
        mainArray.push(new Object)
        mainArray[mainArray.length - 1].description = description
        mainArray[mainArray.length - 1].amount = amount
        mainArray[mainArray.length - 1].select = selected
        mainArray[mainArray.length - 1].date = dateVal
        console.log(mainArray)
    })
}
