import { IAutoSuggestion } from "../interfaces";
export declare class AutoSuggestion {
    id: number;
    REST_API_URL: string;
    constructor();
    getSuggestions(input: string): Promise<IAutoSuggestion>;
}
