import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import { UserProvider } from './context/UserProvider.jsx'
import { MealProvider } from './context/MealProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </UserProvider>
  </React.StrictMode>,
)
