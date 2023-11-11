"use client";

import Logo from "./Logo";
import styles from "@styles/list.module.css";
import { IconRefresh, IconList, IconStatistic, IconShopCart } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

const lis = [
	{ name: "items", icon: <IconList />, href: "/" },
	{
		name: "history",
		icon: <IconRefresh />,
		href: "/history",
	},
	{
		name: "statistics",
		icon: <IconStatistic />,
		href: "/statistics",
	},
];

function SideBar({}: Props) {
	const pathName = usePathname();
	return (
		<header className='fixed bg-white w-[94px] min-h-full shadow-sm z-50 inset-0 py-9'>
			<div className='flex flex-col h-full'>
				<div className='mx-auto '>
					<Logo className='rounded-full w-11 h-11 border-2 border-orange-500' />
				</div>
				<div className={styles.triangle}></div>
				<nav className=' my-auto'>
					<ul className=' space-y-11 '>
						{lis.map((li) => {
							return (
								<li key={li.name}>
									<Link
										href={li.href}
										className={styles.list__item}
									>
										<span
											className={`${styles.item__index} ${
												pathName === li.href
													? styles.item__active
													: styles.item__notactive
											}`}
										></span>

										<span
											className='h-6 w-6 '
											style={{ color: "#454545" }}
										>
											{li.icon}
										</span>
										<span className={styles.item__desc}>
											<p className='relative'>
												{li.name}
											</p>
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className='mx-auto'>
					<button
						type='button'
						className={styles.list__button}
					>
						<IconShopCart className='h-5' />
						<span className={styles.list__badge}>3</span>
					</button>
				</div>
			</div>
		</header>
	);
}

export default SideBar;
