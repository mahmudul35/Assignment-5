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

  console.log(totalTaka);
});

// button toggle
const historyBtn = document.getElementById("historyBlue");
const donateBtn = document.getElementById("donateBtn");
historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-lime-300");
  donateBtn.classList.remove("bg-lime-300");
  donateBtn.classList.add("bg-gray-300");
  document.getElementById("cardComponent").classList.add("hidden");
});

donateBtn.addEventListener("click", () => {
  historyBtn.classList.remove("bg-lime-300");
  donateBtn.classList.remove("bg-gray-300");
  donateBtn.classList.add("bg-lime-300");

  document.getElementById("cardComponent").classList.remove("hidden");
});

document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "./bog.html";
});
