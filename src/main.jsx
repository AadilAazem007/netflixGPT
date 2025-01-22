import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistor, store } from './utils/appStore.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
)
