class Observer {
  constructor() {
    this.observers = []
  }

  publish(val){
    this.observers.forEach(observer => observer(val))
    return this
  }

  subscribe(fn){
    this.observers.push(fn)
    return this
  }
}

export default Observer