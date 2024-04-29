import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import { UserProvider } from './context/UserProvider.jsx'
import { MealProvider } from './context/MealProvider.jsx'
import { DietProvider } from './context/DietProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <DietProvider>
        <MealProvider>
          <App />
        </MealProvider>
      </DietProvider>
    </UserProvider>
  </React.StrictMode>,
)
