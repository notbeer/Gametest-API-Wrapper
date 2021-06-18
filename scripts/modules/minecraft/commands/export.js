//?This is where you export all the commands from the files as an specific identifier
//!Category Test
export * as ping from './test/ping.js';
//'*' means it will export every function and varible from the file 'as ping' meaning it will exported as the identifier 'ping'

//!Category information
export * as help from './information/help.js';
export * as location from './information/location.js';
export * as eval from './information/eval.js';

//!Category Misc
export * as home from './misc/home.js';