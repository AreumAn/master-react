const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('Pre State: ', store.getState());
    console.log('Action: ', action);

    next(action);

    console.log('Next State: ', store.getState());
    console.groupEnd();
}

export default loggerMiddleware;
