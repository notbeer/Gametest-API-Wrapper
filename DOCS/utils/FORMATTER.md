<br />
<h2 align="center">Scheduling Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#rainbowText">rainbowText</a></li>
    <li><a href="#compressNumber">compressNumber</a></li>
    <li><a href="#formatNumber">formatNumber</a></li>
    <li><a href="#MS">MS</a></li>
</ul>

<br />
<div id="rainbowText">

- **rainbowText(text: string): string** - `Returns rainbow text formatted in Minecraft`
    ```javascript
    import { rainbowText } from '../library/Minecraft.js';
    
    rainbowText("This is a test"); //Output: §4T§ch§6i§es §gi§2s §aa §bt§3e§9s§5t
    ```
</div>

<div id="compressNumber">

- **compressNumber(number: number): string** - `Returns a compact version of the number`
    ```javascript
    import { compressNumber } from '../library/Minecraft.js';
    
    formatNumber(1000); //Output: 1.0k
    ```
</div>

<div id="formatNumber">

- **formatNumber(number: number): string** - `Returns formatted version of the number`
    ```javascript
    import { formatNumber } from '../library/Minecraft.js';
    
    formatNumber(1000); //Output: 1,000
    ```
</div>

<div id="MS">

- **MS(value: string | number): string | number** - `Convert seconds, minutes, hours, days, week, and years to milliseconds and vice versa`
    ```javascript
    import { MS } from '../library/Minecraft.js';
    
    MS('2 days')  //Output: 172800000
    MS('1d')      //Output: 86400000
    MS('10h')     //Output: 36000000
    MS('2.5 hrs') //Output: 9000000
    MS('2h')      //Output: 7200000
    MS('1m')      //Output: 60000
    MS('5s')      //Output: 5000
    MS('1y')      //Output: 31557600000
    MS('100')     //Output: 100
    MS('-3 days') //Output: -259200000
    MS('-1h')     //Output: -3600000
    MS('-200')    //Output: -200
    
    //Convert from Milliseconds
    
    MS(86400000, { compact: true });  //Output: 1d
    MS(86400000);                     //Output: 1 day
    MS(172800000, { compact: true }); //Output: 2d
    MS(172800000);                    //Output: 2 days
    ```
</div>