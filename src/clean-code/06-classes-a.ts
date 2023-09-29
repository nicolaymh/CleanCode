(() => {
   // No aplicando el principio de responsabilidad unica.

   type Gender = "M" | "F";

   class Person {
      constructor(public name: string, public gender: Gender, public birdthdate: Date) {}
   }

   class User extends Person {
      private lastAccess: Date;

      constructor(
         public email: string,
         public role: string,
         name: string,
         gender: Gender,
         birdthdate: Date
      ) {
         super(name, gender, birdthdate);
         this.lastAccess = new Date();
      }

      checkCredentials(): boolean {
         return true;
      }
   }

   class UserSettings extends User {
      constructor(
         public workingDirectory: string,
         public lastOpenFolder: string,
         email: string,
         role: string,
         name: string,
         gender: Gender,
         birdthdate: Date
      ) {
         super(email, role, name, gender, birdthdate);
      }
   }

   const userSettings = new UserSettings(
      "/user",
      "/home",
      "nicolacho87@gmail.com",
      "Admin",
      "Nicolay",
      "M",
      new Date("1987/03/14")
   );
})();
