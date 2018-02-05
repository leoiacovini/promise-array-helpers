/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated 
 * @param {Function} fn Function to be applied by in the array of values
 */
const papply = (plist, fn) => {
    return Promise.all(plist).then(pl => fn(pl))
}

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated
 * @param {Function} fn Function to be applied by the map function
 */
const pmap = (plist, fn) => papply(plist, pl => pl.map(fn))

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated
 * @param {Function} fn Function to be applied by the filter function
 */
const pfilter = (plist, fn) => papply(plist, pl => pl.filter(fn))

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated
 * @param {Function} fn Function to be applied by the reduce function
 * @param {Any} [initialValue] Optional reduce initial value
 */
const preduce = (plist, fn, initialValue) => papply(plist, pl => {
    if (initialValue === undefined) {
        return pl.reduce(fn)
    } else {
        return pl.reduce(fn, initialValue)
    }
})

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated 
 * @param {Function} fn Function to be applied by the every function
 */
const pevery = (plist, fn) => papply(plist, pl => pl.every(fn))

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated
 * @param {Function} fn Function to be applied by the some function
 */
const psome = (plist, fn) => papply(plist, pl => pl.some(fn))

/**
 * 
 * @param {Array} plist Array of values or Promises to be iterated 
 * @param {Function} fn Function to be applied by the forEach function
 */
const pforEach = (plist, fn) => papply(plist, pl => pl.forEach(fn))

const papplyIf = (p, fn, elseFn) => {
    return p.then(v => {
        if (v) {
            return fn(v)
        } else {
            return elseFn() || v
        }
    })
}

module.exports = { pmap, pfilter, preduce, pevery, psome, pforEach }