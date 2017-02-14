class Queue {
  constructor(event) {
    this.concurrency = 1
    this.running = 0
    this.queue = []
    this.Event = event
  }

  set(args){
    Object.assign(this, args)
    return this
  }

  push(task) {
    this.queue.push(task)
    return this
  }

  run(task) {
    this.queue.push(task)
    this.next()
    return this
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      let task = this.queue.shift()
      task(this, () => {
        this.running--
        this.next()
      })
      this.running++
    }
  }
}

export default Queue