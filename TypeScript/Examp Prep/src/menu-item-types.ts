import { MenuItem, MenuItemType, WithId } from "./models";

abstract class BaseMenuItem implements MenuItem{
    id: number;
    name: string;
    weightGrams: number;
    type: MenuItemType;
    constructor(id: number, name: string, weightGrams: number, type: MenuItemType) {
        this.id = id;
        this.name = name;
        this.weightGrams = weightGrams;
        this.type = type;
    }

    abstract getCalories():number;

    protected _basePrice?: number;
    get basePrice(): number | undefined {
        return this._basePrice;
    }

    @ConvertToEuro 
    get finalPrice(): number | undefined { return this._basePrice;}
}

class WelcomeSnack extends BaseMenuItem {
    hasCream: boolean;
    constructor(id: number, name: string, weightGrams: number, hasCream: boolean) {
        super(id, name, weightGrams);
        this.hasCream = hasCream;
    }

    getCalories(): number {
        if (this.hasCream) {
            return (this.weightGrams * 1.2) + (this.hasCream ? 20 : 0);
        } else {
            return this.weightGrams * 1.2;
        }
    }
}

class MainCourse extends BaseMenuItem {
    fatGrams: number;
    constructor(id: number, name: string, weightGrams: number, fatGrams: number) {
        super(id, name, weightGrams);
        this.fatGrams = fatGrams;
    }
    getCalories(): number {
        if (this.fatGrams) {
            return (this.weightGrams * 2.0) + (this.fatGrams * 3);
        } else {
            return this.weightGrams * 2.0;
        }
    }
}

class Dessert extends BaseMenuItem {
    hasSugar: boolean;
    constructor(id: number, name: string, weightGrams: number, hasSugar: boolean) {
        super(id, name, weightGrams);
        this.hasSugar = hasSugar;
    }
    getCalories(): number {
        if (this.hasSugar) {
            return (this.weightGrams * 2.5) + (this.hasSugar ? 100 : 0);
        } else {
            return this.weightGrams * 2.5;
        }
    }
}

function findItemById<T extends WithId> (items: T[], id: number): T | undefined {
    const itemFound = items.find((el) => el.id === id)
    return itemFound;
}

