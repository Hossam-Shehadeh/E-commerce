import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import UserContextProvider from './componants/web/context/User.jsx'
import CartContextProvider from './componants/web/context/Cart.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <QueryClientProvider client={queryClient}>
    <ToastContainer />
    <UserContextProvider>
    <CartContextProvider>
        <App />
    </CartContextProvider>

    </UserContextProvider>
    
    </QueryClientProvider>
    
    </>
    
  
)
