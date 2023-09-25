class PubSub {
  constructor() {
    this.subscribers = new Map();
  }

  subscribe(eventName, func) {
    if (!this.subscribers.has(eventName)) {
      this.subscribers.set(eventName, new Set());
    }
    this.subscribers.get(eventName).add(func);

    return {
      unsubscribe: () => {
        this.subscribers.get(eventName).delete(func);
        if (this.subscribers.get(eventName).size === 0) {
          this.subscribers.delete(eventName);
        }
      },
    };
  }

  publish(eventName, ...args) {
    if (this.subscribers.has(eventName)) {
      this.subscribers.get(eventName).forEach((fn) => {
        fn(...args);
      });
    }
  }
}

// let pubsub1 = new PubSub();
// let addMovies = (movie) => {
//   console.log(`This new movie ==> ${movie} added to the list`);
// };
// let addActors = (actor) => {
//   console.log(`This new actor ==>${actor} added to the list`);
// };
// let firstSub = pubsub1.subscribe('firstSub', addMovies);
// let secondSub = pubsub1.subscribe('secondSub', addActors);
// pubsub1.publish('firstSub', 'movie1'); // Output: This new movie1 added to the list
// pubsub1.publish('secondSub', 'actor1'); // Output: This new actor1 added to the list
// firstSub.unsubscribe()
// pubsub1.publish('secondSub', 'Jawan'); 

class PubSub2{
  constructor(){
    this.tracker ={}
  }
  subscribe(eventName,func){
    if(this.tracker[eventName]){
 this.tracker[eventName].push(func)
    }
    this.tracker[eventName] = [func]
    return{
      unsubscribe:()=>{
        let funcs = this.tracker[eventName]
        let idx = funcs.indexOf(func)
        if(idx >-1){
          funcs.splice(idx,1)
        }
      }
    }
  }
  publish(eventName,...args){
    let funcs = this.tracker[eventName]
    if(Array.isArray(funcs)){
      funcs.forEach((fn)=>{
        fn(...args)
      })
    }
  }
}

let pubsub1 = new PubSub2();
let addMovies = (movie) => {
  console.log(`This new movie ==> ${movie} added to the list`);
};
let addActors = (actor) => {
  console.log(`This new actor ==>${actor} added to the list`);
};
let firstSub = pubsub1.subscribe('firstSub', addMovies);
let secondSub = pubsub1.subscribe('secondSub', addActors);
pubsub1.publish('firstSub', 'movie1'); // Output: This new movie1 added to the list
pubsub1.publish('secondSub', 'actor1'); // Output: This new actor1 added to the list
firstSub.unsubscribe()
pubsub1.publish('secondSub', 'Jawan'); 