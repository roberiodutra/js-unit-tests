const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('TESTE 1', () => {
    expect(createMenu()).toHaveProperty('fetchMenu'); 
    expect(typeof createMenu().fetchMenu).toBe('function');
  });

  it('TESTE 2', () => {
    const cKeys = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu());
    expect(cKeys).toEqual(['food', 'drink']);
  });

  it('TESTE 3', () => {
    const obj = { food: {}, drink: {} };
    expect(createMenu(obj).fetchMenu()).toEqual({ food: {}, drink: {} });
  });

  it('TESTE 4', () => {
    expect(createMenu.consumption).toEqual([]);
  });
  
  it('TESTE 5', () => {
    createMenu.order('coxinha');
    expect(createMenu).toHaveProperty('consumption', ['coxinha']);
  });

  it('TESTE 6', () => {
    createMenu.order('agua');
    createMenu.order('sopa');
    createMenu.order('sashimi');
    expect(createMenu.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);
  });

  it('TESTE 7', () => {
    createMenu.order('coxinha');
    expect(createMenu.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi", "coxinha"]);
  });

  it('TESTE 8', () => {
    expect(createMenu.pay()).toBe(40.37);
  });
});
