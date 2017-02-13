class Observer {
  constructor() {
    this.observers = []
  }

  publish(val){
    this.observers.forEach(observer => observer(val))
  }

  subscribe(fn){
    this.observers.push(fn)
  }
}

export default Observer