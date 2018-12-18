# SampleAngularStreamIo

Sample Angular Application using Stream I/O patterns.

## Notes:

1. HTML > JS
1. Use a component library!
1. Containers are components that *compose* components. They should be responsible for passing data between effects and components.
1. Services should contain functions that take in an input observable called a Source and return output observables called a Sink.
1. Most components should be readonly and presentational. Components should take in values.
1. Separate infrastructure from domain. Domain services that *request* "side effects" are known as effects.
1. Effects should be the only things interacting with infrastructure.
1. Testing is painful. Less JS, less testing.
1. Don't use `tap` or `subscribe`. [Async provides performance improvements too!](https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794)
1. Angular Upgrade should only affect Infrastructure components
   1. Presentational components mostly immune due to simplicity.
   1. Effects mostly immune due as they are purely functional, but interactions with infrastructure may require changes.
   1. Containers immune due to interaction with domain effects and domain models.
1. Try to keep things as single responsible as possible. See `hideSpinner$` coupling.
1. Avoid passing around `Subjects`, convert them to observables with `asObservables`.

## Questions

1. Can we avoid `Subject`s completely by interacting with the `EventEmitters` directly and avoiding the callbacks?
