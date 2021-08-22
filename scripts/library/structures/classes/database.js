import Server from "./server.js";

export default class Database {
    /**
     * 
     * @param {string} tableName Name of the table where you want to store all the data 
     */
    constructor(tableName) {
        this.table = tableName;
        Server.runCommand(`scoreboard objectives add NOTBEER_DB dummy`);
        if(!this.table) throw 'constructor(): Error - Provide a table name';
        this._createTable(this.table);
    };
    /**
     * @private
     * @param {String} tableName
     */
    _createTable(tableName) {
        let json = {
            NOTBEER_DB_TABLE: tableName,
            data: {}
        };
        if(!this.getTableData()) Server.runCommand(`scoreboard players add ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB 0`);
    };
    deleteTable() {
        const json = this.getTableData();
        if(!json) throw `deleteTable(): Error - Table "${this.table}" doesn't exist`;
        Server.runCommand(`scoreboard players reset ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB`);
    };
    /**
     * 
     * @returns {*}
     */
    getTableData() {
        const data = Server.runCommand(`scoreboard players list`);
        if(data.error) return;
        const objectiveUsers = data.statusMessage.match(/(?<=\n).*/)[0];
        const player = objectiveUsers.replace(/\\"/g, '"').match(new RegExp(`({"NOTBEER_DB_TABLE":"${this.table}","data":{.*?}}+$)|({"NOTBEER_DB_TABLE":"${this.table}","data":{.*?}}+(?=,\\s))`))
        if(player) return JSON.parse(player[0]);
    };
    /**
     * 
     * @param {String | object} key Key you want to store 
     * @param {*} value Value you want to store
     */
    insertKey(key, value) {
        let json = this.getTableData(this.table);
        if(!json) throw `insertKey(): Error - Table "${this.table}" doesn't exist`;
        else if(key && value) {
            if(json.data[key]) throw `insertKey(): Error - Key "${key}" already exists in the table "${this.table}"`;
            Server.runCommand(`scoreboard players reset ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB`);
            Object.assign(json.data, { [key]: value });
            Server.runCommand(`scoreboard players add ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB 0`);
        } else throw `insertKey(): Error - Missing function parameters`;
    };
    /**
     * 
     * @param {String | object} key Key you want to remove
     */
    extractKey(key) {
        let json = this.getTableData(this.table);
        if(!json) throw `extractKey(): Error - Table "${this.table}" doesn't exist`;
        else if(key) {
            if(!json.data[key]) throw `extractKey(): Error - Key "${key}" doesn't exist in the table "${this.table}"`;
            Server.runCommand(`scoreboard players reset ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB`);
            delete json.data[key];
            Server.runCommand(`scoreboard players add ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB 0`);
        } else throw `extractKey(): Error - Missing function parameter`;
    };
    /**
     * 
     * @param {String | object} key Key that you want to update
     * @param {*} value The updated value
     */
    updateKey(key, value) {
        let json = this.getTableData(this.table);
        if(!json) throw `updateKey(): Error - Table "${this.table}" doesn't exist`;
        else if(key && value) {
            if(!json.data[key]) throw `updateKey(): Error - Key "${key}" doesn't exist in the table "${this.table}"`;
            Server.runCommand(`scoreboard players reset ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB`);
            json.data[key] = value;
            Server.runCommand(`scoreboard players add ${JSON.stringify(JSON.stringify(json))} NOTBEER_DB 0`);
        } else throw `updateKey(): Error - Missing function parameters`;
    };
    /**
     * 
     * @param {String | object} key Get the Key value 
     * @returns {*}
     */
    getKey(key) {
        let json = this.getTableData(this.table);
        if(!json) throw `getKey(): Error - Table "${this.table}" doesn't exist`;
        else if(key) {
            if(!json.data[key]) throw `getKey(): Error - Key "${key}" doesn't exist in the table "${this.table}"`;
            return json.data[key];
        } else throw `getKey(): Error - Missing function parameter`;
    };
    /**
     * 
     * @returns {Array<String>}
     */
    getKeys() {
        let json = this.getTableData(this.table);
        if(!json) throw `getKeys(): Error - Table "${this.table}" doesn't exist`;
        const keys = [];
        for(let key in json.data) keys.push(key);
        return keys;
    };
    /**
     * 
     * @param {String | object} key The key you want to check
     * @returns {boolean}
     */
    hasKey(key) {
        try {
            if(this.getKey(key)) return true;
        } catch(err) { return false };
    };
};