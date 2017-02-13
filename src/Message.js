class Message {
  constructor(){
    this.messages = {}
  }
  off(name) {
    delete this.messages[name]
  }

  emit(name, ...args) {
    this.messages[name] &&
    this.messages[name].forEach(callback => callback(...args))
  }

  on(name, callback) {
    let topic = this.messages[name]
    if(!topic) {
      this.messages[name] = []
    }
    this.messages[name].push(callback)
  }
}

export default Message