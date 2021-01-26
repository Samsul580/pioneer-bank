// login button event handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("current-deposit", depositNumber)
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = "";
})
// withdraw button handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    updateSpanText("current-withdraw", withdrawNumber);
    document.getElementById("withdraw-amount").value = "";
})
// span text handler
function updateSpanText(id, depositNumber) {
    const Balance = document.getElementById(id).innerText;
    const BalanceNumber = parseFloat(Balance);
    const totalBalanceNumber = depositNumber + BalanceNumber;
    document.getElementById(id).innerText = totalBalanceNumber;
}