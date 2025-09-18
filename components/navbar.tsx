// components/Navbar.tsx
'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
export default function Navbar() {
	return (
		<nav className='bg-background/50 backdrop-blur sticky top-0 z-50 border-b px-6'>
			<div className='mx-auto sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<Link href='/' className='text-2xl font-bold'>
							HassanBlog
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className='hidden md:flex items-center space-x-8'>
						<Link
							className='hover:scale-105 transition-transform duration-300 font-semibold hover:font-bold'
							href='/'
						>
							Home
						</Link>
						<Link
							className='hover:scale-105 transition-transform duration-300 font-semibold hover:font-bold'
							href='/blog'
						>
							Blog
						</Link>
						<Link
							className='hover:scale-105 transition-transform duration-300 font-semibold hover:font-bold'
							href='/about'
						>
							About
						</Link>
						<Link
							className='hover:scale-105 transition-transform duration-300 font-semibold hover:font-bold'
							href='/contact'
						>
							Contact
						</Link>
						<div className='flex items-center space-x-1'>
							<Button className='cursor-pointer' variant='outline'>
								Login
							</Button>
							<Button className='cursor-pointer' variant='outline'>
								Signup
							</Button>
							<ModeToggle />
						</div>
					</div>

					{/* Mobile Button */}
					<div className='md:hidden flex items-center'>
						<Sheet>
							<SheetTrigger className='mx-2'>
								<Menu />
							</SheetTrigger>
							<ModeToggle />
							<SheetContent>
								<SheetHeader>
									<SheetTitle className='font-bold'>HassanBlog</SheetTitle>
									<SheetDescription>
										<div className='flex flex-col space-y-4 mt-4'>
											<Link href='/'>Home</Link>
											<Link href='/blog'>Blog</Link>
											<Link href='/about'>About</Link>
											<Link href='/contact'>Contact</Link>
											<div className='space-x-1'>
												<Button className='cursor-pointer' variant='outline'>
													Login
												</Button>
												<Button className='cursor-pointer' variant='outline'>
													Signup
												</Button>
											</div>
										</div>
									</SheetDescription>
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	)
}
