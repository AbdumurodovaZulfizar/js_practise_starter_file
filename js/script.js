// Bu Avval HTMlni keyin JSni o'qish uchun

window.addEventListener('DOMContentLoaded', () => {
  let products = document.querySelectorAll('.product'),
buttons = document.querySelectorAll('button'),
openBtn = document.querySelector('.open');

  function createCard() {
    let card = document.createElement("div"),
    continer = document.createElement("div"),
    heading = document.createElement('h2'),
    close = document.createElement("button");

    card.classList.add("cart");
    continer.classList.add("cart-field");
    close.classList.add("close");
    heading.textContent = `Sizning mahsulotlaringiz`;
    close.textContent = `Yopish`;
    card.appendChild(heading);
    card.appendChild(continer);
    card.appendChild(close);
    document.body.appendChild(card);
  }

  createCard()

  let card = document.querySelector('.cart'),
      closeBtn = document.querySelector(".close"),
      field = document.querySelector('.cart-field');

  openBtn.addEventListener("click", function() {
    card.style.display = 'block';
  })

  closeBtn.addEventListener("click", function() {
    card.style.display = 'none';
  })

  buttons.forEach(function(item, i) {
    item.addEventListener('click', function() {
      let cloneItem = products[i].cloneNode(true),
      btn = cloneItem.querySelector('button');

      btn.remove();
      field.appendChild(cloneItem)
      products[i].remove()

    })
  })
})
