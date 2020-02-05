# Counter
You can check Lifecycle with console log
1. When the user `add number` button click, number is going up on browser
2. If the number is multiple of 3, it will not re-render
3. After click `get color` button, it will get random color code. Then, click `add number` will show updated number and color.

---
# Understanding LifeCycle

## prefix
- `Will` + A: Invoke it **Before A**
- `Did` + A: Invoke it **After A**

## Mount, Unmount
- **Mount**: represent component on browser page
- **UnMount**: disappear component on browser page

## Mount
Call these methods when represent component on browser page(mount)

1. **constructor**
    - Initializing local state by assigning an object to `this.state`
    - Binding event handler methods to an instance
2. **getDerivedStateFromProps**
    - To use to set state from props
3. **render**
    - redering UI
4. **componentDidMount**
    - It is invoked immediately after a component is mounted

## Update
component update when `update props`, `update state`, `re-rendering parents component`, `this.forceUpdate`

1. constructor
2. getDerivedStateFromProps
3. **shouldComponentUpdate**
   - Decide if re-render or not
4. render
5. **getSnapshotBeforeUpdate**
   - It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
6. componentDidMount

## Unmonut
remove component from DOM

1. **componentWillUnmount**
   - It is invoked before component disappear on browser

## others
1. componentDidCatch(): To show Error on browser when it is not in develpment environment

## 
![lifecycle diagram](https://www.truecodex.com/data/react/lifecycle-diagram.png)
## TODO
- Learn static getDerivedStateFromError()

---
# Reference

1. React- [React.Component](https://reactjs.org/docs/react-component.html#componentdidmount)
2. velopert - [learing react 07](https://github.com/velopert/learning-react)
3. Lifecycle image -[truecodex](https://www.truecodex.com/course/react-js/react-component-lifecycle-methods)

