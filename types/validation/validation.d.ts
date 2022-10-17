import { IValidation } from "../interfaces/validation";
export declare class Validation {
    REST_API_URL: string;
    constructor();
    validate(street: string, houseNumber: string, bus: string | undefined, postalCode: number, city: string): Promise<IValidation>;
}
