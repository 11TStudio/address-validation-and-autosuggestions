import axios from "axios";

export class Validation {
    REST_API_URL = "https://www.bpost.be/en/bbw-ajax/validate-driver-address";

    constructor () {}

    getSuggestions(street: string, houseNumber: number, bus = '', postalCode: number, city: string): Promise<Validation> {
        return new Promise((resolve, reject) => {
            axios.post(this.REST_API_URL, {
                postal_address_1: street,
                postal_address_2: houseNumber,
                postal_address_3: bus,
                postal_address_4: postalCode,
                postal_address_5: city,
            })
            .then((response) => {
                resolve(response.data as Validation)
            }).catch(reject)
        });
    }
}