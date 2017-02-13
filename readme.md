# Meidos
Your lovely and versatile Meidos
![preload](./img.gif)

# install
```
$ yarn add medios
```

# Usage
```js
import { Task } from 'medios'

const Task = new Queue(2)
let count = 0

Task.push(async next => {
  expect(++count).toBe(1)
  await next()
  expect(++count).toBe(4)
})

Task.push(next => {
  expect(++count).toBe(2)
  next()
})

Task.push( async next => {
  await next()
  expect(++count).toBe(5)
})

Task.push( next => {
  expect(++count).toBe(3)
})
```

```js
import { Message } from 'medios'

const message = new Message()
let count = 1

message.on('set', (value) => {
  count = value
})
message.emit('set', 1000)
expect(count).toBe(1000)

```

```js
import  { Observer } from 'medios'

const observer = new Observer()

observer.subscribe(val => {
  expect(++val).toBe(2)
})

observer.subscribe(val => {
  expect(--val).toBe(0)
})

observer.publish(1)
```
