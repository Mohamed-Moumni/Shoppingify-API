type SVGProps = React.SVGProps<SVGSVGElement>;

export function IconRefresh(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 1024 1024'
			xmlns='http://www.w3.org/2000/svg'
			fill='currentColor'
			{...props}
		>
			<path d='M512 213.333V94.293c0-19.2-23.04-28.586-36.267-14.933L313.6 241.067c-8.533 8.533-8.533 21.76 0 30.293l161.707 161.707c13.653 13.226 36.693 3.84 36.693-15.36v-119.04c159.147 0 285.013 145.92 250.027 311.04-20.054 96.853-98.56 174.933-194.987 194.986-152.32 32-288-72.533-308.48-213.76a42.667 42.667 0 00-41.813-36.266c-25.6 0-46.08 22.613-42.667 48.213 26.453 187.307 204.8 325.973 406.613 286.72 133.12-26.027 240.214-133.12 266.24-266.24C889.173 404.48 722.773 213.333 512 213.333z' />
		</svg>
	);
}

export function IconList(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M8 6l13 .001m-13 6h13m-13 6h13M3.5 6h.01m-.01 6h.01m-.01 6h.01M4 6a.5.5 0 11-1 0 .5.5 0 011 0zm0 6a.5.5 0 11-1 0 .5.5 0 011 0zm0 6a.5.5 0 11-1 0 .5.5 0 011 0z'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export function IconStatistic(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 18 18'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g
				transform='translate(-919 -2061) translate(100 1960) translate(816 98)'
				stroke='none'
				fill='none'
				fillRule='evenodd'
			>
				<path d='M0 0L24 0 24 24 0 24z' />
				<path
					d='M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm2 2H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
}

export function IconShopCart(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g
				fill='none'
				stroke='currentColor'
				strokeMiterlimit={10}
				strokeWidth={1.8}
			>
				<circle
					cx={10.07}
					cy={20.59}
					r={1.91}
					fill='currentColor'
				/>
				<circle
					cx={18.66}
					cy={20.59}
					r={1.91}
					fill='currentColor'
				/>
				<path d='M.52 1.5h2.66a2.87 2.87 0 012.74 2l3.19 10.41h-.47a2.39 2.39 0 00-2.39 2.39 2.39 2.39 0 002.39 2.38h10' />
				<path d='M7.21 5.32L22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91' />
			</g>
		</svg>
	);
}

export function IconEdit(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3.99 16.854l-1.314 3.504a.75.75 0 00.966.965l3.503-1.314a3 3 0 001.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 00-.687 1.068zm12.249-12.63l1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z'
				fill='currentColor'
			/>
		</svg>
	);
}

export function IconSearch(props: SVGProps) {
	return (
		<svg
			viewBox='0 0 1024 1024'
			xmlns='http://www.w3.org/2000/svg'
			fill='currentColor'
			overflow='hidden'
			{...props}
		>
			<path d='M661.333 597.333h-33.706l-11.947-11.52a277.333 277.333 0 0063.147-227.84C658.773 239.36 559.787 144.64 440.32 130.133A277.547 277.547 0 00130.133 440.32c14.507 119.467 109.227 218.453 227.84 238.507a277.333 277.333 0 00227.84-63.147l11.52 11.947v33.706l181.334 181.334c17.493 17.493 46.08 17.493 63.573 0 17.493-17.494 17.493-46.08 0-63.574l-180.907-181.76zm-256 0c-106.24 0-192-85.76-192-192s85.76-192 192-192 192 85.76 192 192-85.76 192-192 192z' />
		</svg>
	);
}
