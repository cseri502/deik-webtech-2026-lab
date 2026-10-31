const form = document.querySelector("#shoppingForm");
const input = document.querySelector("#productInput");
const list = document.querySelector("#shoppingList");
const counter = document.querySelector("#counter");

let products = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    return;
  }

  if (products.findIndex((p) => p.name === name) !== -1) {
    return alert(`Már van ${name} elem a listán!`);
  }

  products.push({
    name: name,
    done: false,
  });

  input.value = "";

  render();
});

function render() {
  list.innerHTML = "";

  products.forEach(function (product, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = product.name;

    if (product.done) {
      span.classList.add("done");
    }

    const doneButton = document.createElement("button");
    doneButton.textContent = product.done ? "Visszaállít" : "Kész";

    doneButton.addEventListener("click", function () {
      product.done = !product.done;
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Törlés";

    deleteButton.addEventListener("click", function () {
      products.splice(index, 1);
      render();
    });

    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    list.appendChild(li);
  });

  const remaining = products.filter(function (product) {
    return !product.done;
  }).length;

  counter.textContent = remaining;
}
