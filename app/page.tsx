'use client'
import { Button } from '@/components/ui/button'
const HomePage = () => {
	return (
		<div>
			<section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
				<div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>
					<h1 className='text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl'>
						A <span className='font-semibold'>free repository</span> for
						community
						<br className='hidden lg:block' />
						components using{' '}
						<span className='font-semibold underline decoration-primary'>
							Tailwind CSS
						</span>
					</h1>
					<p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
						Open source Tailwind UI components and templates to
						<br className='hidden lg:block' />
						bootstrap your new apps, projects or landing sites!
					</p>
					<div className='mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20'></div>
				</div>
				<div className='w-full mt-4 lg:mt-0 lg:w-1/2'>
					<img
						src='https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg'
						alt='tailwind css components'
						className='w-full h-full max-w-md mx-auto'
					/>
				</div>
			</section>

			{/* Pricing Plan Section */}

			<section className='py-16 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
							Choose Your Plan
						</h2>
						<p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
							Simple and transparent pricing. No hidden fees.
						</p>
					</div>

					<div className='grid gap-8 lg:grid-cols-3'>
						{/* Starter */}
						<div className='rounded-2xl border flex flex-col items-center text-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition'>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
									Starter
								</h3>
								<p className='mt-2 text-gray-600 dark:text-gray-400'>
									Perfect for personal blogs
								</p>
								<p className='mt-4'>
									<span className='text-4xl font-bold text-gray-900 dark:text-white'>
										$9
									</span>
									<span className='text-gray-600 dark:text-gray-400'>/mo</span>
								</p>
								<ul className='mt-6 space-y-3 text-gray-700 dark:text-gray-300'>
									<li>✅ 1 Blog Website</li>
									<li>✅ Basic Analytics</li>
									<li>✅ Community Support</li>
								</ul>

								<Button
									className='cursor-pointer mt-6 w-full rounded-lg py-2'
									variant='outline'
								>
									Get Started
								</Button>
							</div>
						</div>

						{/* Pro */}
						<div className='rounded-2xl flex flex-col items-center text-center border border-zinc-500 bg-white dark:border-zinc-200 dark:bg-gray-800 shadow-lg ring-2 dark:ring-zinc-200 ring-zinc-700'>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
									Pro
								</h3>
								<p className='mt-2 text-gray-600 dark:text-gray-400'>
									Great for professionals
								</p>
								<p className='mt-4'>
									<span className='text-4xl font-bold text-gray-900 dark:text-white'>
										$19
									</span>
									<span className='text-gray-600 dark:text-gray-400'>/mo</span>
								</p>
								<ul className='mt-6 space-y-3 text-gray-700 dark:text-gray-300'>
									<li>✅ 3 Blog Websites</li>
									<li>✅ Advanced Analytics</li>
									<li>✅ Priority Support</li>
								</ul>
								<Button
									className='cursor-pointer mt-6 w-full rounded-lg py-2'
									variant='outline'
								>
									Get Pro
								</Button>
							</div>
						</div>

						{/* Premium */}
						<div className='rounded-2xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition'>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
									Premium
								</h3>
								<p className='mt-2 text-gray-600 dark:text-gray-400'>
									Best for teams & businesses
								</p>
								<p className='mt-4'>
									<span className='text-4xl font-bold text-gray-900 dark:text-white'>
										$49
									</span>
									<span className='text-gray-600 dark:text-gray-400'>/mo</span>
								</p>
								<ul className='mt-6 space-y-3 text-gray-700 dark:text-gray-300'>
									<li>✅ Unlimited Blogs</li>
									<li>✅ Full Analytics</li>
									<li>✅ Dedicated Support</li>
								</ul>
								<Button
									className='cursor-pointer mt-6 w-full rounded-lg py-2'
									variant='outline'
								>
									Get Premium
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage
