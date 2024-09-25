document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

document.getElementById("Donate").addEventListener("click", () => {
  let nohakhaliInput = document.getElementById("inputNohakhali").value;

  const nohakhaliCardTaka = parseFloat(
    document.getElementById("cardAmountNohakhali").innerText
  );

  let accountBalance = parseFloat(
    document.getElementById("accountBalance").innerText
  );

  if (isNaN(nohakhaliInput) || nohakhaliInput <= 0) {
    alert("Invalid Donation");
    document.getElementById("inputNohakhali").value = "";
    return;
  } else if (nohakhaliInput > accountBalance) {
    alert("Insufficient balance");
    document.getElementById("inputNohakhali").value = "";
    return;
  } else {
    let nohakhaliInputt = getValueByID("inputNohakhali");

    const result = nohakhaliInputt + nohakhaliCardTaka;

    document.getElementById("cardAmountNohakhali").innerText = result;
    document.getElementById("inputNohakhali").value = "";

    document.getElementById("accountBalance").innerText =
      accountBalance - nohakhaliInputt;
    document.getElementById("my_modal_5").showModal();

    historyCreateFunction(
      nohakhaliInputt,
      "Taka is Donated for famine-2024 at Nohakhali, Bangladesh"
    );
  }
});

// feni
document.getElementById("feniDonateBtn").addEventListener("click", () => {
  let feniInput = document.getElementById("inputFeni").value;

  const feniCardTaka = parseFloat(
    document.getElementById("cardAmountFeni").innerText
  );

  let accountBalance = parseFloat(
    document.getElementById("accountBalance").innerText
  );

  if (isNaN(feniInput) || feniInput <= 0) {
    alert("Invalid Donation");
    document.getElementById("inputFeni").value = "";
    return;
  } else if (feniInput > accountBalance) {
    alert("Insufficient balance");
    document.getElementById("inputFeni").value = "";
    return;
  } else {
    let feniInputt = getValueByID("inputFeni");

    const result = feniInputt + feniCardTaka;

    document.getElementById("cardAmountFeni").innerText = result;
    document.getElementById("inputFeni").value = "";

    document.getElementById("accountBalance").innerText =
      accountBalance - feniInputt;
    document.getElementById("my_modal_5").showModal();

    historyCreateFunction(
      feniInputt,
      "Taka is Donated for famine-2024 at Feni, Bangladesh"
    );
  }
});

// quota movement
document.getElementById("QuotaDonate").addEventListener("click", () => {
  let quotaInput = document.getElementById("inputQuota").value;

  const quotaCardTaka = parseFloat(
    document.getElementById("cardAmountQuota").innerText
  );

  let accountBalance = parseFloat(
    document.getElementById("accountBalance").innerText
  );

  if (isNaN(quotaInput) || quotaInput <= 0) {
    alert("Invalid Donation");
    document.getElementById("inputQuota").value = "";
    return;
  } else if (quotaInput > accountBalance) {
    alert("Insufficient balance");
    document.getElementById("inputQuota").value = "";
    return;
  } else {
    let quotaInputt = getValueByID("inputQuota");

    const result = quotaInputt + quotaCardTaka;

    document.getElementById("cardAmountQuota").innerText = result;
    document.getElementById("inputQuota").value = "";

    document.getElementById("accountBalance").innerText =
      accountBalance - quotaInputt;
    document.getElementById("my_modal_5").showModal();

    historyCreateFunction(
      quotaInputt,
      "Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh"
    );
  }
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
  document.getElementById("footer").classList.add("hidden");
});

donateBtn.addEventListener("click", () => {
  historyBtn.classList.remove("bg-lime-300");
  donateBtn.classList.remove("bg-gray-300");
  donateBtn.classList.add("bg-lime-300");
  document.getElementById("cardComponent").classList.remove("hidden");
  document.getElementById("historyList").classList.add("hidden");
  document.getElementById("footer").classList.remove("hidden");
});
