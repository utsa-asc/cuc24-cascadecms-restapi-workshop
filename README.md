# Cascade CMS Rest API JS Library

A client side JavaScript library for the [Cascade CMS Rest API](https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html) (v8.1.1 and later). 

The [original repository](https://github.com/kuklaph/cascade-cms-api) was created by [Philip Kukla](https://github.com/kuklaph). His repository included a JS library that primarily uses NodeJS and Google Scripts but also had a vanilla JS fetch option. Although the library itself was great, the standout peice for me was the Rest API operations documentation! I had been working on my own library on and off for a couple of years now, it focuses on client side JS you can run without a lot of setup but useful enough for a few small client facing scripts. I just never had time to polish and finish it. Until now! With Philip's permission, I forked his repository, updated a few things here and there and fully replaced the library itself. If you prefer to use NodeJS and/or Google Scripts, I highly suggest you check out his [library](https://github.com/kuklaph/cascade-cms-api)!

## Cascade Documentation

You can find an openAPI representation of Cascade CMS's WSDL operations here:

https://nandoblanco.github.io/cascade-cms-rest-api-js/swagger-ui/

All infomration originates from Cascade CMS's WSDL operations page. In order to access this you will need to use your organization as a subdomain followed by this url: `cascadecms.com/ws/services/AssetOperationService?wsdl`

Example: `yourOrg.cascadecms.com/ws/services/AssetOperationService?wsdl`

## Install

```js
<script src="cascade-restapi.js"></script>
```

## General Usage

To use the library you will need to define your Cascade CMS URL and Cascade CMS API Key (v8.16 and later). The `apiKey` is generated in your Cascade dashboard. The `url` is `yourOrg.cascadecms.com/api/v1/` (this is the current version as of 1/9/2023).

```js
//Example
const cmsUrl = "https://xxxx.cascadecms.com/";
const cmsAPI = "xxxxx-xxx-xxxx-xxx-xxxxxx";
```

Example Operations

```js

readAsset({
    type: "page",
    id: "page ID",
}).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});

readAsset({
    type: "block",
    path: "blockpath",
    site: "Site Name"
}).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});


```