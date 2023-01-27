export class Cat {
  cats = [
    {
      id: 1,
      name: 'Cat #1',
      age: 5,
      breed: 'Breed #1',
    },

    {
      id: 2,
      name: 'Cat #2',
      age: 7,
      breed: 'Breed #5',
    },
  ];

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }
}
