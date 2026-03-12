type CarBody = {
    material: string,
    state: string
}

type Tires = {
    airPressure: number,
    condition: string
}

type Engine = {
    horsepower: number,
    oilDensity: number
}

type Diagnostics = {
    partName: string,
    runDiagnostics(): string
}

function runDiagnostics(this: Diagnostics): string {
    
    
    return this.partName
}

function carDiagnostics(
    carBody: CarBody & Diagnostics,
    tires: Tires & Diagnostics,
    engine: Engine & Diagnostics): void {
    console.log(engine);
}



carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })