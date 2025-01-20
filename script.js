window.addEventListener("DOMContentLoaded", function () {
  getFormValue();
});
var mainArray = [];
var totalPrice = 0;

const getFormValue = () => {
  let description = document.querySelector("#description");
  let amount = document.querySelector("#number");
  let dateVal = document.querySelector("input[type='date']");
  let subBtn = document.querySelector("#subBtn");
  let formElem = document.querySelector("form");
  let selected = document.querySelector("#cate");
  let descriptionVal = "No description"
  let amountVal = 0;
  description.addEventListener("change", (e) => {
    descriptionVal = String(e.target.value);
  });
  amount.addEventListener("change", (e) => {
    amountVal = Number(e.target.value);
  });
  subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dynamicObject(descriptionVal, amountVal, selected.options[selected.selectedIndex].textContent, dateVal.value);
    displayALL();
    deleteMethod()
    formElem.reset();
  });
  const dynamicObject = (description, amount, category, date) => {
    mainArray.push({
      expense_description: description,
      expense_amount: amount,
      select_reason: category,
      expense_date: date
    })
  };
};

const displayALL = () => {
  let clutter = "";
  let table = document.querySelector("#tableBody");
  for (let i = 0; i < mainArray.length; i++) {
    clutter += `<tr class="">
                                <td class="border px-4 py-2 text-xl text-zinc-400">${mainArray[i].expense_date}</td>
                                <td class="border px-4 py-2 text-xl text-zinc-400">${mainArray[i].expense_description}</td>
                                <td class="border px-4 py-2 text-xl text-zinc-400">${mainArray[i].select_reason}</td>
                                <td class="border px-4 py-2 text-xl text-zinc-400">${mainArray[i].expense_amount}</td>
                                <td class="border py-2 text-center">
                                    <button class="deleteBtn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
                                </td>
                            </tr>`;
  }
  table.innerHTML = clutter;
};

const deleteMethod = ()=>{
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      alert("Delete");
    })
  })
}