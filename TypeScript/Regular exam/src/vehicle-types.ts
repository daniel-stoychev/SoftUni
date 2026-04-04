import { Vehicle, VehicleCategory, WithId } from "./models";

export abstract class BaseVehicle implements Vehicle {
    id: number;
    model: string;
    engineCC: number; 
    category: VehicleCategory
    protected _baseRentalPrice?: number;

    constructor(id: number, model: string, engineCC: number, category: VehicleCategory) {
        this.id = id,
        this.model = model,
        this.engineCC = engineCC,
        this.category = category
    }

    abstract getMaintenanceCost(): number;

    get baseRentalPrice(): number | undefined {
        return this._baseRentalPrice;
    }

    // @ApplyInsurance 
    get insuredRentalPrice(): number | undefined {
        return this._baseRentalPrice
    }

}

export class Sedan extends BaseVehicle {
    passengerCount: number;
    constructor(id: number, model: string, engineCC: number, passengerCount: number) {
        super(id, model, engineCC, VehicleCategory.Sedan);
        this.passengerCount = passengerCount;
    }

    getMaintenanceCost() {
        return (this.engineCC * 0.03) + (this.passengerCount * 15);
    }

}

export class SUV extends BaseVehicle {
    fourWheelDrive: boolean
    constructor(id: number, model: string, engineCC: number, fourWheelDrive: boolean, baseRentalPrice: number) {
        super(id, model, engineCC, VehicleCategory.SUV);
        this.fourWheelDrive = fourWheelDrive;
        this._baseRentalPrice = baseRentalPrice;
    }

    getMaintenanceCost() {
        return (this.engineCC * 0.05) + (this.fourWheelDrive ? 200 : 0);
    }
}

export class Truck extends BaseVehicle {
    payloadTons: number;
    constructor(id: number, model: string, engineCC: number, payloadTons: number, baseRentalPrice: number) {
        super(id, model, engineCC, VehicleCategory.Truck);
        this.payloadTons = payloadTons;
        this._baseRentalPrice = baseRentalPrice;
    }

    getMaintenanceCost() {
        return (this.engineCC * 0.07) + (this.payloadTons * 50);
    }
}

export function findItemById<T extends WithId> (items: T[], id: number): T | undefined {
    return items.find((item) => item.id === id);
}

