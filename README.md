# Address autosuggestion and validation
 Wrapper for the BPOST's address autosuggest and validate API.
 - Only for Belgium addresses. 
 - Supports typescript.

[![GitHub contributors](https://img.shields.io/github/contributors/11TStudio/address-validation-and-autosuggestions.svg?style=flat-square)](https://github.com/11TStudio/address-validation-and-autosuggestions/graphs/contributors)
[![GitHub release](https://img.shields.io/github/license/11TStudio/SquadStatsJSPRO.svg?style=flat-square)](https://github.com/11TStudio/address-validation-and-autosuggestions/blob/master/LICENSE)

## Examples

#### Example for the autosuggestion
```ts
const autoSuggestion = new AutoSuggestion()

const streetExample = "Nationalestraat 3";
let inputMock = '';
for(const letter of streetExample) {
    // mocking like user is typing (protip: use lodash debounce in realtime)
    inputMock += letter;

    autoSuggestion.getSuggestions(inputMock).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
}
/* Below example responses are minified, therefor please use beautify tools to have a better look. */

/* 
First response on letter N:
{ ... see the full example in the examples folder ...}
*/
/* 
etc... to Nationalestraat 3 we would end up with:
    {"response":{"sequenceNumber":264,"topSuggestions":[{"address":{"latitude":51.210046,"longitude":4.07592,"coordinateSystem":"SPHERICAL","perspectiveCode":"OSM_NETWORK","reliability":10,"detectedLanguage":"nl","province":"Oost-Vlaanderen","isComplete":true,"string":"NATIONALESTRAAT 3  -  9190 STEKENE","searchBarString":"NATIONALESTRAAT 3  -  9190 STEKENE","houseNumber":"3","streetName":"NATIONALESTRAAT","municipalityName":"STEKENE","postalCode":"9190"}},{"address":{"latitude":51.2168045044,"longitude":4.399479866,"coordinateSystem":"SPHERICAL","perspectiveCode":"STREET_LEVEL_ACCESS","reliability":10,"detectedLanguage":"nl","province":"Antwerpen","isComplete":true,"string":"NATIONALESTRAAT 30-32  -  2000 ANTWERPEN","searchBarString":"NATIONALESTRAAT 30-32  -  2000 ANTWERPEN","houseNumber":"30-32","streetName":"NATIONALESTRAAT","municipalityName":"ANTWERPEN","postalCode":"2000"}},{"address":{"latitude":51.217084,"longitude":4.399732,"coordinateSystem":"SPHERICAL","perspectiveCode":"OSM_NETWORK","reliability":10,"detectedLanguage":"nl","province":"Antwerpen","isComplete":true,"string":"NATIONALESTRAAT 31  -  2000 ANTWERPEN","searchBarString":"NATIONALESTRAAT 31  -  2000 ANTWERPEN","houseNumber":"31","streetName":"NATIONALESTRAAT","municipalityName":"ANTWERPEN","postalCode":"2000"}},{"address":{"latitude":51.217012,"longitude":4.399674,"coordinateSystem":"SPHERICAL","perspectiveCode":"OSM_NETWORK","reliability":5,"detectedLanguage":"nl","province":"Antwerpen","isComplete":true,"string":"NATIONALESTRAAT 33  -  2000 ANTWERPEN","searchBarString":"NATIONALESTRAAT 33  -  2000 ANTWERPEN","houseNumber":"33","streetName":"NATIONALESTRAAT","municipalityName":"ANTWERPEN","postalCode":"2000"}},{"address":{"latitude":51.216769,"longitude":4.399489,"coordinateSystem":"SPHERICAL","perspectiveCode":"OSM_NETWORK","reliability":5,"detectedLanguage":"nl","province":"Antwerpen","isComplete":true,"string":"NATIONALESTRAAT 36  -  2000 ANTWERPEN","searchBarString":"NATIONALESTRAAT 36  -  2000 ANTWERPEN","houseNumber":"36","streetName":"NATIONALESTRAAT","municipalityName":"ANTWERPEN","postalCode":"2000"}}]}}
*/

```

#### Example for validation
```ts
const validationAddress = new Validation();

const mockData = {
    street: "Nationalestraat",
    houseNumber: "30-32",
    bus: "",
    postalCode: 2000,
    city: "Antwerpen"
}
validationAddress.validate(
    mockData.street,
    mockData.houseNumber,
    mockData.bus,
    mockData.postalCode,
    mockData.city
).then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})
/* Below example responses are minified, therefor please use beautify tools to have a better look. */
/* Example response:
    {"status":"0","message":"Success","address_response":[{"Score":null,"StreetName":"NATIONALESTRAAT","StreetNumber":"30-32","BoxNumber":null,"PostalCode":"2000","MunicipalityName":"ANTWERPEN","CountryName":"BELGIE","Latitude":"51.2168045044","Longitude":"4.399479866","Label":["NATIONALESTRAAT 30-32","2000 ANTWERPEN"]}],"count_add":1,"transaction_id":"0afec0ab-96c6-48e2-81d9-0d7188d9c11f","error_code":[],"error_count":0}
*/

```


## Contribute
You can contribute by opening an PR on a new branch. I will review your code and thanks in advance for your efforts!


## Credits
- [BPOST](https://github.com/bpost)

## License
```
MIT License

Copyright (c) 2022 11TStudio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```