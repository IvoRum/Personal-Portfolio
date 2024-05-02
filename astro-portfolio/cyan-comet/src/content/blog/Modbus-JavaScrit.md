---
title: "Modbus and JavaScript"
description: "How to use modbus whit javascript"
pubDate: "May 05 2024"
heroImage: "/blog/modbus-js/blog-modbus.png"
---

## What is modbus and why Javascript?

Modbus is a client/server data communications protocol used in the application layer. It was originally published by Modicon (now Schneider Electric) in 1979 for use with its programmable logic controllers (PLCs). It is a old communication protocol used exclusively to connect versus machine parts together. And what dose this protocle manly used whit PLCs have to do whit javascript. Well recently I was contacted to make a user interface to interact whit modbus connected devices. By I dedent have a lot of time to work on this request. So started reading on topic of modbus and found a javascript library that can read from via network or serial ports. So why not have a js based user interface. After testing the library it works as a charm.

## Implementation

For this project to work I created a Electron project. Electron is a framework that lets you create desktop apps with web technologies like HTML, CSS, and JavaScript. I choose Electron because I have never use it and thought well lets give it a shot.

Creating of electron project is easy:

```
mkdir my-electron-app && cd my-electron-app
npm init
```

Then, install the electron package into your app's devDependencies.

```
npm install --save-dev electron
```

Then just add this script to the `package.json`:

```
{
  "scripts": {
    "start": "electron ."
  }
}
```

After this is all done to run Electron just type:

```
npm start
```

Electron Quck start: https://www.electronjs.org/docs/latest/tutorial/quick-start

And now for the modbus library

```
npm i modbus-serial
```

To test it out use this script provided by the creator of the library:

```
// create an empty modbus client
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// open connection to a serial port
//user COM for Windows
client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 }, write);

function write() {
    client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0 , 0xffff])
        .then(read);
}

function read() {
    // read the 2 registers starting at address 5
    // on device number 1.
    client.readHoldingRegisters(5, 2)
        .then(console.log);
}
```

Where the number 1 in `client.setID(1)` is the device number you want to access. On the device under the setting you will be able to change this client ID. Whit in Siemens case is a named _Address_.

![Access Token](/blog/modbus-js/image.png)

And make sure that the baudrate set in the

`client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 }, write)`

matches the one on the device.

Then in the `client.readHoldingRegisters(5, 2)` set the first number to the address you want to access on the device and the second parameter to the length whit shod be specified in the documentation.

After that you are all set to create an user interface for communication whit modbus. Have fun programming!

## Demo comming soon!!

## Sources

https://www.npmjs.com/package/modbus-serial
https://cache.industry.siemens.com/dl/files/781/19020781/att_1007699/v1/modbus_users_guide_2000584-001.pdf
https://www.electronjs.org/docs/latest/
