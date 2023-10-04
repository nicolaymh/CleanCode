import { PostService } from "./05-dependency-b";
import { JsonDataBaseService, LocalDataBaseService, WebApiPoostService } from "./05-dependency-c";

// Aplicar inyeccion de dependencias, inversion de dependencias y sustitucion de Liskov.

// Main
(async () => {
   // const provider = new LocalDataBaseService();
   // const provider = new JsonDataBaseService();
   const provider = new WebApiPoostService();

   const postService = new PostService(provider);

   const posts = await postService.getPosts();

   console.log({ posts });
})();
