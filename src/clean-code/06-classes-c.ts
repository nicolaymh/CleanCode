(() => {
   // Aplicando el principio de responsabilidad unica.
   //* Priorizar la composicion frente a la herencia.

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
      email: string;
      role: string;
   }
   class User {
      private lastAccess: Date;
      public email: string;
      public role: string;

      constructor({ role, email }: UserProps) {
         this.lastAccess = new Date();
         this.email = email;
         this.role = role;
      }

      checkCredentials(): boolean {
         return true;
      }
   }

   interface SettingsProps {
      lastOpenFolder: string;
      workingDirectory: string;
   }
   class Settings {
      public workingDirectory: string;
      public lastOpenFolder: string;

      constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
         this.workingDirectory = workingDirectory;
         this.lastOpenFolder = lastOpenFolder;
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
   class UserSettings {
      public person: Person;
      public settings: Settings;
      public user: User;

      constructor({
         birdthdate,
         email,
         gender,
         lastOpenFolder,
         name,
         role,
         workingDirectory,
      }: UserSettingsProps) {
         this.person = new Person({ name, gender, birdthdate });
         this.settings = new Settings({ lastOpenFolder, workingDirectory });
         this.user = new User({ email, role });
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
   console.log(userSettings.user.checkCredentials());
})();
