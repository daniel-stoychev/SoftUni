function friday(param: unknown[]) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    for (const el of param) {
        if (el instanceof Date && el.getDay() === 5) {    
            console.log(`${el.getDate()}-${month[el.getMonth()]}-${el.getFullYear()}`);
            
        } 
        
        
    }
}


friday([
new Date(2024, 0, 13),
new Date(2024, 1, 13),
new Date(2024, 2, 13),
new Date(2024, 3, 13),
new Date(2024, 4, 13),
new Date(2024, 5, 13),
new Date(2024, 6, 13), 
new Date(2024, 7, 13), 
new Date(2024, 8, 13), 
new Date(2024, 9, 13), 
new Date(2024, 10, 13), 
new Date(2024, 11, 13) ]);