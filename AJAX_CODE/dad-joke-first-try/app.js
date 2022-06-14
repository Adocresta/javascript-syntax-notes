const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    console.log(res.data.joke);
    return res.data.joke;
  } catch (e) {
    console.log("error:", e);
  }
};

const btn = document.querySelector("#btn");
console.log(btn);
const container = document.querySelector(".container");
const numberInput = document.querySelector("#number-input");

btn.addEventListener("click", async () => {
  const joke = await getDadJoke();
  const newP = document.createElement("p");
  newP.innerText = joke;
  container.append(newP);
});
