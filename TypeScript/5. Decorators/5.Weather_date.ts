function cache(target: Object, key: string, descriptor: PropertyDescriptor) {
    let cache: string[] = [];
    let lastUpdated: Date | null = null;

    const originalData = descriptor.value;
    descriptor.value = function () {
        if (!lastUpdated) {
            const currentData = originalData.call(this);
            cache = currentData.slice();
            lastUpdated = new Date();
            return cache;
        } else {
            const currentDate = new Date();
            if (currentDate.getTime() - lastUpdated.getTime() < 5000) {
                console.log("Returned from cache");
                return cache;
            } else {
                const currentData = originalData.call(this);
                cache = currentData.slice();
                lastUpdated = new Date();
                return cache;
            }
        }
    }
    return descriptor;
}


class MockWeatherDataService {
    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string){ this.weatherData.push(data);}
    @cache
    getWeatherData() { return this.weatherData; }
}








let service = new MockWeatherDataService();
console.log(service.getWeatherData())
console.log(service.getWeatherData())
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData())

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000)