function printUrlParts(urlString) {
    const urlObj = new URL(urlString);
    console.log(`protocol: ${urlObj.protocol}`);
    console.log(`username: ${urlObj.username}`);
    console.log(`password: ${urlObj.password}`);
    console.log(`hostname: ${urlObj.hostname}`);
    console.log(`port: ${urlObj.port}`);
    console.log(`pathname: ${urlObj.pathname}`);
    console.log(`search: ${urlObj.search}`);
    console.log(`hash: ${urlObj.hash}`);
}

const url = 'https://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
printUrlParts(url);

