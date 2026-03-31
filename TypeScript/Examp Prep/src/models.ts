interface Client {
    name: string;
    phone: string
}

enum MenuItemType {
    WelcomeSnack,
    MainCourse,
    Dessert
}

interface MenuItem {
    id: number;
    name: string;
    weightGrams: number;
    type: MenuItemType
}

interface WithId {
    id: number
}

export {
    Client,
    MenuItemType,
    MenuItem,
    WithId
}