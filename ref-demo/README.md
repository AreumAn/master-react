# Refs and the DOM
Refs provide a way to access DOM nodes or React elements created in the render method.

## When to Use Refs
There are a few good use cases for refs:

1. Managing focus, text selection, or media playback.
2. Triggering imperative animations.
3. Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

## Use ref with callback function
```js
<input ref={(ref) => {this.input = ref}} />
```

## Use createRef
[Click here](https://reactjs.org/docs/refs-and-the-dom.html) to see more example about `Adding a Ref to a DOM Element`, `Adding a Ref to a Class Component`

```js
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
```

---
# Reference

1. React- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
2. velopert - [learing react 05](https://github.com/velopert/learning-react)

