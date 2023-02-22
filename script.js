let card = document.querySelectorAll(".card");
let next = document.querySelector(".next");
let paragraph = document.querySelectorAll(".card .card_header p");
paragraph = Array.from(paragraph);
card = Array.from(card);
let i = 0;
next.addEventListener("click", () => {
  for (i = 0; i < card.length; i++) {
    if (card[i].classList.contains("active")) {
      card[i].classList.remove("active");

      if (i < card.length - 1) {
        i += 1;
        card[i].classList.add("active");
        card[i - 1].classList.add("deActive");
      } else {
        card[0].classList.add("active");
        card.map((x) => x.classList.remove("deActive"));
      }
    }
    console.log(card[i]);
    console.log(i);
  }
});
paragraph.map((x) => (x.textContent = x.textContent.slice(0, 70) + " ... "));
