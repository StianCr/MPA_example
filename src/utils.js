
//groupkey ------------------------------------------------
const groupkey = "HKFUMM51"; // your groupkey here

//fetch wrapper function ----------------------------------
async function sendRequest(url, cfg) {

    cfg = cfg || {}; //if no cfg, create one
    cfg.signal = AbortSignal.timeout(5000); //5 seconds before timeout

    try {
        
        const response = await fetch(url, cfg);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.msg);
        }
        
        return Promise.resolve(data); //forward the resolved promise

    } catch (error) {
        
        return Promise.reject(error); //forward the rejected promise
    }

}

// --------------------------------------------------------
function createBasicAuthString(username, password) {
    let combinedStr = username + ":" + password;
    let b64Str = btoa(combinedStr);
    return "basic " + b64Str; //return the basic auth. string
}

//-----------------------------------------------------------
function errorHandler(error) {

    // handle errors here, e.g. show a dialog with an easy-to-understand explanation
    // based on the error type/code.

    console.log("Something went wrong: " + error);
}


//-----------------------------------------------------------
// more utility-functions here if needed...