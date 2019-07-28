/*
Aufgabe: Aufgabe 05
Name: Eugen Krasnov
Matrikel: 259525
Datum: 25.11.18
Hiermit versichere ich, dass ich diesen Code
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe61;
(function (Aufgabe61) {
    window.addEventListener("load", main);
    window.addEventListener("change", generateCart);
    let treePrice = 0;
    let potPrice = 0;
    let holderPrice = 0;
    let ballsPrice = 0;
    let candlesPrice = 0;
    let lamettaPrice = 0;
    let name = "";
    let surname = "";
    let adress = "";
    let mail = "";
    let delivery = "";
    function main() {
        console.log("main loaded");
        createHTML();
        createEventListener(event);
    }
    function createHTML() {
        //Baumart
        for (let i = 0; i < Aufgabe61.data["trees"].length; i++) {
            let ele = document.createElement("option");
            document.getElementById("selecttree").appendChild(ele);
            ele.classList.add("formelements");
            ele.setAttribute("value", "" + i);
            ele.innerHTML = Aufgabe61.data["trees"][i].name;
        }
        //Topf  
        for (let i = 0; i < Aufgabe61.data["pot"].length; i++) {
            let ele = document.createElement("option");
            document.getElementById("selectpot").appendChild(ele);
            ele.setAttribute("value", "" + i);
            ele.innerHTML = Aufgabe61.data["pot"][i].name;
        }
        //Holder
        for (let i = 0; i < Aufgabe61.data["holder"].length; i++) {
            let ele = document.createElement("input");
            document.getElementById("selectholder").appendChild(ele);
            ele.classList.add("holder_form_options");
            ele.setAttribute("type", "radio");
            ele.setAttribute("name", "Holder_Radiogroup");
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "Holder_radio" + i);
            let ele2 = document.createElement("label");
            document.getElementById("selectholder").appendChild(ele2);
            ele2.classList.add("holder_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "holder_radio" + i);
            ele2.innerHTML = Aufgabe61.data["holder"][i].name;
        }
        //Christmasballs
        let christballs = document.getElementById("selectballs");
        for (let i = 0; i < Aufgabe61.data["balls"].length; i++) {
            if (Aufgabe61.data["balls"][i].art == "balls") {
                let checkBox = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxBalls";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christballs.appendChild(checkBox);
                let label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = Aufgabe61.data["balls"][i].name;
                christballs.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Stepperballs" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christballs.appendChild(stepper);
                let br = document.createElement("br");
                christballs.appendChild(br);
            }
        }
        //Kerzen
        let christcandles = document.getElementById("selectcandles");
        for (let i = 0; i < Aufgabe61.data["candles"].length; i++) {
            if (Aufgabe61.data["candles"][i].art == "candles") {
                let checkBox = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxCandles";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christcandles.appendChild(checkBox);
                let label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = Aufgabe61.data["candles"][i].name;
                christcandles.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Steppercandles" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christcandles.appendChild(stepper);
                let br = document.createElement("br");
                christcandles.appendChild(br);
            }
        }
        //Lametta
        let christlametta = document.getElementById("selectlametta");
        for (let i = 0; i < Aufgabe61.data["lametta"].length; i++) {
            if (Aufgabe61.data["lametta"][i].art == "lametta") {
                let checkBox = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxCandles";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christlametta.appendChild(checkBox);
                let label2 = document.createElement("label");
                label2.id = "label2" + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = Aufgabe61.data["lametta"][i].name;
                christlametta.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Stepper" + i;
                stepper.value = "0";
                stepper.id = "stepperlametta" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christlametta.appendChild(stepper);
                let br = document.createElement("br");
                christlametta.appendChild(br);
            }
        }
        //Supplier
        for (let i = 0; i < Aufgabe61.data["supplier"].length; i++) {
            let ele = document.createElement("option");
            document.getElementById("selectsupplier").appendChild(ele);
            ele.classList.add("formelements");
            ele.setAttribute("value", "" + i);
            ele.innerHTML = Aufgabe61.data["supplier"][i].name;
        }
        //Delivery
        for (let i = 0; i < Aufgabe61.data["delivery"].length; i++) {
            let ele = document.createElement("input");
            document.getElementById("selectdelivery").appendChild(ele);
            ele.classList.add("formelements");
            ele.setAttribute("type", "radio");
            ele.setAttribute("name", "Delivery_Radiogroup");
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "delivery_radio" + i);
            let ele2 = document.createElement("label");
            document.getElementById("selectdelivery").appendChild(ele2);
            ele2.classList.add("delivery_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "delivery_radio" + i);
            ele2.innerHTML = Aufgabe61.data["delivery"][i].name;
        }
    }
    function createEventListener(_event) {
        let divs = document.getElementsByClassName("form");
        console.log(divs);
        for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.addEventListener("change", generateCart);
        }
    }
    //Warenkorb
    function generateCart(_event) {
        let target = _event.target;
        if (target.name == "Delivery_Radiogroup" && target.checked == true) {
            let index = parseInt(target.value, 10);
            let node = (document.getElementById("selectdelivery"));
            let cart = document.getElementById("bestellung");
            let p = document.createElement("p");
            p.innerHTML = (Aufgabe61.data["delivery"][parseFloat(target.value)].name);
            cart.appendChild(p);
            console.log("done");
        }
        if (target.name == "Stepperballs" && target.value != null) {
            let index = parseInt(target.value, 10);
            let node = (document.getElementById("selectballs"));
            let cart = document.getElementById("bestellung");
            let p = document.createElement("p");
            p.innerHTML = (Aufgabe61.data["balls"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done");
        }
        if (target.name == "Stepperlametta" && target.checked == true) {
            let index = parseInt(target.value, 10);
            let node = (document.getElementById("selectlametta"));
            let cart = document.getElementById("bestellung");
            let p = document.createElement("p");
            p.innerHTML = (Aufgabe61.data["lametta"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done");
        }
        if (target.name == "Steppercandles" && target.checked == true) {
            let index = parseInt(target.value, 10);
            let node = (document.getElementById("selectcandles"));
            let cart = document.getElementById("bestellung");
            let p = document.createElement("p");
            p.innerHTML = (Aufgabe61.data["candles"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done");
        }
    }
})(Aufgabe61 || (Aufgabe61 = {}));
//# sourceMappingURL=Aufgabe05.js.map