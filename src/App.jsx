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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route element={<Admin />}>
            <Route path="admin" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="admin/dashboard" element={<DashboardAdmin />} />
            <Route path="admin/trainer-approval" element={<TrainersApproval />} />
            <Route path="admin/trainer-approval/trainer-profile" element={<TrainerReview />} />
            <Route path="admin/nutrition" element={<Nutrition />} />
            <Route path="admin/workout" element={<Workout />} />
            <Route path="admin/system-users" element={<Users />} />
            <Route path="admin/account" element={<Account />} />
            <Route path="admin/Financial" element={<Financial />} />
            <Route path="admin/support" element={<Support />} />
          </Route>
          <Route element={<Trainer />}>
            <Route path="trainer" element={<Navigate replace to="/trainer/dashboard" />} />
            <Route path="trainer/dashboard" element={<DashboardTrainer />} />
            <Route path="trainer/portfolio" element={<Portfolio />} />
            <Route path="trainer/trainees" element={<Trainees />} />
            <Route path="trainer/messages" element={<Messages />} />
            <Route path="trainer/nutrition" element={<NutritionTrainer />} />
            <Route path="trainer/workout" element={<WorkoutTrainer />} />
            <Route path="trainer/packages" element={<Packages />} />
            <Route path="trainer/transcations" element={<Transcations />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
