const cmsUrl = "https://yourOrg.cascadecms.com/";
const cmsAPI = "xxxxxxxxx-xx-xxxx-xxxx";



const headers = { "Authorization": "Bearer " + cmsAPI };

function readAsset(a) {
    if (a.type == "user") {
        var url = cmsUrl + "api/v1/read/" + a.type + "/" + a.path;
    } else if (a.path) {
        var url = cmsUrl + "api/v1/read/" + a.type + "/" + a.siteName + "/" + a.path;
    } else if (a.id) {
        var url = cmsUrl + "api/v1/read/" + a.type + "/" + a.id;
    }
    url = url.replace(/\\\\/g, "\\");
    if (a.debug) {
        console.log("Fetch URL " + url);
    }
    return new Promise(function(resolve, reject) {
        fetch(url, { headers: headers })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data, url: url });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data, url: url });
                }
            });
    });
}

function editAsset(a) {
    return new Promise(function(resolve, reject) {
        fetch(cmsUrl + "api/v1/edit", { method: "POST", headers: headers, body: JSON.stringify({ asset: a.asset.asset }), })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}

function copyAsset(a) {
    if (a.path) {
        var url = cmsUrl + "api/v1/copy/" + a.type + "/" + a.siteNameName + "/" + a.path;
    } else if (a.id) {
        var url = cmsUrl + "api/v1/copy/" + a.type + "/" + a.id;
    }
    url = url.replace(/\\\\/g, "\\");
    return new Promise(function(resolve, reject) {
        fetch(url, { method: "POST", headers: headers, body: JSON.stringify({ copyParameters: a.copyParameters }), })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}

function moveAsset(a) {
    if (a.path) {
        var url = cmsUrl + "api/v1/move/" + a.type + "/" + a.siteNameName + "/" + a.path;
    } else if (a.id) {
        var url = cmsUrl + "api/v1/move/" + a.type + "/" + a.id;
    }
    url = url.replace(/\\\\/g, "\\");
    return new Promise(function(resolve, reject) {
        fetch(url, { method: "POST", headers: headers, body: JSON.stringify({ moveParameters: a.moveParameters }), })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}

function deleteAsset(a) {
    if (a.path) {
        var url = cmsUrl + "api/v1/delete/" + a.type + "/" + a.siteNameName + "/" + a.path;
    } else if (a.id) {
        var url = cmsUrl + "api/v1/delete/" + a.type + "/" + a.id;
    }
    url = url.replace(/\\\\/g, "\\");
    return new Promise(function(resolve, reject) {
        fetch(url, { method: "POST", headers: headers })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}

function createAsset(a) {
    return new Promise(function(resolve, reject) {
        fetch(cmsUrl + "api/v1/create", { method: "POST", headers: headers, body: JSON.stringify({ asset: a.asset }), })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}

function listSubscribers(a) {
    if (a.path) {
        var url = cmsUrl + "api/v1/listSubscribers/" + a.type + "/" + a.siteName + "/" + a.path;
    } else if (a.id) {
        var url = cmsUrl + "api/v1/listSubscribers/" + a.type + "/" + a.id;
    }
    url = url.replace(/\\\\/g, "\\");
    if (a.debug) {
        console.log("Fetch URL " + url);
    }
    return new Promise(function(resolve, reject) {
        fetch(url, { headers: headers })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data, url: url });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data, url: url });
                }
            });
    });
}

function listSites(a) {
    return new Promise(function(resolve, reject) {
        fetch(cmsUrl + "api/v1/listSites", { headers: headers })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Success", sent: a, apiReturn: data });
                } else {
                    reject({ status: "Error", error: data.message, sent: a, apiReturn: data });
                }
            });
    });
}