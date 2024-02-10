const cmsUrl = "https://xxxx.cascadecms.com/";
const cmsAPI = "xxxxx-xxx-xxxx-xxx-xxxxxx";

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
        fetch(url, {
                headers: headers
            })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    resolve({ status: "Read Success", asset: a, apiReturn: data, url: url });
                } else {
                    reject({ status: "Read Error", error: data.message, asset: a, apiReturn: data, url: url });
                }
            });
    });
}