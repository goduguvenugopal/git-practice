const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const text = document.getElementById("text");
  const nameFromPrompt = prompt("Enter your name");
  text.textContent = nameFromPrompt;
  text.style.color = "green"
});


