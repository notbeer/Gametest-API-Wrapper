import { ServerBuild } from '../structure/serverBuilder.js';
import { textToBinary, binaryToText } from '../../utils/formatter.js';

/*
type Mutable<T> = {
    -readonly [k in keyof T]: T[k];
};
*/

export default class Database {
    public readonly table: string;
    public readonly json: object;
    constructor(table: string) {
        if(!table) throw Error('[Database] constructor(): Error - Provide a table name');
        this.json = { GAMETEST_DB_TABLE: table }, this.table = table;
        let json = this._getTable() ?? this.json;
        ServerBuild.runCommands([
            'scoreboard objectives add GAMETEST_DB dummy',
            `scoreboard players reset "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB`,
            `scoreboard players add "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB 0`
        ]);
        // const mutableThis = this as Mutable<Database>;
    };
    /**
     * @private
     */
    private _getTable() {
        const data = ServerBuild.runCommand(`scoreboard players list`);
        if(data.error) return;
        const objectiveUsers = data.statusMessage.match(/(?<=\n).*/)[0].split(', '), dataRegex = /(?<=^\$binary\()[0-1\s]+(?=\)$)/;
        for(const dummy of objectiveUsers) {
            if(dataRegex.test(dummy)) {
                try {
                    const json = JSON.parse(binaryToText(dummy.match(dataRegex)[0]));
                    if(json?.GAMETEST_DB_TABLE === this.table) return json;
                } catch(err) {};
            };
        };
    };
    /**
     * Save a value or update a value in the Database under a key
     * @param {string} Key The key you want to save the value as
     * @param {any} value The value you want to save
     * @example Database.set('Test Key', 'Test Value');
     */
    public set(key: string, value: any): void {
        let json = this._getTable();
        ServerBuild.runCommand(`scoreboard players reset "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB`);
        Object.assign(json, { [key]: value });
        ServerBuild.runCommand(`scoreboard players add "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB 0`);
    };
    /**
     * Get the value of the key
     * @param {string} key
     * @returns {any}
     * @example Database.get('Test Key');
     */
    public get(key: string): any {
        let json = this._getTable();
        delete json["GAMETEST_DB_TABLE"];
        return json[key];
    };
    /**
     * Check if the key exists in the table
     * @param {string} key
     * @returns {boolean}
     * @example Database.has('Test Key');
     */
    public has(key: string): boolean {
        return this.keys().includes(key);
    };
    /**
     * Delete the key from the table
     * @param {string} key
     * @returns {boolean}
     * @example Database.delete('Test Key');
     */
    public delete(key: string): boolean {
        let json = this._getTable();
        ServerBuild.runCommand(`scoreboard players reset "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB`);
        const status = delete json[key];
        ServerBuild.runCommand(`scoreboard players add "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB 0`);
        return status;
    };
    /**
     * Clear everything in the table
     * @example Database.clear()
     */
    public clear(): void {
        let json = this._getTable();
        ServerBuild.runCommand(`scoreboard players reset "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB`);
        json = { GAMETEST_DB_TABLE: this.table };
        ServerBuild.runCommand(`scoreboard players add "$binary(${textToBinary(JSON.stringify(json))})" GAMETEST_DB 0`);
    };
    /**
     * Get all the keys in the table
     * @returns {Array<string>}
     * @example Database.keys();
     */
    public keys(): Array<string> {
        let json = this._getTable();
        delete json["GAMETEST_DB_TABLE"];
        return Object.keys(json);
    };
    /**
     * Get all the values in the table
     * @returns {Array<any>}
     * @example Database.values();
     */
    public values(): Array<any> {
        let json = this._getTable();
        delete json["GAMETEST_DB_TABLE"];
        return Object.values(json);
    };
    /**
     * Gets all the keys and values
     * @returns {any}
     * @example Database.getCollection();
     */
    public getCollection(): any {
        let json = this._getTable();
        delete json["GAMETEST_DB_TABLE"];
        return json;
    };
    /**
     * Check if all the keys exists in the table
     * @param {string} keys
     * @returns {boolean}
     * @example Database.hasAll('Test Key', 'Test Key 2', 'Test Key 3');
     */
    public hasAll(...keys: Array<string>): boolean {
        return keys.every((k) => this.has(k));
    };
    /**
     * Check if any of the keys exists in the table
     * @param {string} keys 
     * @returns {boolean}
     * @example Database.hasAny('Test Key', 'Test Key 2', 'Test Key 3');
     */
    public hasAny(...keys: Array<string>): boolean {
        return keys.some((k) => this.has(k));
    };
    /**
     * Get all the key(s) from the beginning of the table
     * @param {number} [amount] 
     * @returns {Array<string>}
     * @example Database.firstKey(2);
     */
    public firstKey(amount?: number): Array<string> {
        const keys = this.keys();
        if(typeof amount !== 'number') return [keys[0]];
        if(!amount) return [];
        if(amount < 0) return this.lastKey(amount * -1);
        return keys.slice(0, amount);
    };
    /**
     * Get all the values(s) from the beginning of the table
     * @param {number} [amount]  
     * @returns {Array<any>}
     * @example Database.firstValue(2);
     */
    public firstValue(amount?: number): Array<any> {
        const values = this.values();
        if(typeof amount !== 'number') return [values[0]];
        if(!amount) return [];
        if(amount < 0) return this.lastValue(amount * -1);
        return values.slice(0, amount);
    };
    /**
     * Get all the key(s) from the end of the table
     * @param {number} [amount]  
     * @returns {Array<string>}
     * @example Database.lastKey();
     */
    public lastKey(amount?: number): Array<string> {
        const keys = this.keys();
        if(typeof amount !== 'number') return [keys[keys.length - 1]];
        if(!amount) return [];
        if(amount < 0) return this.firstKey(amount * -1);
        return keys.slice(-amount).reverse();
    };
    /**
     * Get all the values(s) from the end of the table
     * @param {number} [amount] 
     * @returns {Array<any>}
     * @example Database.lastValue();
     */
    public lastValue(amount?: number): Array<any> {
        const values = this.values();
        if(typeof amount !== 'number') return [values[values.length - 1]];
        if(!amount) return [];
        if(amount < 0) return this.firstValue(amount * -1);
        return values.slice(-amount).reverse();
    };
    /**
     * Get random key(s)
     * @param {number} amount 
     * @returns {Array<string>}
     * @example Database.randomKey(3);
     */
    public randomKey(amount?: number): Array<string> {
        const keys = this.keys();
        return keys.sort(() => Math.random() - Math.random()).slice(0, Math.abs(amount));
    };
    /**
     * Get random value(s)
     * @param {number} amount 
     * @returns {Array<string>}
     * @example Database.randomValue(3);
     */
    public randomValue(amount?: number): Array<string> {
        const values = this.values();
        return values.sort(() => Math.random() - Math.random()).slice(0, Math.abs(amount));
    };
    //TODO: Add callback functions for db
    /*
    findValue(callbackfn, args) {
        const json = this.getCollection();
        if(typeof args !== 'undefined') callbackfn = callbackfn.bind(args);
        for(const key in json) if(callbackfn(key, json[key], json)) return json[key];
        return undefined;
    };
    */
};