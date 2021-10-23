import { EventEmitterConstructor, EventEmitterTypes } from "../../@types/build/manager/eventEmitter";

export const EventEmitter: EventEmitterConstructor = class Class implements EventEmitterTypes {
    private _listeners: any[] = [];
    private _configurations = {
        maxListeners: 10
    };
    /**
     * @private
     * @param {string} eventName Event type to listen for
     * @param {Function} listener Function to callback on fire
     * @param {boolean} [once] Wheather to listen for the event only ONCE or not
     * @param {boolean} [prepand] Insert the Event in the beginning of the Array, so it executes first
     */
    private _addListener(eventName: string, listener: (...args: any[]) => void, once?: boolean, prepand?: boolean): void {
        const listenerCount = this.listenerCount(eventName);
        if(listenerCount >= this._configurations.maxListeners) throw `Warning: Possible EventEmitter memory leak detected. ${listenerCount + 1} ${eventName} listeners added. Use emitter.setMaxListeners(n) to increase limit`;
        const data = {
            eventName,
            listener,
            once,
            executed: false
        };
        if(prepand) this._listeners.unshift(data);
        else this._listeners.push(data);
    };
    /**
     * @private
     * @param {string} eventName Event type to remove
     * @param {Function} listener Function that is being called
     */
    private _removeListener(eventName: string, listener: (...args: any[]) => void): void {
        if(typeof listener === 'number') this._listeners.splice(listener, 1);
        const index = this._listeners.findIndex(v => v.eventName === eventName && v.listener === listener);
        if(index !== -1) this._listeners.splice(index, 1);
    };
    public addListener(eventName: string, listener: (...args: any[]) => void): this {
        this._addListener(eventName, listener, false);
        return this;
    };
    public emit(eventName: string, ...args: any[]): boolean {
        let status = false;
        this._listeners.forEach(object => {
            if(object.eventName === eventName) {
                if(object.once && object.executed) return;
                object.listener(...args);
                status = true, object.executed = true;
            };
        });
        return status;
    };
    public eventNames(): Array<string> {
        return this._listeners.map(v => v.eventName);
    };
    public getMaxListeners(): number {
        return this._configurations?.maxListeners;
    };
    public listenerCount(eventName: string): number {
        return eventName ? this._listeners.filter(v => v.eventName === eventName).length : this._listeners.length;
    };
    public listeners(eventName: string): Array<Function> {
        const Functions: Array<Function> = [];
        this._listeners.forEach(object => {
            if(object.eventName === eventName && !object.once) Functions.push(object.listener);
        });
        return Functions;
    };
    public off(eventName: string, listener: (...args: any[]) => void): this {
        this._removeListener(eventName, listener);
        return this;
    };
    public on(eventName: string, listener: (...args: any[]) => void): this {
        this._addListener(eventName, listener, false);
        return this;
    };
    public once(eventName: string, listener: (...args: any[]) => void): this {
        this._addListener(eventName, listener, true);
        return this;
    };
    public prependListener(eventName: string, listener: (...args: any[]) => void): this {
        this._addListener(eventName, listener, false, true);
        return this;
    };
    public prependOnceListener(eventName: string, listener: (...args: any[]) => void): this {
        this._addListener(eventName, listener, true, true);
        return this;
    };
    public removeAllListeners(eventName: string): void {
        eventName ? this._listeners = this._listeners.filter(element => element.eventName !== eventName) : this._listeners = [];
    };
    public removeListener(eventName: string, listener: (...args: any[]) => void): this {
        this._removeListener(eventName, listener);
        return this;
    };
    public setMaxListeners(number: number): void {
        if(typeof number === 'number') this._configurations.maxListeners = number;
    };
    public rawListeners(eventName: string): Array<Function> {
        const Functions: Array<Function> = [];
        this._listeners.forEach(object => {
            if(object.eventName === eventName) Functions.push(object.listener);
        });
        return Functions;
    };
};