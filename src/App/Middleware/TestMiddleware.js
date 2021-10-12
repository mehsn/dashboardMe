export const TestMiddleware = store => next => action => {
    console.log(`Redux Log:`, action)
    next(action);
}