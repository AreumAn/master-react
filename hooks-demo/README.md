# Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Shortly, a Hook is a special function that lets you “hook into” React features.

# When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

---
## useState
`useState` is a Hook that lets you add React state to function components

## useEffect
The Effect Hook lets you perform side effects in function components.
It invokes right after redering. It depends on second param.

- When you want to invoke useEffect, only `mount`, not update.
```js
useEffect(() => {
        console.log('invoke, only mount');
    },[]);
```

- When you want to invoke useEffect, only `update`, not mount.
```js
/** Class **/
componentDidUpdate(prevProps, prevState) {
    if(prevProps.value !== this.props.value) {
        //TODO
    }
}

/** Function with useEffect **/
useEffect(() => {
    //TODO
}, [name]);
// Put value that you want to check update in array - second param
// Only re-run the effect if name changes
```

## useReducer
`useReducer` lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

## useMemo
`useMemo` does not trigger every time you change one of its dependencies. It doesn't trigger every time you change one of its dependencies.

## useCallback
To prevent create unnecessary function every time component re-render.

## `useMemo` vs `useCallback`
- useMemo: reuse string, number etc
- useCallback: reuse function

## useRef

---
# Custom Hooks
- https://github.com/nikgraf/react-hooks
- https://github.com/rehooks/awesome-react-hooks


---
# Reference

1. React- [React.Component](https://reactjs.org/docs/hooks-intro.html)
2. velopert - [learing react 08](https://github.com/velopert/learning-react)
3. [Blog](https://dev.to/devcord/react-hooks-useeffect-usecallback-usememo-3o42)

