type Size = "" | "S" | "M" | "XL";

class Product {
   constructor(public name: string = "", public price: any = 0, public size: Size = "") {}

   isProductReady(): boolean {
      for (const key in this) {
         switch (typeof this[key]) {
            case "string":
               if ((<string>(<unknown>this[key])).length <= 0) throw Error(`${key} is empty`);
               break;
            case "number":
               if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is empty`);
               break;

            default:
               throw Error(`${typeof this[key]} is not supported`);
         }
      }

      return true;
   }

   toString() {
      for (const key in this) {
         console.log(typeof this[key]);
      }

      if (!this.isProductReady) return;

      return `${this.name} (${this.price}), ${this.size}`;
   }
}

(() => {
   const bluePants = new Product("Blue pants", 12, "XL");
   console.log(bluePants.toString());
})();
