let history = document.getElementById("historyList");

function getValueByID(id) {
  return parseFloat(document.getElementById(id).value);
}

function historyCreateFunction(balance, text) {
  let historyItem = document.createElement("div");
  historyItem.classList.add("px-4", "py-4", "rounded-xl", "border", "mb-4");
  historyItem.innerHTML = `
        <span>${new Date().toLocaleDateString()}</span>  <span>${new Date().toLocaleTimeString()}</span>
        <h1>${balance}  ${text} </h1>
`;
  history.appendChild(historyItem);
}
