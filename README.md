# Cascade CMS Rest API JS Library

A client side JavaScript library for the Cascade CMS Rest API. You can find more information about the Rest API here: https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html

Available for Cascade CMS v8.1.1 and later.

### **Please note this library is a work in progress. If you come across a bug please open an issue.**

## Cascade Documentation

You can find an openAPI representation of Cascade CMS's WSDL operations here:

https://nandoblanco.github.io/cascade-cms-rest-api-js/swagger-ui/

All infomration originates from Cascade CMS's WSDL operations page. In order to access this you will need to use your organization as a subdomain followed by this url:

`cascadecms.com/ws/services/AssetOperationService?wsdl`

Example: `yourSubDomain.cascadecms.com/ws/services/AssetOperationService?wsdl`

## Install

```js
<script src="cascade-restapi.js"></script>
```

## General Usage

To use the library you will need to define your Cascade CMS URL and Cascade CMS API Key.

```js
const cmsUrl = "https://xxxx.cascadecms.com/";
const cmsAPI = "xxxxx-xxx-xxxx-xxx-xxxxxx";
```

The `apiKey` is generated in your Cascade dashboard. The `url` is `yourOrg.cascadecms.com/api/v1/` (this is the current version as of 1/9/2023).

```js
//Nodejs
const cascadeAPI = CascadeAPI({
  apiKey: "",
  url: "https://isSandActuallySandy.cascadecms.com/api/v1/",
});

const readFile = async () => {
  const results = await cascadeAPI.read({
    identifier: {
      type: "page",
      id: "d3631e59ac1easd2434bd70be3fbfe8148abc",
    },
  });
  //...
};
```