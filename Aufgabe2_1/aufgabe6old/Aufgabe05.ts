/*
Aufgabe: Aufgabe 05
Name: Eugen Krasnov
Matrikel: 259525
Datum: 25.11.18
Hiermit versichere ich, dass ich diesen Code
nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe61 {

    window.addEventListener("load", main);
    window.addEventListener("change", generateCart);


    let treePrice: number = 0;
    let potPrice: number = 0;
    let holderPrice: number = 0;
    let ballsPrice: number = 0;
    let candlesPrice: number = 0;
    let lamettaPrice: number = 0;

    let name: string = "";
    let surname: string = "";
    let adress: string = "";
    let mail: string = "";
    let delivery: string = "";

    function main(): void {
        console.log("main loaded");
        createHTML();
        createEventListener(event);

    }
    function createHTML(): void {


        //Baumart
        for (let i: number = 0; i < data["trees"].length; i++) {
            let ele: HTMLOptionElement = document.createElement("option");
            document.getElementById("selecttree").appendChild(ele);
            ele.classList.add("formelements")
            ele.setAttribute("value", "" + i)
            ele.innerHTML = data["trees"][i].name
        }


        //Topf  
        for (let i: number = 0; i < data["pot"].length; i++) {
            let ele: HTMLOptionElement = document.createElement("option");
            document.getElementById("selectpot").appendChild(ele);
            ele.setAttribute("value", "" + i)
            ele.innerHTML = data["pot"][i].name

        }

        //Holder
        for (let i: number = 0; i < data["holder"].length; i++) {
            let ele: HTMLInputElement = document.createElement("input");
            document.getElementById("selectholder").appendChild(ele);
            ele.classList.add("holder_form_options")
            ele.setAttribute("type", "radio")
            ele.setAttribute("name", "Holder_Radiogroup")
            ele.setAttribute("value", "" + i)
            ele.setAttribute("id", "Holder_radio" + i)

            let ele2: HTMLLabelElement = document.createElement("label");
            document.getElementById("selectholder").appendChild(ele2);
            ele2.classList.add("holder_form_options")
            ele2.classList.add("formlabels")
            ele2.setAttribute("for", "holder_radio" + i)
            ele2.innerHTML = data["holder"][i].name
        }

        //Christmasballs

        let christballs: HTMLDivElement = <HTMLDivElement>document.getElementById("selectballs");

        for (let i: number = 0; i < data["balls"].length; i++) {
            if (data["balls"][i].art == "balls") {
                let checkBox: HTMLInputElement = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxBalls";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christballs.appendChild(checkBox);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = data["balls"][i].name;
                christballs.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Stepperballs" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christballs.appendChild(stepper);
                let br: HTMLElement = document.createElement("br");
                christballs.appendChild(br);

            }
        }
        //Kerzen

        let christcandles: HTMLDivElement = <HTMLDivElement>document.getElementById("selectcandles");

        for (let i: number = 0; i < data["candles"].length; i++) {
            if (data["candles"][i].art == "candles") {
                let checkBox: HTMLInputElement = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxCandles";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christcandles.appendChild(checkBox);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = data["candles"][i].name;
                christcandles.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Steppercandles" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christcandles.appendChild(stepper);
                let br: HTMLElement = document.createElement("br");
                christcandles.appendChild(br);

            }
        }

        //Lametta
        let christlametta: HTMLDivElement = <HTMLDivElement>document.getElementById("selectlametta");

        for (let i: number = 0; i < data["lametta"].length; i++) {
            if (data["lametta"][i].art == "lametta") {
                let checkBox: HTMLInputElement = document.createElement("input");
                checkBox.type = "checkBox";
                checkBox.name = "checkBoxCandles";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                christlametta.appendChild(checkBox);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2" + i;
                label2.htmlFor = checkBox.id;
                label2.innerText = data["lametta"][i].name;
                christlametta.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Stepper" + i;
                stepper.value = "0";
                stepper.id = "stepperlametta" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                christlametta.appendChild(stepper);
                let br: HTMLElement = document.createElement("br");
                christlametta.appendChild(br);

            }
        }

        //Supplier
        for (let i: number = 0; i < data["supplier"].length; i++) {
            let ele: HTMLOptionElement = document.createElement("option");
            document.getElementById("selectsupplier").appendChild(ele);
            ele.classList.add("formelements")
            ele.setAttribute("value", "" + i)
            ele.innerHTML = data["supplier"][i].name

        }

        //Delivery
        for (let i: number = 0; i < data["delivery"].length; i++) {
            let ele: HTMLInputElement = document.createElement("input");
            document.getElementById("selectdelivery").appendChild(ele);

            ele.classList.add("formelements")
            ele.setAttribute("type", "radio")
            ele.setAttribute("name", "Delivery_Radiogroup")
            ele.setAttribute("value", "" + i)
            ele.setAttribute("id", "delivery_radio" + i)

            let ele2: HTMLLabelElement = document.createElement("label");
            document.getElementById("selectdelivery").appendChild(ele2);
            ele2.classList.add("delivery_form_options")
            ele2.classList.add("formlabels")
            ele2.setAttribute("for", "delivery_radio" + i)
            ele2.innerHTML = data["delivery"][i].name
        }   
    }

    function createEventListener(_event: Event): void {
        let divs: NodeListOf<Element> = document.getElementsByClassName("form");
        console.log(divs);
        for (let i: number = 0; i < divs.length; i++) {
            let div: Element = divs[i];
            div.addEventListener("change", generateCart);
        }
    }


    //Warenkorb

    function generateCart(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name == "Delivery_Radiogroup" && target.checked == true) {
            let index: number = parseInt(target.value, 10);
            let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("selectdelivery"));
            let cart: HTMLElement = document.getElementById("bestellung");
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = (data["delivery"][parseFloat(target.value)].name);
            
            cart.appendChild(p);
            console.log("done")
        }


        if (target.name == "Stepperballs" && target.value != null) {
            let index: number = parseInt(target.value, 10);
            let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("selectballs"));
            let cart: HTMLElement = document.getElementById("bestellung");
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = (data["balls"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done")
        }
        

        if (target.name == "Stepperlametta" && target.checked == true) {
            let index: number = parseInt(target.value, 10);
            let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("selectlametta"));
            let cart: HTMLElement = document.getElementById("bestellung");
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = (data["lametta"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done")
        }


        if (target.name == "Steppercandles" && target.checked == true) {
            let index: number = parseInt(target.value, 10);
            let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("selectcandles"));
            let cart: HTMLElement = document.getElementById("bestellung");
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = (data["candles"][parseFloat(target.value)].name);
            node.appendChild(p);
            console.log("done")
        }


    }

     
}