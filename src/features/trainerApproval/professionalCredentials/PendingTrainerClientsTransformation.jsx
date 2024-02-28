function PendingTrainerClientsTransformation() {
    const clientTransformations = [
        // Add your client transformation images paths and descriptions here
        {
            imageBefore: "/uifaces-popular-image (1).jpg",
            imageAfter: "/uifaces-popular-image.jpg",
            title: 'محمد أنور',
            description1: 'مصطفى داود و محمد أنور و شريف علي عمار',
            description2: 'رشاد ميلاد مقابلة محمد أنور و محمد أبو العينين'
        },
        {
            imageBefore: "/uifaces-popular-image (1).jpg",
            imageAfter: "/uifaces-popular-image.jpg",
            title: 'محمد أنور',
            description1: 'مصطفى داود و محمد أنور و شريف علي عمار',
            description2: 'رشاد ميلاد مقابلة محمد أنور و محمد أبو العينين'
        },
        {
            imageBefore: "/uifaces-popular-image (1).jpg",
            imageAfter: "/uifaces-popular-image.jpg",
            title: 'محمد أنور',
            description1: 'مصطفى داود و محمد أنور و شريف علي عمار',
            description2: 'رشاد ميلاد مقابلة محمد أنور و محمد أبو العينين'
        },
        {
            imageBefore: "/uifaces-popular-image (1).jpg",
            imageAfter: "/uifaces-popular-image.jpg",
            title: 'محمد أنور',
            description1: 'مصطفى داود و محمد أنور و شريف علي عمار',
            description2: 'رشاد ميلاد مقابلة محمد أنور و محمد أبو العينين'
        },
        {
            imageBefore: "/uifaces-popular-image (1).jpg",
            imageAfter: "/uifaces-popular-image.jpg",
            title: 'محمد أنور',
            description1: 'مصطفى داود و محمد أنور و شريف علي عمار',
            description2: 'رشاد ميلاد مقابلة محمد أنور و محمد أبو العينين'
        },
        // { imageBefore: "/uifaces-popular-image (1).jpg", imageAfter: "/uifaces-popular-image.jpg" },
    ];

    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Clients Transformation Photos (optional)</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {clientTransformations.map((transformation, index) => (
                    <div key={index} className="flex bg-gray-50 items-center flex-wrap xl:flex-nowrap gap-2 px-4 py-4 shadow rounded-lg">
                        <img src={transformation.imageBefore} alt="Before" className="w-28 h-28 rounded-md" />
                        <img src={transformation.imageAfter} alt="After" className="w-28 h-28 rounded-md" />
                        <div className="ml-2 flex flex-col gap-2">
                            <h4 className="text-lg text-blue-700 font-bold">{transformation.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">
                                {transformation.description1}
                                {transformation.description2}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default PendingTrainerClientsTransformation
