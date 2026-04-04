
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
                allVihicles.push(`[${VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, Passengers ${sedan.passengerCount}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`);
            } else if (vehicle.category === VehicleCategory.SUV) {
                const suv = vehicle as SUV;
                allVihicles.push(`[${VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, 4WD: ${suv.fourWheelDrive}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`);
            } else {
                const truck = vehicle as Truck;
                allVihicles.push(`[${VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, Payload ${truck.payloadTons}t) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`);
            }  
        }
        allVihicles.push("-----------------------------")

        return allVihicles;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this.vehicles, vehicleId); 
    }

}