import { BaseMenuItem, findItemById } from "./menu-item-types";
import { Client, MenuItemType } from "./models";

export class MenuManager {
    
    private menuItems: BaseMenuItem [] = [];
    private clients: Map<number, Client[]>  = new Map();

    addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item);
        this.clients.set(item.id, []);
        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
    }

    registerClient(itemId: number, client: Client): string {
        if (!this.clients.has(itemId)) {
            return `ERROR: Menu item with ID ${itemId} not found.`
        }

        const itemClientsLists = this.clients.get(itemId);
        itemClientsLists?.push(client);

        return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;

    }

    listAllItems (): string[] {
        let result = [];
        result.push("--- List of All Menu Items ---");
        for (const item of this.menuItems) {
            result.push(`[${MenuItemType[item.type].toUpperCase()}] ${item.name} (${item.weightGrams}g) - Calories: ${Number(item.getCalories()).toFixed(2)}`)
        }

        return result;
    }

    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById(this.menuItems, itemId);
    }
}