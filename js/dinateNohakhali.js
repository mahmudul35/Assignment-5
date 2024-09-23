document.getElementById("Donate").addEventListener("click", () => {
  const accountBalance = parseFloat(
    document.getElementById("accountBalance").innerText
  );
  const money = parseFloat(document.getElementById("donateNohakhali").value);
  const totalTaka = parseFloat(document.getElementById("totalTaka").innerText);
  const result = money + totalTaka;
  const account = accountBalance - money;
  document.getElementById("totalTaka").innerText = result;
  document.getElementById("accountBalance").innerText = account;
  document.getElementById("donateNohakhali").value = "";

  const history = document.getElementById("historyList");

  const historyItem = document.createElement("div");
  historyItem.classList.add("px-4", "py-4", "rounded-xl", "border", "mb-4");
  historyItem.innerHTML = `
  <span>${new Date().toLocaleDateString()}</span>  <span>${new Date().toLocaleTimeString()}</span>
  <h1>${money}  taka donate for nahakhali </h1>
`;
  history.appendChild(historyItem);
});

// button toggle
const historyBtn = document.getElementById("historyBlue");
const donateBtn = document.getElementById("donateBtn");
historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-lime-300");
  donateBtn.classList.remove("bg-lime-300");
  donateBtn.classList.add("bg-gray-300");
  document.getElementById("cardComponent").classList.add("hidden");
  document.getElementById("historyList").classList.remove("hidden");
});

donateBtn.addEventListener("click", () => {
  historyBtn.classList.remove("bg-lime-300");
  donateBtn.classList.remove("bg-gray-300");
  donateBtn.classList.add("bg-lime-300");

  document.getElementById("cardComponent").classList.remove("hidden");
  document.getElementById("historyList").classList.add("hidden");
});

document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "././blog.html";
});
