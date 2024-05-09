import React from 'react'
import App from './App.jsx'
import "./styles/index.css"
import ReactDOM from 'react-dom/client'
import { UserProvider } from './context/UserProvider.jsx'
import { MealProvider } from './context/MealProvider.jsx'
import { DietProvider } from './context/DietProvider.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './ui/ErrorFallBack.jsx'
import { MainNavProvider } from './context/MainNavProvider.jsx'
// import BuggyComponent from './ui/BuggyComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <UserProvider>
        <DietProvider>
          <MealProvider>
            <MainNavProvider>
              <App />
            </MainNavProvider>
            {/* <BuggyComponent />  */}
          </MealProvider>
        </DietProvider>
      </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
