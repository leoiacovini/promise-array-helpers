# promise-array-helpers

A collection of functions to make it easier to work with Arrays and Promises together.

## Included Functions

The available function are: `pmap`, `preduce`, `pfilter`, `pforEach`, `papply`, `pevery` and `psome`.
They are supposed to work exatcly like their conterparties, but treating values and promise equaly. And in the
end returning an Promise with the result of the operation.

### Examples

```javascript
const list = [1, 2, Promise.resolve(3), Promise.resolve(4)]
pmap(list, (item) => item + 1) // Returns Promise<[2, 3, 4, 5]>
```

```javascript
const list = [Promise.resolve(3), Promise.resolve(4)]
pfilter(list, (item) => (item % 2) === 1) // Returns Promise<[3]>
```

```javascript
const list = [1, 2, Promise.resolve(3), Promise.resolve(4)]
preduce(list, 0, (acc, item) => acc + item) // Returns Promise<10>
```