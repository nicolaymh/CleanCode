export abstract class Vehicle {
   // getNumberofSeats(): number {
   //    throw Error("Method not implemented");
   // }
   abstract getNumberofSeats(): number;
}

export class Tesla extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}

export class Audi extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}

export class Toyota extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}

export class Honda extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}

export class Volvo extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}

export class Ford extends Vehicle {
   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberofSeats(): number {
      return this.numberOfSeats;
   }
}
