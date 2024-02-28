import PendingTrainerCard from "./PendingTrainerCard";

const trainers = [
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    { name: 'Ahmed Tarek', email: 'ahmedtarek@gmail.com', phone: '+20 100 982 1081' },
    // ... other trainers
];

function PendingTrainers() {
    return (
        <div className="container mx-auto p-4 rounded-md">
            <h1 className='text-blue-900 font-semibold mb-4 capitalize'>Trainers profile (8)</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {trainers.map((trainer, index) => <PendingTrainerCard key={index} trainer={trainer} />)}
            </div>
        </div>
    )
}

export default PendingTrainers
