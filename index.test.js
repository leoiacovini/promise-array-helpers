const { pmap, pfilter, preduce, pevery, psome, pforEach } = require('./index')

const values = [1,2,3]
const promises = values.map(v => Promise.resolve(v))

describe('on pmap', () => {
    test('mapping over values', () => {
        const mappedArray = pmap(values, v => v + 1);
        return expect(mappedArray).resolves.toEqual([2,3,4])
    });

    test('mapping over promises', () => {
        const mappedArray = pmap(promises, v => v + 1);
        return expect(mappedArray).resolves.toEqual([2,3,4])
    })
})

describe('on pfilter', () => {
    test('filtering over values', () => {
        const filteredArray = pfilter(values, v => v === 1)
        return expect(filteredArray).resolves.toEqual([1])
    });

    test('filtering over promises', () => {
        const filteredArray = pfilter(promises, v => v === 1)
        return expect(filteredArray).resolves.toEqual([1])
    });
})

describe('on preduce', () => {
    test('reducing over values', () => {
        const reducedValue = preduce(values, (acc, v) => acc + v)
        return expect(reducedValue).resolves.toBe(6)
    });

    test('reducing over promises', () => {
        const reducedValue = preduce(promises, (acc, v) => acc + v)
        return expect(reducedValue).resolves.toBe(6)
    })
})

describe('on pevery', () => {
    test('every over values', () => {
        const check = pevery(values, v => v !== 10)
        return expect(check).resolves.toBe(true)
    });

    test('every over promises', () => {
        const check = pevery(promises, v => v !== 10)
        return expect(check).resolves.toBe(true)
    })
})

describe('on psome', () => {
    test('some over values', () => {
        const check = psome(values, v => v === 2)
        return expect(check).resolves.toBe(true)
    });

    test('some over promises', () => {
        const check = psome(promises, v => v === 10)
        return expect(check).resolves.toBe(false)
    })
})

describe('on pforEach', () => {
    test('forEach over values', () => {
        const mockFn = jest.fn()
        const check = pforEach(values, mockFn)
        return check.then(v => expect(mockFn.mock.calls.length).toBe(3))
    });

    test('forEach over values', () => {
        const mockFn = jest.fn()
        const check = pforEach(promises, mockFn)
        return check.then(v => expect(mockFn.mock.calls.length).toBe(3))
    });
})