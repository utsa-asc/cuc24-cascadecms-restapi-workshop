const cmsUrl = "https://yourOrg.cascadecms.com/";
const cmsAPI = "xxxxxxxxx-xx-xxxx-xxxx";

const headers = { "Authorization": "Bearer " + cmsAPI };

function readAsset(a) {
    if (a.type == "user") {
        var url = cmsUrl + "api/v1/read/" + a.type + "/" + a.path;
    } else if (a.path) {
        var url = cmsUrl + "api/v1/read/" + a.type + "/" + a.site + "/" + a.path;
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