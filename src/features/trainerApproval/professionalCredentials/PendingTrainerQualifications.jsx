function PendingTrainerQualifications() {
    const qualifications = [
        // Add your qualifications images paths and descriptions here
        { image: "/uifaces-popular-image (1).jpg" },
        { image: "/uifaces-popular-image (1).jpg" },
        { image: "/uifaces-popular-image.jpg" },
        { image: "/uifaces-popular-image (1).jpg" },
        { image: "/uifaces-popular-image.jpg" },
        { image: "/uifaces-popular-image (1).jpg" },
        { image: "/uifaces-popular-image.jpg" },
        { image: "/uifaces-popular-image (1).jpg" },
        { image: "/uifaces-popular-image.jpg" },
        { image: "/uifaces-popular-image.jpg" },
    ];

    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Qualifications and Achievements*</h2>
            <div className="flex flex-wrap gap-1">
                {qualifications.map((qual, index) => (
                    <img key={index} src={qual.image} alt={qual.description} className="w-28 h-28 rounded-md" />
                ))}
            </div>
        </section>
    )
}

export default PendingTrainerQualifications
