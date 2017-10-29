const mf = require('../../src/utils/mf.js');

describe('meta', () => {
    it('has expected properties', () => {
        let properties = ['dir', 'fileName'];
        let meta = Object.getOwnPropertyNames(mf.meta('./test.txt'));
        expect(meta.length).toBe(properties.length);
        properties.forEach(p => expect(meta.indexOf(p) > -1).toBeTruthy()); //Is it a good idea too assert inside a loop?
    });

    it('has expected values', () => {
        let meta = mf.meta('./test.txt');
        console.log(meta)/
        expect(meta.dir).toBe('./');
        expect(meta.fileName).toBe('test.txt');
    });
});