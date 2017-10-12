const mf = require('../../src/utils/mf.js');

describe('meta', () => {
    it('has expected properties', () => {
        let properties = ['dir', 'fileName'];
        let meta = mf.meta('./test.txt');
        properties.forEach(p => expect(meta.hasOwnProperty(p).toBeTruthy()));
    });
});