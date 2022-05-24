class Product {
  id: number;
  name: string;
  desc: string;
  price: number;

  constructor(id: number, name: string, desc: string, price: number = 0) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  getId() {
    return this.id;
  }
}

class Stock {
  list: Array<Product>;

  constructor() {
    this.list = [];
    this.init();
  }

  init() {
    this.list.push(new Product(1, 'Germinal 1', 'description germinal 1', 10));
    this.list.push(new Product(2, 'Germinal 2', 'description germinal 2', 20));
    this.list.push(new Product(3, 'Germinal 3', 'description germinal 3', 30));
    this.list.push(new Product(4, 'Germinal 4', 'description germinal 4', 40));
    this.list.push(new Product(5, 'Germinal 5', 'description germinal 5', 50));
    this.list.push(new Product(6, 'Germinal 6', 'description germinal 6', 60));
    this.list.push(new Product(7, 'Germinal 7', 'description germinal 7', 70));
    this.list.push(new Product(8, 'Germinal 8', 'description germinal 8', 80));
    this.list.push(new Product(9, 'Germinal 9', 'description germinal 9', 90));
    this.list.push(new Product(10, 'Germinal 10', 'description germinal 10', 100));
    this.list.push(new Product(11, 'Germinal 11', 'description germinal 11', 110));
  }

  getList() {
    return this.list;
  }

  getProdById(id: number): Product | null {
    this.list.filter((product) => product.id === id);

    if (this.list) return this.list[0];

    return null;
  }
}

class Cart {
  list: number[];

  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  addInCart(id: number) {
    let elemId = null;

    for (const elId in this.list) {
      console.log(elId);

      if (Number(elId) === id) {
        elemId = id;
      }
    }

    if (elemId) {
      this.addExistedElem(elemId);
    } else {
      this.addNew(id);
    }
  }

  removeFromCard(id: number) {
    let elemId = null;

    for (const elId in this.list) {
      if (Number(elId) === id) {
        elemId = id;
      }
    }

    if (elemId) {
      if (this.list[id] === 1) {
        delete this.list[id];
      } else {
        this.subExistedElem(id);
      }
    }
  }

  addNew(id: number) {
    this.list[id] = 1;
  }

  addExistedElem(id: number) {
    let val = this.list[id];
    this.list[id] = ++val;
  }

  subExistedElem(id: number) {
    let val = this.list[id];
    this.list[id] = --val;
  }

  getProductQuantity() {
    let total = 0;
    for (const el in this.list) {
      total = total + this.list[el];
    }

    return total;
  }

  getTotalPrice(stock: Stock): number {
    let total = 0;
    for (const el in this.list) {
      let prod = stock.getProdById(Number(el));

      if (prod) {
        total = total + (this.list[el] + prod.price);
      }
    }
    return total;
  }
}
