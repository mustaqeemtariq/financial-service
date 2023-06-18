export const PageNotFound = () => {
	return (
		<main className="relative isolate">
			<img
				src="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
			/>
			<div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
				<p className="text-base font-semibold leading-8 text-white">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
					Page not found
				</h1>
				<p className="mt-4 text-base text-white/70 sm:mt-6">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-10 flex justify-center">
					<a href="/" className="text-sm font-semibold leading-7 text-white">
						<span aria-hidden="true">&larr;</span> Back to home
					</a>
				</div>
			</div>
		</main>
	)
}
