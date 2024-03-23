 //Cars: write a function that stores information about a car in a Object.
 //The function should always receive a manufacturer and a model name.
  // It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs,
//such as a color or an optional feature
//Print the object that's returned to make sure all the information was stored correctly.
type Car = {
    manufacture: string,
    model: string,
    [key: string]: any;
  };
  
  function createCar(manufacture: string, model: string, optional: Record<string, any>): Car {
    const myCar: Car = {
      manufacture: manufacture,
      model: model,
      ...optional // Spread the optional properties
    };
    return myCar; // Return the created car
  }
  
  // Corrected usage
  const myCar = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
  console.log(myCar);
  