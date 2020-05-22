
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
//   }


// const persistedReducer = persistReducer(persistConfig, rootReducer)
export default function configureStore(initialState = {}) {

    // const devTools = window && window.devToolsExtension ? window.devToolsExtension() : f => f;
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    console.log('devTools :>> ', devTools);

    // const middlewares = applyMiddleware(
    //     thunk
    // );

    const finalMiddlewares = compose(
        // middlewares,
        devTools
    )

    const store = createStore(
        // persistedReducer,
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    console.log('store :>> ', store);
    // let persistor = persistStore(store);
    return store
}