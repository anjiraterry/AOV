import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import 'antd/dist/antd';
import store from './app/store';
import { AuthProvider } from './context/AuthContext';
import App from './App'

ReactDOM.render(
<Router>
<AuthProvider>
    <Provider store={store}>
         <App/>
    </Provider>
    </AuthProvider>
</Router>
, document.getElementById('root'));