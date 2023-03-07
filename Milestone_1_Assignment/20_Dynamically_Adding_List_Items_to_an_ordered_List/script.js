const itemList = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Node.js"];

const learnList = document.getElementById("learn-list");
const addBtn = document.getElementById("add-btn");
const msg = document.getElementById("msg");

let itemIndex = 0;

addBtn.addEventListener("click", () => {
  if (itemIndex < itemList.length) {
    const newItem = document.createElement("li");
    newItem.innerText = itemList[itemIndex];
    learnList.appendChild(newItem);
    itemIndex++;
  } else {
    msg.innerText = "All items have been added.";
  }
});
