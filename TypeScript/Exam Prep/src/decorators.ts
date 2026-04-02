export function ConvertToEuro(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalGetter = descriptor.get;

    if (!originalGetter) {
        throw new Error("ConvertToEuro can only be applied to getters");
    }

    descriptor.get = function () {
        const result = originalGetter?.call(this);

        
        if (result === undefined) {
            return undefined;
        }

        const eur = result / 1.95583;

        return Number(eur.toFixed(2));
    };

    return descriptor;
}