import axios from "axios";
import { IAutoSuggestion } from "../interfaces";

export class AutoSuggestion {
    id: number;

    REST_API_URL = "https://www.bpost.be/site/validate-address-autocomplete";

    constructor () {
        this.id=1;
    }

    getSuggestions(input: string): Promise<IAutoSuggestion> {
        return new Promise((resolve, reject) => {
            axios.get(this.REST_API_URL, { params: { id: this.id++, searchText: input}})
            .then((response) => {
                resolve(response.data as IAutoSuggestion)
            }).catch(reject)
        });
    }
}