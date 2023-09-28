(() => {
   function getMovieById(id: string): void {
      console.log({ id });
   }

   function getMovieCastById(movieId: string): void {
      console.log({ movieId });
   }

   // funcion para obtener el bio del actor por el id
   function getActorBioById(id: string): void {
      console.log({ id });
   }

   interface Movie {
      cast: Actor[];
      description: string;
      rating: number;
      title: string;
   }
   interface Actor {
      birthdate: Date;
      fullName: string;
   }

   function createMovie({ title, description, rating, cast }: Movie): void {
      console.log({ title, description, rating, cast });
   }

   // Crea un nuevo actor
   function createActor({ fullName, birthdate }: Actor): boolean {
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if (fullName === "fernando") return false;

      console.log("Crear actor");
      return true;
   }
})();
