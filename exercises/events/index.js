// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    // for (let i of this.events.keys()) {
    //   if (i === eventName) {
    //     this.events[eventName]
    //   }
    // }

    if (!this.events[eventName]) {
      return;
    }
    for (let fn of this.events[eventName]) {
      fn();
    }
    
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
