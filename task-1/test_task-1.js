mocha.setup('bdd');
const assert = chai.assert;

describe( "getChars", function() {

    it( "выводит false если передана строка", function() {
        assert.strictEqual( getChars('3'), false );
    });

    it( "выводит false если передано отрицательное число", function() {
        assert.strictEqual( getChars(-5), false );
    });

    it( "выводит false если передано не целое число", function() {
        assert.strictEqual( getChars(2.7), false );
    });

    it( "выводит 'x' если функция вызвана без параметров", function() {
        assert.strictEqual( getChars(), 'x' );
    });

    it( "выводит 'x' если передано 1", function() {
        assert.strictEqual( getChars(1), 'x' );
    });

    it( "выводит 'xxx' если передано 3", function() {
        assert.strictEqual( getChars(3), 'xxx' );
    });

    it( "выводит 'xxxxxxx' если передано 7", function() {
        assert.strictEqual( getChars(7), 'xxxxxxx' );
    });

});

mocha.run();
