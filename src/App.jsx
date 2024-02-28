import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import Workout from "./pages/Workout";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Transcations from "./pages/Transcations";
import TrainersApproval from "./pages/TrainersApproval";
import TrainerReview from "./pages/TrainerReview";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trainer-approval" element={<TrainersApproval />} />
          <Route path="trainer-approval/trainer-profile" element={<TrainerReview />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="workout" element={<Workout />} />
          <Route path="system-users" element={<Users />} />
          <Route path="account" element={<Account />} />
          <Route path="transcations" element={<Transcations />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
