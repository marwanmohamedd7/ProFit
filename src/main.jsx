import React from 'react'
import App from './App.jsx'
import "./styles/index.css"
import ReactDOM from 'react-dom/client'
import ErrorFallBack from './ui/ErrorFallBack.jsx';
import 'react-photo-view/dist/react-photo-view.css';
import { ErrorBoundary } from 'react-error-boundary';
import { UserProvider } from './context/UserProvider.jsx'
import { MealProvider } from './context/MealProvider.jsx'
import { DietProvider } from './context/DietProvider.jsx'
import { MainNavProvider } from './context/MainNavProvider.jsx'
import { DarkModeProvider } from './context/DarkModeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.replace("/")}>
      <DarkModeProvider>
        <UserProvider>
          <DietProvider>
            <MealProvider>
              <MainNavProvider>
                <App />
              </MainNavProvider>
            </MealProvider>
          </DietProvider>
        </UserProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './styles/index.css';
// import { UserProvider } from './context/UserProvider.jsx';
// import { MealProvider } from './context/MealProvider.jsx';
// import { DietProvider } from './context/DietProvider.jsx';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallBack from './ui/ErrorFallBack.jsx';
// import { MainNavProvider } from './context/MainNavProvider.jsx';
// // import BuggyComponent from './ui/BuggyComponent.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ErrorBoundary FallbackComponent={ErrorFallBack}>
//       <UserProvider>
//         <DietProvider>
//           <MealProvider>
//             <MainNavProvider>
//               <App />
//             </MainNavProvider>
//             {/* <BuggyComponent /> */}
//           </MealProvider>
//         </DietProvider>
//       </UserProvider>
//     </ErrorBoundary>
//   </React.StrictMode>,
// );
