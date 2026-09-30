const inp = document.querySelector("input");
const btn = document.querySelector(".btn");
const content = document.querySelector(".meme");

btn.addEventListener("click", () => {
  if (inp.value >= 0 && inp.value <= 99 && inp.value != "") {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let memes = data.data.memes;
        content.innerHTML = `<h2 class="text-warning mt-4">${memes[inp.value].name}</h2>
          <img src="${memes[inp.value].url}" alt="" />`;
        inp.value = "";
      });
  } else {
    content.innerHTML = `<h1 class="text-danger mt-2">Please Enter Valid Number</h1>`;
  }
});
inp.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btn.click();
  }
});
