
import { Driver, VehicleCategory } from "./models";
import { BaseVehicle, findItemById, Sedan, SUV, Truck } from "./vehicle-types";

export class FleetManager {
    private vehicles: BaseVehicle[] = [];
    private drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this.vehicles.push(item);
        this.drivers.set(item.id, []);
        return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {
        const searchedId = this.drivers.has(vehicleId);
        if (!searchedId) {
            throw new Error(`ERROR: Vehicle with ID ${vehicleId} not found.`);
            
        }
        const driversList = this.drivers.get(vehicleId);
        driversList?.push(driver);
        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`
        
    }

    listAllVehicles(): string[] {
        let allVihicles = ["--- List of All Vehicles ---"];
        for (const vehicle of this.vehicles) {
        if (vehicle.category === VehicleCategory.Sedan) {
                const sedan = vehicle as Sedan;
                allVihicles.push(`[${vehicle.category}] ${vehicle.model} (${vehicle.engineCC}cc, ${sedan.passengerCount}) - Maintenance: ${Number(vehicle.baseRentalPrice).toFixed(2)}`);
            } else if (vehicle.category === VehicleCategory.SUV) {
                const suv = vehicle as SUV;
                allVihicles.push(`[${vehicle.category}] ${vehicle.model} (${vehicle.engineCC}cc, ${suv.fourWheelDrive}) - Maintenance: ${Number(vehicle.baseRentalPrice).toFixed(2)}`);
            } else {
                const truck = vehicle as Truck;
                allVihicles.push(`[${vehicle.category}] ${vehicle.model} (${vehicle.engineCC}cc, ${truck.payloadTons}) - Maintenance: ${Number(vehicle.baseRentalPrice).toFixed(2)}`);
            }  
        }
        allVihicles.push("-----------------------------")

        return allVihicles;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this.vehicles, vehicleId); 
    }

}