1. What problem does the context API help solve?

// Answer

The context API solves the problem of needing to prop drill data in order to be able to access it in child components, even though you may need it in different places in a split tree or not for many of the middle components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

// Answer

`actions` tell our reducer which case to select, and provide the data for the reducer to interpret. The `reducer` is a machine that takes in an `action` type and based on that type, interprets the data being sent and update the state tree accordingly. The `store` in a Redux application is the single source of truth containing our state tree because it is the read only state object that contains all state values we can access globally in our app and in a Redux application should be used for any application-wide state and logic.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

// Answer

Application state is state that will influence the UI of our entire application, i.e. it has cascading effects and will pertain to the experience of the user across the application. Component state is specific to one very niche part of the application, and tends to stay contained there sort in-between until the user or an external change drives a larger change in the application state which incorporates that component state. It can also stay compartmentalized however.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

// Answer

`redux-thunk` is just middleware that allows us to use thunks in our redux application. A thunk is a function which returns a function. In this case, `redux-thunk` is meant to sit between our `action-creators` and our reducer, intercepting dispatched actions and allowing us to run asyncrhonous operations in the app.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

// Answer

I love Redux because its clean and formulaic in a satisfying way. How can you beat pure functions? You can't. It's like ASMR for coding.
