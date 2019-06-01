const { Cart } = require('../../src/cart');
const { assert } = require('chai');
const { fakeProduct } = require('../fakes/fake-product');

suite('Cart', () => {

    test('should be createable', () => {
        assert.doesNotThrow(() => {
            new Cart()
        });
    });

    test('can return products', () => {
        const c = new Cart();
        assert.deepEqual(c.getProducts(), []);
    });

    test('can add product', () => {
        const c = new Cart();
        assert.equal(c.getProducts().length, 0);
        c.addProduct(fakeProduct);
        assert.equal(c.getProducts().length, 1);
    });

    test('can remove product', () => {
        const c = new Cart();
        c.addProduct(fakeProduct);
        c.removeProduct(fakeProduct);
        assert.equal(c.getProducts().length, 0);
    });

    test('should ignore removing not existed product', () => {
        const c = new Cart();
        c.removeProduct(fakeProduct);
        assert.equal(c.getProducts().length, 0);
    });

    test('can clear all', () => {
        const c = new Cart();
        c.addProduct(fakeProduct);
        c.addProduct(fakeProduct);
        c.addProduct(fakeProduct);
        assert.equal(c.getProducts().length, 3);
        c.clear();
        assert.equal(c.getProducts().length, 0);
    });

    test('should not share list of products between instances', () => {
        const c1 = new Cart();
        const c2 = new Cart();
        c1.addProduct(fakeProduct);
        assert.equal(c1.getProducts().length, 1);
        assert.equal(c2.getProducts().length, 0);
    });
});
