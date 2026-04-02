export function NotifyOnSuccess(notificationType: 'Email' | 'Push') {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        
        descriptor.value = function (...args: any[]) {
            const returnedValue = originalMethod.apply(this, args);
            if (typeof returnedValue === 'string' && !returnedValue.startsWith('ERROR')) {
                console.log(`[NOTIFY] Sending ${notificationType} notification for successful action "${methodName}".`);   
            }
            return returnedValue;
        }
        return descriptor;
    }
}