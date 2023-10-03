(() => {
   // Aplicando el principio de responsabilidad única
   // Prioriza la composición frente a la herencia

   type Gender = "M" | "F";

   interface PersonProps {
      firstName: string;
      lastName: string;
      gender: Gender;
      birthdate: Date;
   }

   class Person {
      public firstName: string;
      public lastName: string;
      public gender: Gender;
      public birthdate: Date;

      constructor({ lastName, firstName, gender, birthdate }: PersonProps) {
         this.birthdate = birthdate;
         this.firstName = firstName;
         this.gender = gender;
         this.lastName = lastName;
      }
   }

   interface UserProps {
      email: string;
      role: string;
   }
   class User {
      public email: string;
      public role: string;
      private lastAccess: Date;

      constructor({ email, role }: UserProps) {
         this.lastAccess = new Date();
         this.email = email;
         this.role = role;
      }

      checkCredentials() {
         return true;
      }
   }

   interface SettingsProps {
      lastFolderOpen: string;
      workingDirectory: string;
   }

   class Settings {
      public workingDirectory: string;
      public lastFolderOpen: string;

      constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
         this.workingDirectory = workingDirectory;
         this.lastFolderOpen = lastFolderOpen;
      }
   }

   // Nuevo User Settings
   interface UserSettingsProps {
      birthdate: Date;
      email: string;
      firstName: string;
      gender: Gender;
      lastFolderOpen: string;
      lastName: string;
      role: string;
      workingDirectory: string;
   }

   class UserSettings {
      public person: Person;
      public user: User;
      public settings: Settings;

      constructor({
         birthdate,
         email,
         firstName,
         gender,
         lastFolderOpen,
         lastName,
         role,
         workingDirectory,
      }: UserSettingsProps) {
         this.person = new Person({
            birthdate,
            gender,
            lastName,
            firstName,
         });
         this.user = new User({ email, role });
         this.settings = new Settings({ workingDirectory, lastFolderOpen });
      }
   }

   const userSettings = new UserSettings({
      birthdate: new Date("1987/03/14"),
      email: "nicolacho@google.com",
      firstName: "Nicolay",
      gender: "M",
      lastFolderOpen: "/home",
      lastName: "Moreno",
      role: "Admin",
      workingDirectory: "/usr/home",
   });

   console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
})();
