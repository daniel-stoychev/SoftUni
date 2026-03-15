class Counter {

    private static count = 0;

    static increment(): number {
        return Counter.count++;
    }

    static getCount(): number {
        return Counter.count;
    }
}

Counter.increment();

Counter.increment();

console.log(Counter.getCount());


// Counter.count = 10;