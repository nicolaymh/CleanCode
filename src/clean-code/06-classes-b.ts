(() => {
   // No aplicando el principio de responsabilidad unica.
   //* y objetos como propiedad.

   type Gender = "M" | "F";

   interface PersonProps {
      birdthdate: Date;
      gender: Gender;
      name: string;
   }

   class Person {
      public birdthdate: Date;
      public gender: Gender;
      public name: string;

      constructor({ name, gender, birdthdate }: PersonProps) {
         this.name = name;
         this.gender = gender;
         this.birdthdate = birdthdate;
      }
   }

   interface UserProps {
      birdthdate: Date;
      email: string;
      gender: Gender;
      name: string;
      role: string;
   }

   class User extends Person {
      private lastAccess: Date;

      public email: string;
      public role: string;

      constructor({ birdthdate, gender, name, role, email }: UserProps) {
         super({ name, gender, birdthdate });
         this.lastAccess = new Date();
         this.email = email;
         this.role = role;
      }

      checkCredentials(): boolean {
         return true;
      }
   }

   interface UserSettingsProps {
      birdthdate: Date;
      email: string;
      gender: Gender;
      lastOpenFolder: string;
      name: string;
      role: string;
      workingDirectory: string;
   }

   class UserSettings extends User {
      public workingDirectory: string;
      public lastOpenFolder: string;

      constructor({
         birdthdate,
         email,
         gender,
         lastOpenFolder,
         name,
         role,
         workingDirectory,
      }: UserSettingsProps) {
         super({ email, role, name, gender, birdthdate });
         this.workingDirectory = workingDirectory;
         this.lastOpenFolder = lastOpenFolder;
      }
   }

   const userSettings = new UserSettings({
      workingDirectory: "/user",
      lastOpenFolder: "/home",
      email: "nicolacho87@gmail.com",
      role: "Admin",
      name: "Nicolay",
      gender: "M",
      birdthdate: new Date("1987/03/14"),
   });

   console.log({ userSettings });
   console.log(userSettings.checkCredentials());
})();
