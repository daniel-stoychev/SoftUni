import { BaseContent, ContentType } from "./models";

export abstract class DetailedContent implements BaseContent {
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

export class Movie extends DetailedContent{
    readonly director: string;
    constructor (id: number, title: string, releaseDate: Date, director: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.director = director;
    }
    getDetails(): string {
        return this.director;
    }
}

export class Series extends DetailedContent{
    readonly platformUrl: string;
    constructor (id: number, title: string, releaseDate: Date, platformUrl: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.platformUrl = platformUrl;
    }
    getDetails(): string {
        return this.platformUrl;
    }
}

export function findItemById<T extends BaseContent>(arr: T[], itemId: number): T | undefined {
    return arr.find((el) => el.id === itemId)
}
