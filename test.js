
const data = { "jsonrpc": "2.0", "method": "programNotification", "params": { "result": { "context": { "slot": 196421878 }, "value": { "pubkey": "BkN8hYgRjhyH5WNBQfDV73ivvdqNKfonCMhiYVJ1D9n9", "account": { "lamports": 23942400, "data": ["1MOyoQIAAAADAAAA8AMAAAEAAAD4////CAAAAAQAAAD2KLULAAAAAPUotQsAAAAAfhMIAAAAAACdvJ7KAQAAAGBqplYAAAAAyTEAAAAAAAD8c3FuAAAAAGBqplYAAAAAuzFzZAAAAAADAAAAAAAAAMzw3nf9i9644wAQ4Uz6bq4yiB1D2sLFLPpVvOVCg2B6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD1KLULAAAAADQYCAAAAAAA7C8AAAAAAAC6MXNkAAAAADQYCAAAAAAA7C8AAAAAAAABAAAAAAAAAPYotQsAAAAAf4BTJ2kp9OgaB+ZMWleZBpkj76iE3CdHHzO3YVCMTh/RKggAAAAAAMgWAAAAAAAAAQAAAAAAAADwKLULAAAAANEqCAAAAAAAyBYAAAAAAAABAAAAAAAAAPAotQsAAAAAfXMaOrY8s6j27B5KbCPylv4NK8BmZVw1cgcPSDLJIyP8KJkAAAAAAFxrBgAAAAAAAQAAAAAAAAD/94YJAAAAAPwomQAAAAAAXGsGAAAAAAABAAAAAAAAAP/3hgkAAAAAB/LLOf2wKdxReE0o7xeRHZfBppyFcjobYlWzQlNDrXVcKggAAAAAACo2AAAAAAAAAQAAAAAAAADwKLULAAAAAFwqCAAAAAAAKjYAAAAAAAABAAAAAAAAAPAotQsAAAAAsdAzM1QQJ5F9okFqcfs4Y6PPcqPB7MdqSFXQjYAY9UEYVQYAAAAAAJg6AAAAAAAAAQAAAAAAAADvNS8LAAAAABhVBgAAAAAAmDoAAAAAAAABAAAAAAAAAO81LwsAAAAAVtYuZluFDwyjIvY4dWs/SPbhu+BMACztqyO+TBzlzmowVwUAAAAAAFwUAAAAAAAAAQAAAAAAAAA53kULAAAAADBXBQAAAAAAXBQAAAAAAAABAAAAAAAAADneRQsAAAAAC7W169huq2IOUmHghY4UR1FAoCOpXo1cicOJgwqilmdfHAgAAAAAAIzUAAAAAAAAAQAAAAAAAADtKLULAAAAAF8cCAAAAAAAjNQAAAAAAAABAAAAAAAAAPAotQsAAAAAqXun02+mcbTgDiyXIUQJsGupT+Zhay0pXAyJKEV5lQO0xAcAAAAAAJQjAAAAAAAAAQAAAAAAAADvKLULAAAAALTEBwAAAAAAlCMAAAAAAAABAAAAAAAAAO8otQsAAAAAVBkdg3Zb8Ej6G4LYAW466xu/DHb3ezUTWu9Vo3T3/msAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "base64"], "owner": "FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH", "executable": false, "rentEpoch": 361 } } }, "subscription": 86686015 } }

const a = data.params.result.value.account.data[0]

function removeFirstFourBytes(base64String) {
    // Convert the Base64-encoded string to a Uint8Array
    const binaryData = Uint8Array.from(atob(base64String), c => c.charCodeAt(0));

    // Remove the first 4 bytes from the binary data
    const modifiedBinaryData = binaryData.slice(4);

    // Convert the modified binary data back to a Base64-encoded string
    const updatedBase64String = btoa(String.fromCharCode.apply(null, modifiedBinaryData));

    return updatedBase64String;
}

const base64String = "your Base64-encoded string";

const updatedBase64String = removeFirstFourBytes(base64String);

console.log(updatedBase64String);

// Output: "your Base64-encoded string with the first 4 bytes removed"

removeFirstFourBytes(a)