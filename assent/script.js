const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaaaa, Eu te amo!";
    gif.src =
    "abraco.gif";
 
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "Ta me tirando? NÃO TEM ESSA OPÇÃO.";
    gif.src =
    "brava.gif";
 
});