let history = document.getElementById("historyList");

function getValueByID(id) {
  return parseFloat(document.getElementById(id).value);
}

function historyCreateFunction(balance, text) {
  let historyItem = document.createElement("div");
  historyItem.classList.add("px-4", "py-4", "rounded-xl", "border", "mb-4");
  historyItem.innerHTML = `
        <h1 class="text-xl font-bold mb-2 ">${balance}  ${text} </h1>
        <span>Time: ${new Date()}</span>  
       
`;
  history.appendChild(historyItem);
}
