import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pagesAdmin/DashboardAdmin";
import DashboardTrainer from "./pagesTrainer/DashboardTrainer";
import Nutrition from "./pagesAdmin/Nutrition";
import Workout from "./pagesAdmin/Workout";
import Login from "./pagesAdmin/Login";
import Users from "./pagesAdmin/Users";
import Account from "./pagesAdmin/Account";
import Support from "./pagesAdmin/Support";
import Financial from "./pagesAdmin/Financial";
import TrainersApproval from "./pagesAdmin/TrainersApproval";
import TrainerReview from "./pagesAdmin/TrainerReview";
import PageNotFound from "./pagesAdmin/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Admin from "./ui/Admin";
import Trainer from "./ui/Trainer";
import Portfolio from "./pagesTrainer/Portfolio";
import Trainees from "./pagesTrainer/Trainees";
import Messages from "./pagesTrainer/Messages";
import NutritionTrainer from "./pagesTrainer/NutritionTrainer";
import WorkoutTrainer from "./pagesTrainer/WorkoutTrainer";
import Packages from "./pagesTrainer/Packages";
import Transcations from "./pagesTrainer/Transcations";
import ProtectedRoute from "./ui/ProtectedRoute";
import SignUp from "./pagesTrainer/SignUp";
import CompleteProfile from "./pagesTrainer/CompleteProfile";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route element={<AppLayout />}>
            <Route path="admin" element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<DashboardAdmin />} />
              <Route path="trainer-approval" element={<TrainersApproval />} />
              <Route path="trainer-approval/trainer-profile" element={<TrainerReview />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="workout" element={<Workout />} />
              <Route path="system-users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="Financial" element={<Financial />} />
              <Route path="support" element={<Support />} />
            </Route>
            <Route path="trainer" element={
              <ProtectedRoute requiredRole="trainer">
                <Trainer />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<DashboardTrainer />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="trainees" element={<Trainees />} />
              <Route path="messages" element={<Messages />} />
              <Route path="nutrition" element={<NutritionTrainer />} />
              <Route path="workout" element={<WorkoutTrainer />} />
              <Route path="packages" element={<Packages />} />
              <Route path="transcations" element={<Transcations />} />
            </Route>
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="complete-profile/:page" element={<CompleteProfile />} />
          <Route path="*" element={<PageNotFound />} />
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
            duration: 5000,
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
