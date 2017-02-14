# Meidos
Your lovely and versatile Meidos


![preload](./img.gif)

# install
```
$ yarn add medios
```

# Usage
```js
import { Queue } from 'medios'

const Task = new Queue()
  let count = 0

  Task
    .set({concurrency: 1})
    .run(async (ctx, next) => {
      expect(++count).toBe(1)
      await next()
      expect(++count).toBe(4)
    })
    .run((ctx, next) => {
      expect(++count).toBe(2)
      next()
    })
    .run( async (ctx, next) => {
      await next()
      expect(++count).toBe(5)
    })
    .run((ctx, next) => {
      expect(++count).toBe(3)
    })
```

```js
import { Message } from 'medios'

const message = new Message()
  let count = 1

  message
    .on('set', (value) => {
      count = value
    })
    .emit('set', 1000)
      expect(count).toBe(1000)
    })

```

```js
import  { Observer } from 'medios'

const observer = new Observer()

  observer
    .subscribe(val => {
      expect(++val).toBe(2) 
    })
    .subscribe(val => {
      expect(--val).toBe(0)
    })
    .publish(1)
```
