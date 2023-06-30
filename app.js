import { fruits } from "./db.js";
import { debounce } from "./utility.js";

const searchInput = document.querySelector(".input");
const fruitsList = document.querySelector(".list");

const autocomplete = ((items, list) => {
  let _filteredList = [];

  const searchFruits = (input) => items.filter((item) => item.includes(input));

  const updateDom = () => {
    list.replaceChildren();
    _filteredList.forEach((fruit) => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      list.appendChild(listItem);
    });
  };

  const handleChange = (e) => {
    _filteredList = searchFruits(e.target.value);
    updateDom();
  };

  return {
    handleChange,
  };
})(fruits, fruitsList);

searchInput.addEventListener("input", debounce(autocomplete.handleChange, 500));
