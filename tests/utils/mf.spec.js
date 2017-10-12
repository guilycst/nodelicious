const mf = require('../../src/utils/mf.js');

describe('meta', () => {
    it('has expected properties', () => {
        let properties = ['dir', 'fileName'];
        let meta = Object.getOwnPropertyNames(mf.meta('./test.txt'));
        expect(meta.length);
        properties.forEach(p => expect(meta.hasOwnProperty(p)).toBeTruthy());
    });
});