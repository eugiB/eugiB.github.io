var IceAge2019;
(function (IceAge2019) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("add-category").addEventListener("click", addCategoryClick);
        const removeCategoryButtons = document.getElementsByClassName("remove-category");
        const addItemButtons = document.getElementsByClassName("add-item");
        const removeItemButtons = document.getElementsByClassName("remove-item");
        for (let i = 0; i < removeCategoryButtons.length; i++) {
            removeCategoryButtons[i].addEventListener("click", removeCategoryAtClick);
        }
        for (let i = 0; i < addItemButtons.length; i++) {
            addItemButtons[i].addEventListener("click", addItemAtClick);
        }
        for (let i = 0; i < removeItemButtons.length; i++) {
            removeItemButtons[i].addEventListener("click", removeItemAtClick);
        }
        document.getElementById("save-button").addEventListener("click", sendData);
        getDataFromServer();
    });
    function getDataFromServer() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", IceAge2019.address + "?getData0", true);
        xhr.addEventListener("readystatechange", handleStateChangeGetData);
        xhr.send();
    }
    function handleStateChangeGetData(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response = xhr.response;
            let responseJSON = JSON.parse(response);
            let dataJSON;
            for (let key in responseJSON) {
                let datastring = decodeURI(responseJSON[key].datastring);
                dataJSON = JSON.parse(datastring);
            }
            let configData = [];
            for (let i in dataJSON) {
                configData[parseInt(i)] = {
                    title: dataJSON[i]["title"],
                    type: dataJSON[i]["type"],
                    items: [{ name: null, stock: null, price: null }, { name: null, stock: null, price: null }]
                };
                for (let k = 0; k < dataJSON[i]["items"].length; k++) {
                    configData[parseInt(i)]["items"][k] = {
                        name: dataJSON[i]["items"][k]["name"],
                        stock: dataJSON[i]["items"][k]["stock"],
                        price: dataJSON[i]["items"][k]["price"]
                    };
                }
            }
            buildStructure(configData);
        }
    }
    function addCategoryClick() {
        addCategory("", "");
    }
    function addCategory(_categoryName, _categoryType) {
        const categoryOptions = ["Wählen sie aus", "Radio", "Checkbox"];
        const divAllCategories = document.getElementsByClassName("categories-wrapper")[0];
        const divAddButton = document.getElementById("add-category");
        const divCategory = IceAge2019.newElement("div", "category mb-5 border-bottom pb-2", divAllCategories);
        const divCategoryRow = IceAge2019.newElement("div", "category-row row py-2 mb-3", divCategory);
        const divRowCol = IceAge2019.newElement("div", "col-12 col-sm-9 mb-2 mb-sm-0", divCategoryRow);
        const divInputGroup = IceAge2019.newElement("div", "input-group input-group-sm", divRowCol);
        const inputCategoryName = IceAge2019.newElement("input", "form-control", divInputGroup);
        inputCategoryName.setAttribute("type", "text");
        inputCategoryName.setAttribute("placeholder", "Name");
        if (_categoryName != "")
            inputCategoryName.value = _categoryName;
        const selectCategoryType = IceAge2019.newElement("select", "custom-select", divInputGroup);
        for (let i = 0; i < categoryOptions.length; i++) {
            const option = IceAge2019.newElement("option", "", selectCategoryType);
            option.innerHTML = categoryOptions[i];
        }
        if (_categoryType != "")
            selectCategoryType.value = _categoryType;
        const divButtonRemoveCategory = IceAge2019.newElement("div", "col-10 col-sm-3 justify-content-end d-flex", divCategoryRow);
        const buttonRemoveCategory = IceAge2019.newElement("button", "btn btn-outline-danger w-10", divButtonRemoveCategory);
        buttonRemoveCategory.setAttribute("type", "button");
        buttonRemoveCategory.innerHTML = "Kategorie entfernen";
        buttonRemoveCategory.addEventListener("click", removeCategoryAtClick);
        const divItemWrapper = IceAge2019.newElement("div", "items-wrapper", divCategory);
        const divAddItemRow = IceAge2019.newElement("div", "add-item-row row py-1 justify-content-end", divItemWrapper);
        const divAddItemCol = IceAge2019.newElement("div", "col-sm-2 justify-content-end d-flex", divAddItemRow);
        const buttonAddItem = IceAge2019.newElement("button", "add-item btn btn-outline-success w-100", divAddItemCol);
        buttonAddItem.setAttribute("type", "button");
        buttonAddItem.innerHTML = "Sorte hinzufügen";
        buttonAddItem.addEventListener("click", addItemAtClick);
        return divCategory;
    }
    function addItemAtClick(_event) {
        const target = _event.target;
        const targetItemWrapper = target.parentElement.parentElement.parentElement;
        addItem(targetItemWrapper, "", "", "");
    }
    function addItem(_targetWrapper, _itemName, _itemStock, _itemPrice) {
        const divItemRow = IceAge2019.newElement("div", "row py-2 justify-content-start", null);
        _targetWrapper.insertBefore(divItemRow, _targetWrapper.children[(_targetWrapper.children.length - 1)]);
        const divItemRowCol = IceAge2019.newElement("div", "col-lg-0 mb-2 mb-sm-0", divItemRow);
        const divItemRowCol10 = IceAge2019.newElement("div", "col-lg-10 mb-2 mb-sm-0", divItemRow);
        const divItemInputGroup = IceAge2019.newElement("div", "input-group", divItemRowCol10);
        const inputItemName = IceAge2019.newElement("input", "form-control", divItemInputGroup);
        inputItemName.setAttribute("type", "text");
        inputItemName.setAttribute("placeholder", "Name");
        if (_itemName != "")
            inputItemName.value = _itemName;
        const inputItemStock = IceAge2019.newElement("input", "form-control", divItemInputGroup);
        inputItemStock.setAttribute("type", "text");
        inputItemStock.setAttribute("placeholder", "auf Lager");
        if (_itemName != "")
            inputItemStock.value = _itemStock;
        const inputItemPrice = IceAge2019.newElement("input", "form-control", divItemInputGroup);
        inputItemPrice.setAttribute("type", "text");
        inputItemPrice.setAttribute("placeholder", "Preis");
        if (_itemName != "")
            inputItemPrice.value = _itemPrice;
        const divSpanAppend = IceAge2019.newElement("div", "input-group-append", divItemInputGroup);
        const spanAppend = document.createElement("span");
        spanAppend.classList.add("input-group-text");
        spanAppend.innerHTML = "€";
        divSpanAppend.append(spanAppend);
        const divButtonRemoveItem = IceAge2019.newElement("div", "col-lg-2 justify-content-end d-flex", divItemRow);
        const buttonRemoveItem = IceAge2019.newElement("button", "btn btn-outline-danger w-60", divButtonRemoveItem);
        buttonRemoveItem.setAttribute("type", "button");
        buttonRemoveItem.innerHTML = "entfernen";
        buttonRemoveItem.addEventListener("click", removeItemAtClick);
    }
    function removeItemAtClick(_event) {
        const target = _event.target;
        const targetItemWrapper = target.parentElement.parentElement.parentElement;
        let allItems = targetItemWrapper.children;
        let index;
        for (let i = 0; i < allItems.length; i++) {
            if (target.parentNode.parentNode == allItems[i])
                index = i;
        }
        let elementToRemove = allItems[index];
        let nameInput = elementToRemove.children[1].children[0].children[0];
        let stockInput = elementToRemove.children[1].children[0].children[1];
        let priceInput = elementToRemove.children[1].children[0].children[3];
        let itemName = nameInput.value;
        let itemStock = stockInput.value;
        let itemPrice = priceInput.value;
        if (itemName === "" && itemStock === "" && itemPrice === undefined)
            elementToRemove.remove();
        else {
            if (itemName === "")
                itemName = "Unbenannte Sorte";
            IceAge2019.toggleModal("Artikel", itemName, elementToRemove, false);
        }
    }
    function removeCategoryAtClick(_event) {
        const target = _event.target;
        const elementToRemove = target.parentElement.parentElement.parentElement;
        let nameInput = elementToRemove.children[0].children[0].children[0].children[0];
        let categoryName = nameInput.value;
        if (categoryName === "")
            categoryName = "Unbenannte Sorte";
        IceAge2019.toggleModal("Kategorie", categoryName, elementToRemove, false);
    }
    function getForm() {
        let categoriesWrapper = document.getElementById("categories-wrapper");
        let configData = [];
        for (let i = 0; i < categoriesWrapper.children.length; i++) {
            let currentCategory = categoriesWrapper.children[i];
            let titleInput = currentCategory.children[0].children[0].children[0].children[0];
            let typeInput = currentCategory.children[0].children[0].children[0].children[1];
            let categoryTitle = titleInput.value;
            let categoryType = typeInput.value;
            configData[i] = {
                title: categoryTitle,
                type: categoryType,
                items: [
                    {
                        name: null,
                        stock: null,
                        price: null
                    }
                ]
            };
            let itemWrapper = currentCategory.children[1];
            for (let k = 0; k < itemWrapper.children.length - 1; k++) {
                let currentItem = itemWrapper.children[k];
                let nameInput = currentItem.children[1].children[0].children[0];
                let stockInput = currentItem.children[1].children[0].children[1];
                let priceInput = currentItem.children[1].children[0].children[2];
                let itemName = nameInput.value;
                let itemStock = stockInput.value;
                let itemPrice = priceInput.value;
                configData[i].items[k] = {
                    name: itemName,
                    stock: parseFloat(itemStock),
                    price: parseFloat(itemPrice)
                };
            }
        }
        return configData;
    }
    function sendData() {
        const configData = getForm();
        let xhr = new XMLHttpRequest();
        let query = convertDataToQuery(configData);
        xhr.open("GET", IceAge2019.address + "?saveData" + query, true);
        xhr.addEventListener("readystatechange", handleStateChangeSaveData);
        xhr.send();
    }
    function handleStateChangeSaveData(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let temp = xhr.response.replace(/%22/g, '"');
            temp = temp.replace(/%20/g, " ");
            temp = temp.slice(10);
            let configData = JSON.parse(temp);
        }
    }
    function convertDataToQuery(_data) {
        let query = JSON.stringify(_data);
        console.log(query);
        return query;
    }
    function buildStructure(_configData) {
        for (let i in _configData) {
            let category = addCategory(_configData[i].title, _configData[i].type);
            let itemWrapperDiv = category.getElementsByClassName("items-wrapper")[0];
            for (let k in _configData[i].items) {
                addItem(itemWrapperDiv, _configData[i].items[k].name, _configData[i].items[k].stock, _configData[i].items[k].price);
            }
        }
    }
})(IceAge2019 || (IceAge2019 = {}));
//# sourceMappingURL=configurator.js.map