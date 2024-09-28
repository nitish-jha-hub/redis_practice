import client from './client.js';

async function getStrings() {
    // Set a string value with key as "name"
    await client.set("user:2", "Nitish jha");

    // Set a string value with key as "name" and set expiry time as 10 seconds
    await client.expire("user:1", 10);
    
    // get the value of key "name" and log it
    const data1 = await client.get("name");
    console.log(data1);
}

getStrings();