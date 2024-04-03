import BreadCrumbs from "../ui/BreadCrumbs";
import TrainerReviewProfile from "../features/Admin/trainer approval/trainer profile/TrainerReviewProfile";

function TrainerReview() {
  return (
    <div className="space-y-2">
      <BreadCrumbs />
      <TrainerReviewProfile />
    </div>
  )
}

export default TrainerReview;