<br />
<h2 align="center">Database Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#deleteTable">deleteTable</a></li>
    <li><a href="#getTableData">getTableData</a></li>
    <li><a href="#insertKey">insertKey</a></li>
    <li><a href="#extractKey">extractKey</a></li>
    <li><a href="#updateKey">updateKey</a></li>
    <li><a href="#getKey">getKey</a></li>
    <li><a href="#getKeys">getKeys</a></li>
    <li><a href="#hasKey">hasKey</a></li>
</ul>

<br />
<div id="deleteTable">

- **deleteTable(): void** - `Deletes the Table`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.deleteTable(); //Deletes the table that is constructed
  ```
</div>

<div id="getTableData">

- **getTableData(): object** - `Get all the data inserted in the table`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.getTableData(); //Gets all the keys that is stored inside the table
  ```
</div>

<div id="insertKey">

- **insertKey(key: string | object, value: any): void** - `Insert a key with any type of value`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.insertKey("Key", "Value"); //Insert a key and a value in the table
  ```
</div>

<div id="extractKey">

- **extractKey(key: string | object): void** - `Remove a key from the table`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.extractKey("Key"); //Removes "Key" from the table
  ```
</div>

<div id="updateKey">

- **updateKey(key: string | object, value: any): void** - `Updates an existing key with a new value`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.updateKey("Key", "New value");
  ```
</div>

<div id="getKey">

- **getKey(key: string | object): void** - `Get the value inside the key`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.getKey("Key"); //Gets the value stored in "Key"
  ```
</div>

<div id="getKeys">

- **getKeys(): string[]** - `Get all the keys in the table`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.getKeys(); //Gets all the keys stored in the table
  ```
</div>

<div id="hasKey">

- **hasKey(key: string | object): boolean** - `Check if a key exists inside the table`
  ```javascript
  import { Database } from '../library/Minecraft.js';
  
  const db = new Database('Table Name'); //Insert the table name in constructor
  db.hasKey("Key"); //Check if a key exists in the table
  ```
</div>