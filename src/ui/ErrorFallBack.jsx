function ErrorFallBack({ error }) {
    // console.log(error.message)
    return (
        <div className="h-dvh flex items-center justify-center">
            <div className="bg-red-700 shadow overflow">
                <h1 className="text-2xl">something went wrong</h1>
                <h3>{error}🙄</h3>
            </div>
        </div>
    )
}

export default ErrorFallBack
