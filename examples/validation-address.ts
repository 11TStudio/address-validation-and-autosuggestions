import { Validation } from "../src"

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
