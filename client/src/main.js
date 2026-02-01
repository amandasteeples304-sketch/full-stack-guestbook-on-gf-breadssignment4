const display = document.getElementById("app");
const form = document.getElementById("gfbread");
const baseURL = "https://client-f4df.onrender.com";

async function fetchData() {
  const response = await fetch("${baseURL}");
  const gfBreadGuest = await response.json();

  console.log(gfBreadGuest);

  return gfBreadGuest;
}

async function displaygfBreadGuest() {
  const gfBreadGuest = await fetchData();
  console.log("displaygfBreadGuest");
  gfBreadGuest.forEach((gfBreadGuest) => {
    const div = document.createElement("div");
    const userName = document.createElement("p");
    const breadBrand = document.createElement("p");
    const breadOpinion = document.createElement("p");

    userName.textContent = message.msg_name;
    breadBrand.textContent = message.bread_brand;
    breadOpinion.textContent = message.opinion;
    div.append(userName, breadBrand, breadOpinion);
    display.appendChild(div);
  });
}
displaygfBreadGuest();

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const userInput = Object.fromEntries(formData);
  const userInputJSON = JSON.stringify(userInput);

  const response = await fetch("${baseURL}", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: userInputJSON,
  });
  window.location.reload();
}

form.addEventListener("submit", handleSubmit);
