import 'react-image-crop/dist/ReactCrop.css'
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useCurrentUser } from "./context/UserProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Nutrition as NutritionAdmin } from "./pagesAdmin/Nutrition";
import { Nutrition as NutritionTrainer } from "./pagesTrainer/Nutrition";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./ui/Admin";
import Trainer from "./ui/Trainer";
import Login from "./pagesAdmin/Login";
import Users from "./pagesAdmin/Users";
import Meals from './pagesCommon/Meals';
import Diets from './pagesTrainer/Diets';
import SignUp from "./pagesTrainer/SignUp";
import Workout from "./pagesAdmin/Workout";
import Account from "./pagesAdmin/Account";
import Support from "./pagesAdmin/Support";
import Financial from "./pagesAdmin/Financial";
import Trainees from "./pagesTrainer/Trainees";
import Messages from "./pagesTrainer/Messages";
import Packages from "./pagesTrainer/Packages";
import ProtectedRoute from "./ui/ProtectedRoute";
import Portfolio from "./pagesTrainer/Portfolio";
import PageNotFound from "./pagesAdmin/PageNotFound";
import Transcations from "./pagesTrainer/Transcations";
import DashboardAdmin from "./pagesAdmin/DashboardAdmin";
import TrainerReview from "./pagesAdmin/TrainerReview";
import checkTokenValidity from "./utils/checkTokenValidity";
import WorkoutTrainer from "./pagesTrainer/WorkoutTrainer";
import CompleteProfile from "./pagesTrainer/CompleteProfile";
import TrainersApproval from "./pagesAdmin/TrainersApproval";
import DashboardTrainer from "./pagesTrainer/DashboardTrainer";
import ProtectedRouteProfile from "./ui/ProtectedRouteProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
})

function App() {
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const token = localStorage.getItem("userToken"); // Retrieve the token from local storage
  const isValid = token ? checkTokenValidity(token) : "";
  useEffect(function () {
    if (isValid && token) {
      setUserToken(token)
      setUserId(isValid?.payload?.id);
      setUserRole(isValid?.payload?.role)
    };
  }, [setUserToken, setUserRole, setUserId, token, isValid])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />

          <Route path="admin" element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="trainer-approval" element={<TrainersApproval />} />
            <Route path="trainer-approval/trainer-profile/:id" element={<TrainerReview />} />
            <Route path="nutrition" element={<NutritionAdmin />} />
            <Route path="nutrition/meals" element={<Meals />} />
            <Route path="nutrition/meal/:id" element={<Meals />} />
            <Route path="workout" element={<Workout />} />
            <Route path="system-users" element={<Users />} />
            <Route path="account" element={<Account />} />
            <Route path="Financial" element={<Financial />} />
            <Route path="support" element={<Support />} />
          </Route>

          <Route path="trainer" element={
            <ProtectedRoute role="trainer">
              <Trainer />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashboardTrainer />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="trainees" element={<Trainees />} />
            <Route path="messages" element={<Messages />} />
            <Route path="nutrition" element={<NutritionTrainer />} />
            <Route path="nutrition/meals" element={<Meals />} />
            <Route path="nutrition/meal/:id" element={<Meals />} />
            <Route path="nutrition/diets" element={<Diets />} />
            <Route path="nutrition/diet/:id" element={<Diets />} />
            <Route path="workout" element={<WorkoutTrainer />} />
            <Route path="packages" element={<Packages />} />
            <Route path="transcations" element={<Transcations />} />
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
            backgroundColor: "#fff",
            color: "#333",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
