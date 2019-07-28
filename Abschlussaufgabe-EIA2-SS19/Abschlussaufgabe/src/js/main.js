var IceAge2019;
(function (IceAge2019) {
    document.addEventListener("DOMContentLoaded", function () {
        const exitbuttonmodal = document.getElementsByClassName("exit-modal");
        for (let i = 0; i < exitbuttonmodal.length; i++) {
            exitbuttonmodal[i].addEventListener("click", closeModal);
        }
    });
    IceAge2019.address = "https://eugibheroku.herokuapp.com/";
    function newElement(_element, _class, _apndTo) {
        const klassenArray = _class.split(" ");
        switch (_element) {
            case "div":
                const div = document.createElement("div");
                for (let i = 0; i < klassenArray.length; i++) {
                    if (_class !== "")
                        div.classList.add(klassenArray[i]);
                }
                if (_apndTo !== null)
                    _apndTo.append(div);
                return div;
            case "input":
                const input = document.createElement("input");
                for (let i = 0; i < klassenArray.length; i++) {
                    if (_class !== "")
                        input.classList.add(klassenArray[i]);
                }
                if (_apndTo !== null)
                    _apndTo.append(input);
                return input;
            case "option":
                const option = document.createElement("option");
                for (let i = 0; i < klassenArray.length; i++) {
                    if (_class !== "")
                        option.classList.add(klassenArray[i]);
                }
                if (_apndTo !== null)
                    _apndTo.append(option);
                return option;
            case "button":
                const button = document.createElement("button");
                for (let i = 0; i < klassenArray.length; i++) {
                    if (_class !== "")
                        button.classList.add(klassenArray[i]);
                }
                if (_apndTo !== null)
                    _apndTo.append(button);
                return button;
            default:
                const element = document.createElement(_element);
                for (let i = 0; i < klassenArray.length; i++) {
                    if (_class !== "")
                        element.classList.add(klassenArray[i]);
                }
                if (_apndTo !== null)
                    _apndTo.append(element);
                return element;
        }
    }
    IceAge2019.newElement = newElement;
    function closeModal() {
        toggleModal("", "", null, true);
        let confirmButton = document.getElementById("confirm-modal");
        confirmButton.remove();
        let url = document.URL;
        if (url.includes("index")) {
            confirmButton = newElement("button", "btn btn-danger", null);
            const divForButton = document.getElementById("modal-footer");
            divForButton.insertBefore(confirmButton, divForButton.children[0]);
            confirmButton.setAttribute("type", "button");
            confirmButton.setAttribute("id", "confirm-modal");
            confirmButton.innerHTML = "Löschen";
        }
        else if (url.includes("orders")) {
            confirmButton = newElement("button", "btn btn-info", null);
            const divForButton = document.getElementById("modal-footer");
            divForButton.insertBefore(confirmButton, divForButton.children[0]);
            confirmButton.setAttribute("type", "button");
            confirmButton.setAttribute("id", "confirm-modal");
            confirmButton.innerHTML = "Bestellung schließen";
        }
    }
    IceAge2019.closeModal = closeModal;
    function toggleModal(typeOfElement, placeholderText, elementToRemove, isHidden) {
        const modal = document.getElementById("modal");
        const namePlaceholders = document.getElementsByClassName("modal-name-placeholder");
        const typePlaceholders = document.getElementsByClassName("modal-type-placeholder");
        for (let i = 0; i < namePlaceholders.length; i++) {
            namePlaceholders[i].innerHTML = placeholderText;
        }
        for (let i = 0; i < typePlaceholders.length; i++) {
            typePlaceholders[i].innerHTML = typeOfElement;
        }
        let confirmButton = document.getElementById("confirm-modal");
        confirmButton.addEventListener("click", function (event) {
            closeModal();
            if (document.URL.includes("orders"))
                IceAge2019.deleteSingleOrder(elementToRemove);
            elementToRemove.remove();
        });
        modal.hidden = isHidden;
    }
    IceAge2019.toggleModal = toggleModal;
})(IceAge2019 || (IceAge2019 = {}));
//# sourceMappingURL=main.js.map