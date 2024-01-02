import { DBConnection } from "../utilities/db-connection";

export class Model {
    public connection: any;
    constructor(tableName, tableModel, timestamp) {
        this.connection = DBConnection.define(tableName, tableModel, { timestamps: timestamp == false ? false : true });
    }
    FindAll(option?: object): any {
        if (option) {
            
            if(option['raw']){
            option['raw'] = true;
            }
            return this.connection.findAndCountAll(option);
        } else {
            return this.connection.findAndCountAll({ raw: true });
        }
    }
    Insert(row): any {
        return this.connection.create(row);
    }
    get() {
        return this.connection;
    }
    findOne(options?: object) {
        if (!options) {
            options = {
                raw: true
            }
        }
        return this.connection.findOne(options);
    }
    update(details, id) {
        return this.connection.update(details, id);
    }
    delete(options) {
        return this.connection.destroy(options);
    }
    bulkCreate(options) {
        return this.connection.bulkCreate(options);
    }
    count(options){
        return this.connection.count(options);
    }
}