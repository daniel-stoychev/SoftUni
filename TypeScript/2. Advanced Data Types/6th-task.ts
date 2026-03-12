
type Responses = {
    code: 200 | 201 | 301 | 400 | 404 | 500,
    text: string,
    printChars?: number
}

// type ErrorResponse = {
//     code: 400 | 404 | 500,
//     text: string,
    
// }

// type Combined = SuccessResponse | ErrorResponse;

function httpCodes(responseObj: Responses): void {
    if ('printChars' in responseObj) {
        console.log(responseObj.text.slice(0, responseObj.printChars));
        
    } else {
        console.log(responseObj.text);
        
    }
    
}

httpCodes({ code: 200, text: 'OK'});
httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1});
httpCodes({ code: 404, text: 'Not Found', printChars: 3});
httpCodes({ code: 201, text: 'Created'});








