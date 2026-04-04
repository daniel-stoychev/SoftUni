export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;

    if (!originalGet) {
        throw new Error("ApplyInsurance can only be applied to getters");
    }

    descriptor.get = function () {
        const result = originalGet.call(this);

        if (result === undefined) {
            return undefined;
        }

        const surchargePrice = (result * 1.12).toFixed(2);

        return Number(surchargePrice);
    }

    return descriptor;

}