import "@styles/globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import SideBar from "@components/SideBar";
import ShoppingList from "./ShoppingList";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shoppingify",
	description: "E-commerce Shopping Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${quicksand.className} relative`}>
				<SideBar />
				<main className='pl-[94px] pr-[389px] min-h-screen'>
					{children}
				</main>
				<ShoppingList />
			</body>
		</html>
	);
}
