import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './redux/store/store';

ReactDOM.render(
<Provider store={store}>

<ConnectedRouter history={history}>
<App />
</ConnectedRouter>

</Provider>
, document.getElementById('root'));
registerServiceWorker();
