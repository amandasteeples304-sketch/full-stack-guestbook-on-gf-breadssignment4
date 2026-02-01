const display = document.getElementById("app");
const form = document.getElementById("gfbread");
const baseURL =
  "https://postgres.kpiblvkkfqjgajsybyaw.supabase.co:6543/postgres";

async function fetchData() {
  const response = await fetch(`${baseURL}/gfbread`);
  const gfbread = await response.json();

  console.log(gfbread);

  return gfbread;
}

async function displaygfbread() {
  const gfbread = await fetchData();
  console.log("displaygfbread");
  gfbread.forEach(function (message) {
    const gfbreadContainer = document.createElement("div");
    gfbreadContainer.className.add = "gfbread-entry";

    const userName = document.createElement("p");
    userName.textContent = message.name;

    const breadBrand = document.createElement("p");
    breadBrand.textContent = message.bread_brand;

    const breadOpinion = document.createElement("p");
    breadOpinion.textContent = message.opinion;

    const likeButton = document.createElement("button");
    likeButton.addEventListener("click", function () {
      alert("You liked this entry!");
      likeButton.textContent = "Like";
      likeButton.innerText = "Like";
    });

    div.append(userName, breadBrand, breadOpinion, likeButton);
    gfbreadContainer.append(userName, breadBrand, breadOpinion, likeButton);

    display.append(gfbreadContainer);
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
