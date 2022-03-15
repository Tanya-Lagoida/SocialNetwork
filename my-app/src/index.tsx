import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/state';
import { Provider } from './StoreContext';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        {/*<App store={store} appState={store.getState()}*/}
        {/*     dispatch={store.dispatch.bind(store)}/>*/}
             <App appState={store.getState()} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};


store.subscribe(rerenderEntireTree)
rerenderEntireTree()



// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//   let state = store.getState();

//   rerenderEntireTree(state);
// });


reportWebVitals();
