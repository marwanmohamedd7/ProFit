import 'react-image-crop/dist/ReactCrop.css';
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useCurrentUser } from "./context/UserProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import checkTokenValidity from "./utils/checkTokenValidity";
import ProtectedRouteProfile from "./ui/ProtectedRouteProfile";
import { SocketProvider } from './context/SocketProvider';
import { useDarkMode } from './context/DarkModeProvider';
import Spinner from './ui/Spinner';

const Admin = lazy(() => import("./ui/Admin"));
const Trainer = lazy(() => import("./ui/Trainer"));
const Login = lazy(() => import("./pagesCommon/Login"));
const Users = lazy(() => import("./pagesAdmin/Users"));
const Meals = lazy(() => import('./pagesCommon/Meals'));
const Foods = lazy(() => import('./pagesCommon/Foods'));
const SignUp = lazy(() => import("./pagesTrainer/SignUp"));
const Workout = lazy(() => import("./pagesCommon/Workout"));
const Account = lazy(() => import("./pagesAdmin/Account"));
const Support = lazy(() => import("./pagesAdmin/Support"));
const PageNotFound = lazy(() => import('./ui/PageNotFound'));
const Transcations = lazy(() => import("./pagesCommon/Transcations"));
const Trainees = lazy(() => import("./pagesTrainer/Trainees"));
const Messages = lazy(() => import("./pagesTrainer/Messages"));
const Packages = lazy(() => import("./pagesTrainer/Packages"));
const Nutrition = lazy(() => import("./pagesCommon/Nutrition"));
const Portfolio = lazy(() => import("./pagesTrainer/Portfolio"));
const TraineeInfo = lazy(() => import('./pagesTrainer/TraineeInfo'));
const DietPlanFree = lazy(() => import('./pagesTrainer/DietPlanFree'));
const TrainerReview = lazy(() => import("./pagesAdmin/TrainerReview"));
const Dashboard = lazy(() => import("./pagesCommon/Dashboard"));
const TrainersApproval = lazy(() => import("./pagesAdmin/TrainersApproval"));
const CompleteProfile = lazy(() => import("./pagesTrainer/CompleteProfile"));
const DietPlanTrainer = lazy(() => import('./pagesTrainer/DietPlanTrainer'));
const DietPlanCustomized = lazy(() => import('./pagesTrainer/DietPlanCustomized'));

// before lazy loading
// dist / index.html                     0.71 kB │ gzip: 0.40 kB
// dist / assets / index - DrQyyKvq.css     70.70 kB │ gzip: 11.73 kB
// dist / assets / index - BGedsCX2.js   1, 496.58 kB │ gzip: 406.26 kB

// after lazy loading

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
});

function App() {
  const { isDarkMode } = useDarkMode();
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const token = localStorage.getItem("userToken"); // Retrieve the token from local storage
  const isValid = token ? checkTokenValidity(token) : "";
  useEffect(function () {
    if (isValid && token) {
      setUserToken(token)
      setUserId(isValid?.payload?.id);
      setUserRole(isValid?.payload?.role)
    };
  }, [setUserToken, setUserRole, setUserId, token, isValid]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense fallback={<div className={`h-dvh ${isDarkMode ? "bg-slate-900" : "bg-white"}`}><Spinner /></div>}>
          <Routes>
            <Route index element={<Navigate replace to={isValid?.payload?.role === 'admin' ? 'admin/dashboard' : isValid?.payload?.role === 'trainer' ? 'trainer/dashboard' : 'login'} />} />
            <Route path="admin" element={
              <ProtectedRoute role="admin">
                <Admin />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="trainer-approval" element={<TrainersApproval />} />
              <Route path="trainer-approval/trainer-profile/:id" element={<TrainerReview />} />
              <Route path="system-users/trainer-profile/:id" element={<TrainerReview />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="nutrition/foods" element={<Foods />} />
              <Route path="nutrition/foods/:id" element={<Foods />} />
              <Route path="nutrition/meals" element={<Meals />} />
              <Route path="nutrition/meals/:id" element={<Meals />} />
              <Route path="workout" element={<Workout />} />
              <Route path="system-users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="Financial" element={<Transcations />} />
              <Route path="support" element={<Support />} />
            </Route>

            <Route path="trainer" element={
              <ProtectedRoute role="trainer">
                <SocketProvider>
                  <Trainer />
                </SocketProvider>
              </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboard/trainee/:id" element={<TraineeInfo />} />
              <Route path="dashboard/diets/:id" element={<DietPlanCustomized />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="portfolio/diets" element={<DietPlanFree />} />
              <Route path="portfolio/diets/:id" element={<DietPlanFree />} />
              <Route path="trainees" element={<Trainees />} />
              <Route path="trainees/trainee/:id" element={<TraineeInfo />} />
              <Route path="trainees/diets/:id" element={<DietPlanCustomized />} />
              <Route path="trainees/trainee/diets/:id" element={<DietPlanCustomized />} />
              <Route path="messages" element={<Messages />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="nutrition/foods" element={<Foods />} />
              <Route path="nutrition/foods/:id" element={<Foods />} />
              <Route path="nutrition/meals" element={<Meals />} />
              <Route path="nutrition/meals/:id" element={<Meals />} />
              <Route path="nutrition/diets" element={<DietPlanTrainer />} />
              <Route path="nutrition/diets/:id" element={<DietPlanTrainer />} />
              <Route path="workout" element={<Workout />} />
              <Route path="packages" element={<Packages />} />
              <Route path="subscriptions" element={<Transcations />} />
            </Route>

            <Route path="complete-profile" element={<Navigate replace to="personal-information" />} />
            <Route path="complete-profile/:page" element={
              <ProtectedRouteProfile role="trainer">
                <CompleteProfile />
              </ProtectedRouteProfile>
            } />

            <Route path="*" element={<PageNotFound />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter >
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: isDarkMode ? "#334155" : "#fff",
            color: isDarkMode ? "#fff" : "#111827",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
