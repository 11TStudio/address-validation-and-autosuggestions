import axios from "axios";
import { IValidation } from "../interfaces/validation";

export class Validation {
    REST_API_URL = "https://www.bpost.be/en/bbw-ajax/validate-driver-address";

    constructor () {}

    validate(street: string, houseNumber: string, bus = "", postalCode: number, city: string): Promise<IValidation> {
        return new Promise((resolve, reject) => {
            axios.post(this.REST_API_URL, {
                postal_address_1: street,
                postal_address_2: houseNumber,
                postal_address_3: bus,
                postal_address_4: postalCode,
                postal_address_5: city,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                resolve(response.data)
            }).catch(reject)
        });
    }
}