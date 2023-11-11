import Image from "next/image";
import styles from "@styles/items.module.css";
import { IconSearch } from "@components/Icons";

const goods = [
	{
		group: "Fruit and vegetables",
		items: [
			"Avocados",
			"Banana",
			"Bunch of carrots 5pcs",
			"Chicken 1kg",
			"Pre-cooked corn 450g",
			"Mandarin Nadorcott",
			"Piele De Sapo Melon",
			"Watermelon",
		],
	},
	{
		group: "Meat and Fish",
		items: [
			"Chicken leg box",
			"Chicken 1kg",
			"Pork fillets 450g",
			"Salmon 1kg",
		],
	},
	{
		group: "Beverages",
		items: [
			"Avocados",
			"Banana",
			"Bunch of carrots 5pcs",
			"Chicken 1kg",
			"Pre-cooked corn 450g",
			"Mandarin Nadorcott",
			"Piele De Sapo Melon",
			"Watermelon",
		],
	},
	{
		group: "Pets",
		items: [
			"Chicken leg box",
			"Chicken 1kg",
			"Pork fillets 450g",
			"Salmon 1kg",
		],
	},
];
export default function Home() {
	return (
		<div className={styles.items__container}>
			<div className={styles.items__form__container}>
				<p className={styles.items__desc}>
					<span className={styles.brand__name}>Shoppingify</span>{" "}
					allows you take your shopping list wherever you go
				</p>
				<form
					method='post'
					className={styles.items__form}
				>
					<label className='relative h-full flex justify-center items-center'>
						<input
							type='search'
							name='search_input'
							// id='search_input'
							placeholder='search item'
							className={styles.items__input}
						/>
						<span
							className='w-6 h-6 absolute top-1/4 left-4'
							style={{ color: "#34333A" }}
						>
							<IconSearch />
						</span>
					</label>
				</form>
			</div>
			<div className={"px-20 py-14 space-y-12"}>
				{goods.map((good) => {
					return (
						<div key={good.group}>
							<p className='mb-2'>{good.group}</p>
							<div className='grid grid-cols-4  gap-y-4 gap-x-8'>
								{good.items.map((item) => {
									return (
										<div>
											<button
												className={
													styles.items__add__button
												}
											>
												{item}
											</button>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
