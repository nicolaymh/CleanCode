(() => {
   // No aplicando el principio de responsabilidad unica.

   type Gender = "M" | "F";

   class Person {
      constructor(public name: string, public gender: Gender, public birdthdate: Date) {}

      get mainPersonInfo(): string {
         return `${this.name} - gender: ${this.gender} - birdthdate: ${this.birdthdate}`;
      }
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

      get lastLogIn(): string {
         return `Last Access: ${this.lastAccess}`;
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

   console.log(userSettings.checkCredentials());
   console.log(userSettings.mainPersonInfo);
   console.log({ userSettings });
   console.log(userSettings.lastLogIn);
})();
