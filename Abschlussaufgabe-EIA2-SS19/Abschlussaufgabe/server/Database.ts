
import * as Mongo from "mongodb";
var ObjectId = require("mongodb").ObjectID;

interface OrderData {
    [key: string]: string;
}

interface Entrypoints {
    amount: string;
    item: string;
    price: string;
} 

export interface StoredData {
    datatype: string;
    datastring: string;
} 

interface Categories { 
    [key: number]: Category;
}

interface Category {
    title: string;
    amount_type: string;
    amount: Amount;
    form_type: string;
    items: Item[];
}
interface Item {
    name: string;
    price: number;
}
interface Amount {
    steps: number[];
    display: string[];
}

let databaseURL: string = "mongodb://bot:bot187@ds239177.mlab.com:39177/eugibdatabase";
let databaseName: string = "eugibdatabase";
let db: Mongo.Db;
let orders: Mongo.Collection;
let data: Mongo.Collection;

if (process.env.NODE_ENV == "production") {

    databaseURL = "mongodb://bot:bot187@ds239177.mlab.com:39177/eugibdatabase";
    databaseName = "eugibdatabase";

}

Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
    if (_e)
        console.log("Verbindung zur Database nicht möglich:", _e);
    else {
        console.log("Zur Database verbunden");
        console.log(databaseURL);
        db = _db.db(databaseName);
        orders = db.collection("orders"); 
        data = db.collection("data");
    }
}

export function insertOrder(_doc: StoredData): void {
    orders.insertOne(_doc, handleInsert);
}

export function deleteSingleOrder(id: string): void {
    orders.deleteOne( { "_id" : ObjectId(id) } );

}
export function saveData(_doc: StoredData): void {
    data.deleteOne({});
    data.insertOne(_doc, handleInsert);
}

export function deleteAllOrders(): void {
    orders.deleteMany({});
}


// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function getData(_callback: Function, targetDb: string): void {
    
    if (targetDb == "data")
        var cursor: Mongo.Cursor = data.find();
    else
        cursor = orders.find();
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, dataArray: StoredData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(dataArray));
    }
}

