namespace IceAge2019 {
	document.addEventListener("DOMContentLoaded", function (): void {

		const exitbuttonmodal: HTMLCollection = document.getElementsByClassName("exit-modal");
		for (let i: number = 0; i < exitbuttonmodal.length; i++) {
			exitbuttonmodal[i].addEventListener("click", closeModal);
		}
	});
 

	export let address: string = "https://eugibheroku.herokuapp.com/";

	export function newElement(_element: string, _class: string, _apndTo: HTMLElement): HTMLElement {

		const klassenArray: string[] = _class.split(" ");

		switch (_element) {
			case "div":
 
				const div: HTMLDivElement = document.createElement("div");

				for (let i: number = 0; i < klassenArray.length; i++) {

					if (_class !== "")
						div.classList.add(klassenArray[i]);
				}
				if (_apndTo !== null)
					_apndTo.append(div);

				return div;



			case "input":

				const input: HTMLInputElement = document.createElement("input");

				for (let i: number = 0; i < klassenArray.length; i++) {
					if (_class !== "")
						input.classList.add(klassenArray[i]);
				}
				if (_apndTo !== null)
					_apndTo.append(input);

				return input;



			case "option":

				const option: HTMLOptionElement = document.createElement("option");

				for (let i: number = 0; i < klassenArray.length; i++) {
					if (_class !== "")
						option.classList.add(klassenArray[i]);
				}

				if (_apndTo !== null)
					_apndTo.append(option);

				return option;



			case "button":

				const button: HTMLButtonElement = document.createElement("button");

				for (let i: number = 0; i < klassenArray.length; i++) {
					if (_class !== "")
						button.classList.add(klassenArray[i]);
				}

				if (_apndTo !== null)
					_apndTo.append(button);

				return button;

			default:
				const element: HTMLElement = document.createElement(_element);

				for (let i: number = 0; i < klassenArray.length; i++) {
					if (_class !== "")
						element.classList.add(klassenArray[i]);
				}

				if (_apndTo !== null)
					_apndTo.append(element);

				return element;
		}

	}

	export function closeModal(): void {
		toggleModal("", "", null, true);
		let confirmButton: HTMLElement = document.getElementById("confirm-modal");
		confirmButton.remove();
		let url: string = document.URL;


		if (url.includes("index")) {
			confirmButton = newElement("button", "btn btn-danger", null);
			const divForButton: HTMLElement = document.getElementById("modal-footer");
			divForButton.insertBefore(confirmButton, divForButton.children[0]);
			confirmButton.setAttribute("type", "button");
			confirmButton.setAttribute("id", "confirm-modal");
			confirmButton.innerHTML = "Löschen";
		}
		else if (url.includes("orders")) {
			confirmButton = newElement("button", "btn btn-info", null);
			const divForButton: HTMLElement = document.getElementById("modal-footer");
			divForButton.insertBefore(confirmButton, divForButton.children[0]);
			confirmButton.setAttribute("type", "button");
			confirmButton.setAttribute("id", "confirm-modal");
			confirmButton.innerHTML = "Bestellung schließen";
		}
	}

	export function toggleModal(typeOfElement: string, placeholderText: string, elementToRemove: HTMLElement, isHidden: boolean): void {
		const modal: HTMLElement = document.getElementById("modal");
		const namePlaceholders: HTMLCollection = document.getElementsByClassName("modal-name-placeholder");
		const typePlaceholders: HTMLCollection = document.getElementsByClassName("modal-type-placeholder");

		for (let i: number = 0; i < namePlaceholders.length; i++) {
			namePlaceholders[i].innerHTML = placeholderText;
		}
		for (let i: number = 0; i < typePlaceholders.length; i++) {
			typePlaceholders[i].innerHTML = typeOfElement;
		}

		let confirmButton: HTMLElement = document.getElementById("confirm-modal");

		confirmButton.addEventListener("click", function (event: Event): void {
			closeModal();
			if (document.URL.includes("orders"))
				deleteSingleOrder(elementToRemove);
			elementToRemove.remove();

		});

		modal.hidden = isHidden;
	}
}