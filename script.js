let itemList = document.getElementById("itemList");

function addItem() {
    let inputItem = document.getElementById("inputItem");
    let itemValue = inputItem.value;

    if (itemValue === "") {
        alert("Bitte einen Artikel eingeben!");
    } else {
        let li = document.createElement("li");
        let itemText = document.createTextNode(itemValue);

        li.appendChild(itemText);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            li.classList.toggle("checked");
        };

        li.appendChild(checkbox);

        let deleteButton = document.createElement("button");
        let deleteText = document.createTextNode("Löschen");
        deleteButton.appendChild(deleteText);

        deleteButton.onclick = function() {
            itemList.removeChild(li);
        };

        li.appendChild(deleteButton);

        itemList.appendChild(li);
        inputItem.value = "";
    }
}
