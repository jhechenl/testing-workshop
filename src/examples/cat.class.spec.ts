import { Cat } from './cat.class';

describe('Cat', () => {
  let cats: Cat;

  beforeEach(async () => {
    cats = new Cat();
  });

  it('should be defined', () => {
    expect(cats).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of cats', () => {
      const catsArray = cats.findAll();
      expect(catsArray.length).toBe(2);
      expect(catsArray).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            age: expect.any(Number),
          }),
        ]),
      );
    });
  });
});
