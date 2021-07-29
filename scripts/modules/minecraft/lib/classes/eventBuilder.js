export default class eventBuilder {
    constructor() {
        this.listeners = [];
    };
    /**
     * 
     * @param {String} event - Event name to listen for
     * @param {VoidFunction} callback - Code that will be executed on listener
     * @param {Boolean} once - Wheather or not it will execute once or till removed
     */
    addListener(event, callback, once) {
        this.listeners.push({ eventName: event, callback, once });
    };
    /**
     * 
     * @param {String} event - Remove an event listener
     */
    removeListener(event) {
        const index = this.listeners.findIndex(element => element.eventName === event);
        this.listeners.splice(index, 1);
    };
    /**
     * @function removeAllListener() - Removes all of the event listeners
     */
    removeAllListener() {
        this.listeners = [];
    };
    /**
     * 
     * @param {String} event - Gets total count on this event listener
     * @returns total listeners
     */
    totalListener(event) {
        return event ? this.listeners.filter(element => element.eventName === event) : this.listeners;
    };
    /**
     * @function on() - Executes the callback till' event listener is removed
     * @param {String} event - Event you want to listen for
     * @param {VoidFunction} callback - Code you want to execute when the listener is executed
     */
    on(event, callback) {
        this.addListener(event, callback, false);
    };
    /**
     * @function once() - Executes the callback only once
     * @param {String} event - Event you want to listen for
     * @param {VoidFunction} callback - Code you want to execute when the listener is executed
     */
    once(event, callback) {
        this.addListener(event, callback, true);
    };
    /**
     * 
     * @param {String} event - Event name to execute the callback
     * @param  {...any} args - Data from the chat
     */
    emit(event, ...args) {
        this.listeners.forEach(element => {
            if(element.eventName !== event) return;
            element.callback(...args);
            if(element.once) return this.removeListener(element.eventName);
        });
    };
};