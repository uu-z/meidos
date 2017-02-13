class Message {
  constructor(event){
    this.messages = {}
    this.event = event
  }

  observer(name, fn) {
    if(this.event) {
      this.event.emit('message:observer', name, fn)
    }
    return this
  }

  off(name) {
    delete this.messages[name]
    return this
  }

  emit(name, ...args) {
    this.messages[name] &&
    this.messages[name].forEach(callback => callback(...args))
    return this
  }

  on(name, callback) {
    let topic = this.messages[name]
    if(!topic) {
      this.messages[name] = []
    }
    this.messages[name].push(callback)
    return this
  }
}

export default Message