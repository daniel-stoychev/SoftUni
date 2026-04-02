import { BaseContent, ContentType } from "./models";

abstract class DetailedContent implements BaseContent {
    readonly id: number;
    readonly title: string;
    readonly releaseDate: Date;
    private _type: ContentType;
    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this._type = type;
    }

    get type() {
        return this._type
    }

    set type(value: ContentType) {
        throw new Error("Content type is immutable");       
    }

    abstract getDetails(): string;

}