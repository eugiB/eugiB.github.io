var IceAge2019;
(function (IceAge2019) {
    let orderID = [];
    document.addEventListener("DOMContentLoaded", function () {
        getOrdersFromServer();
        document.getElementById("close-all").addEventListener("click", deleteAllOrders);
    });
    function orderView(response) {
        document.getElementById("order-wrapper").innerHTML = " ";
        let tempJSON = JSON.parse(response);
        let datastring;
        let orderJSON;
        let id;
        orderID = [];
        for (let key in tempJSON) {
            id = (decodeURI(tempJSON[key]._id));
            orderID.push(id);
            datastring = (decodeURI(tempJSON[key].datastring));
            orderJSON = JSON.parse(datastring);
            newSingleOrder(orderJSON, key);
        }
    }
    function deleteAllOrders() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", IceAge2019.address + "?delOrder", true);
        xhr.addEventListener("readystatechange", handleStateDeletedOrder);
        xhr.send();
    }
    function newSingleOrder(singleOrderJSON, key) {
        const ordersWrapper = document.getElementById("order-wrapper");
        const divSingleOrder = IceAge2019.newElement("div", "single-order col-12 mb-5", ordersWrapper);
        const divBorder = IceAge2019.newElement("div", "m-2 border-thin px-4 py-5", divSingleOrder);
        const divHeaderRow = IceAge2019.newElement("div", "pb-4 mb-4 px-5 border-bottom border-secondary row", divBorder);
        const divHeadline = IceAge2019.newElement("div", "col-6", divHeaderRow);
        const orderHeadline = document.createElement("h4");
        divHeadline.append(orderHeadline);
        let headlineText = "Bestellung Nr. " + (parseInt(key) + 1);
        orderHeadline.innerHTML = headlineText;
        const divButton = IceAge2019.newElement("div", "col-6 d-flex justify-content-end", divHeaderRow);
        const closeButton = IceAge2019.newElement("button", "mr-3 btn btn-info font-weight-bold", divButton);
        closeButton.setAttribute("type", "button");
        closeButton.innerHTML = "Abschließen";
        closeButton.addEventListener("click", function () {
            IceAge2019.toggleModal("order", headlineText, divSingleOrder, false);
        });
        const itemsWrapper = IceAge2019.newElement("div", "items-wrapper", divBorder);
        const divDescriptionRow = IceAge2019.newElement("div", "row pb-3 mx-4", itemsWrapper);
        const numberDescription = IceAge2019.newElement("div", "col-2", divDescriptionRow);
        numberDescription.innerHTML = "Nr.";
        const articleDescription = IceAge2019.newElement("div", "col-7", divDescriptionRow);
        articleDescription.innerHTML = "Artikel";
        const priceDescription = IceAge2019.newElement("div", "col-3 text-right", divDescriptionRow);
        priceDescription.innerHTML = "Preis";
        let grandTotal = 0;
        for (let i in singleOrderJSON) {
            const divOrderRow = IceAge2019.newElement("div", "order-row row py-1 rounded mb-1 mx-4", itemsWrapper);
            const numberCol = IceAge2019.newElement("div", "col-2", divOrderRow);
            numberCol.innerHTML = (parseInt(i) + 1).toString();
            const articleCol = IceAge2019.newElement("div", "col-6", divOrderRow);
            articleCol.innerHTML = singleOrderJSON[i].name;
            const priceCol = IceAge2019.newElement("div", "col-3 text-right", divOrderRow);
            priceCol.innerHTML = singleOrderJSON[i].price;
            const euroSymbol = IceAge2019.newElement("div", "col-1", divOrderRow);
            euroSymbol.innerHTML = "€";
            grandTotal += parseFloat(singleOrderJSON[i].price);
        }
        const divTotal = IceAge2019.newElement("div", "row pt-3 pb-1 rounded mb-1 mx-4 mt-4", divBorder);
        const placeholderTotal = IceAge2019.newElement("div", "col-9 text-danger font-weight-bold", divTotal);
        placeholderTotal.innerHTML = "Total:";
        const total = IceAge2019.newElement("div", "col-2 text-right font-weight-bold", divTotal);
        total.innerHTML = grandTotal.toFixed(2);
        const euro = IceAge2019.newElement("div", "col-1 font-weight-bold", divTotal);
        euro.innerHTML = "€";
        return ordersWrapper;
    }
    function handleStateDeletedOrder(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert("Sie haben alle Bestellung gelöscht!");
        }
    }
    function deleteSingleOrder(elementToRemove) {
        const allOrders = document.getElementsByClassName("single-order");
        let index;
        for (let i = 0; i < allOrders.length; i++) {
            if (elementToRemove == allOrders[i])
                index = i;
        }
        alert("Sie haben die Bestellung gelöscht!");
        const orderId = orderID[index];
        let xhr = new XMLHttpRequest();
        xhr.open("GET", (IceAge2019.address + "?delSinOr" + orderId), true);
        xhr.addEventListener("readystatechange", handleStateDeletedOrder);
        xhr.send();
    }
    IceAge2019.deleteSingleOrder = deleteSingleOrder;
    function handleStateChangeGetOrders(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            orderView(xhr.response);
        }
    }
    function getOrdersFromServer() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", IceAge2019.address + "?getOrder", true);
        xhr.addEventListener("readystatechange", handleStateChangeGetOrders);
        xhr.send();
    }
})(IceAge2019 || (IceAge2019 = {}));
//# sourceMappingURL=orders.js.map