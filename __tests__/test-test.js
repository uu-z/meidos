import Meidos, {Queue, Message, Observer} from '../dist'

describe('test', () => {
  it('simple test', () => {

    expect(Meidos).toBeDefined()
    expect(Queue).toBeDefined()
    expect(Message).toBeDefined()
    expect(Observer).toBeDefined()
    
  })

  it('task should support async', () => {
    const Task = new Queue()
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
  })

  it('Message should run successful', () => {
    const message = new Message()
    let count = 1

    message.on('set', (value) => {
      count = value
    })
    message.emit('set', 1000)
    expect(count).toBe(1000)
  })

  it('Observer should run successful', () => {
    const observer = new Observer()

    observer.subscribe(val => {
      expect(++val).toBe(2) 
    })

    observer.subscribe(val => {
      expect(--val).toBe(0)
    })

    observer.publish(1)

  })
})