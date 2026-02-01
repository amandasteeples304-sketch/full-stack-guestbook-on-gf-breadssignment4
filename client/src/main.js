const display = document.getElementById("app");
const form = document.getElementById("gfbread");
const baseURL = "https://client-f4df.onrender.com";

async function fetchData() {
  const response = await fetch(`${baseURL}/gfbread`);
  const gfbread = await response.json();

  console.log(gfbread);

  return gfbread;
}

async function displaygfbread() {
  const gfbread = await fetchData();
  console.log("displaygfbread");
  gfbread.forEach((message) => {
    const div = document.createElement("div");
    const userName = document.createElement("p");
    const breadBrand = document.createElement("p");
    const breadOpinion = document.createElement("p");

    userName.textContent = message.name;
    breadBrand.textContent = message.bread_brand;
    breadOpinion.textContent = message.opinion;
    div.append(userName, breadBrand, breadOpinion);
    display.appendChild(div);
  });
}
displaygfbread();

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const userInput = Object.fromEntries(formData);
  const userInputJSON = JSON.stringify(userInput);

  const response = await fetch(`${baseURL}/gfbread`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: userInputJSON,
  });
  window.location.reload();
}

form.addEventListener("submit", handleSubmit);
