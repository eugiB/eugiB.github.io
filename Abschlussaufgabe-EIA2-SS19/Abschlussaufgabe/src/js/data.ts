namespace IceAge2019 {

    export interface Categories {
        [key: number]: Category;
    }

    export interface CartItem {
        name: string;
        price: string;
    }


    export interface Category {
        title: string;
        type: string;
        items: Item[];
    }

    export interface Item {
        name: string;
        price: number;
        stock: number;
    }
}