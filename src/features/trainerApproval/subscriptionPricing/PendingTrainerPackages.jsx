import PendingTrainerPackagesTable from "./PendingTrainerPackagesTable"

function PendingTrainerPackages() {
    return (
        <div className="container max-w-7xl mx-auto p-4 sm:p-6 flex flex-col justify-start gap-6 rounded-md bg-white border">
            <h1 className="text-blue-900 font-bold text-xl capitalize">training packages</h1>
            <PendingTrainerPackagesTable />
        </div>
    )
}

export default PendingTrainerPackages
