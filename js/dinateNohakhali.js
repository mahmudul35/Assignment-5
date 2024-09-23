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
  alert(result + " added");
  console.log(totalTaka);
});

document.getElementById("historyBtn").addEventListener("click"function()=>{
    document.getElementById("historyBtn").classList.add("bgGray")
    
})