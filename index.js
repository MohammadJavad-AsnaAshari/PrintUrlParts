/**
 * This function parses a given URL string and prints its individual parts
 * to the console.
 *
 * @param {string} urlString - The URL string to be parsed.
 */
function printUrlParts(urlString) {
    /**
     * Creates a new URL object from the provided URL string. The URL object
     * provides properties to access different components of a URL.
     */
    const urlObj = new URL(urlString);

    /**
     * Print the protocol (e.g., "http:", "https:")
     */
    console.log(`protocol: ${urlObj.protocol}`);

    /**
     * Print the username portion of the URL credentials (if present)
     */
    console.log(`username: ${urlObj.username}`);

    /**
     * Print the password portion of the URL credentials (if present)
     */
    console.log(`password: ${urlObj.password}`);

    /**
     * Print the hostname (domain name) of the website
     */
    console.log(`hostname: ${urlObj.hostname}`);

    /**
     * Print the port number specified in the URL (defaults to 80 for HTTP
     * and 443 for HTTPS if not explicitly mentioned)
     */
    console.log(`port: ${urlObj.port}`);

    /**
     * Print the path to the specific resource within the website's directory structure
     */
    console.log(`pathname: ${urlObj.pathname}`);

    /**
     * Print the query string containing key-value pairs appended after the `?` symbol
     * (used to pass information to the server)
     */
    console.log(`search: ${urlObj.search}`);

    /**
     * Print the hash fragment following the `#` symbol, often used for internal navigation
     * or referencing specific content within the page
     */
    console.log(`hash: ${urlObj.hash}`);
}

// Example usage
const url = 'https://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
printUrlParts(url);