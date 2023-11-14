import { IconEdit } from "@components/Icons";
import styles from "@styles/shoppinglist.module.css";
import Image from "next/image";
type Props = {};
type item = { name: string; group: string; pcs: number };

const initialItems = [
	{
		name: "Avocado",
		group: "Fruit and vegetables",
		pcs: 3,
	},
	{
		name: "Pre-cooked corn 450g",
		group: "Fruit and vegetables",
		pcs: 1,
	},
	{
		name: "Chicken 1kg ",
		group: "Meat and Fish",
		pcs: 3,
	},
	{
		name: "Pork fillets 450g",
		group: "Meat and Fish",
		pcs: 1,
	},
	{
		name: "Salmon 1kg",
		group: "Meat and Fish",
		pcs: 1,
	},
	{
		name: "Pork fillets 450g",
		group: "Meat and Fish",
		pcs: 1,
	},
	{
		name: "Salmon 1kg",
		group: "Meat and Fish",
		pcs: 1,
	},
];

function ShoppingList({}: Props) {
	return (
		<div className={styles.shoppinglist}>
			<div className={styles.shoppinglist__items}>
				<AddItem />
				<SelectedItems />
			</div>
			<div className={styles.shoppinglist__search}>
				<SearchItem />
			</div>
		</div>
	);
}

export default ShoppingList;

function SearchItem() {
	return (
		<form className={styles.search__item__form}>
			<label className='relative'>
				<input
					type='text'
					name='item_name'
					placeholder='Enter a name ...'
					className={styles.search__item__input}
				/>
				<button
					type='button'
					className={styles.search__item__button}
				>
					Save
				</button>
			</label>
		</form>
	);
}
function AddItem({}: Props) {
	return (
		<div className={styles.shoppinglist__additem}>
			<div className={styles.shoppinglist__container__image}>
				<Image
					src='data:image/png;base64,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'
					width='174'
					height='292'
					alt='preview of layer to be exported'
					className={styles.shoppinglist__image}
				></Image>
			</div>
			<div className='flex flex-col items-end'>
				<p className={styles.additem__desc}>
					Didn’t find what you need?
				</p>
				<button
					type='button'
					className={styles.additem__button}
				>
					add item
				</button>
			</div>
		</div>
	);
}

function SelectedItems({}: Props) {
	const items = initialItems.filter((c) => c.pcs > 0);

	if (items.length == 0) {
		return (
			<div className='flex justify-center items-center shrink-0 h-full'>
				<p className={styles.list__noitem}>no Item</p>

				<Image
					className={styles.list__noitem__image}
					alt='undraw shopping app'
					src='/icons/undraw_shopping_app_flsj.svg'
					height={203}
					width={245}
				></Image>
			</div>
		);
	} else {
		return (
			<div className={styles.items__container}>
				<div className={styles.list__title}>
					ShoppingList
					<span className={styles.list__title__icon}>
						<IconEdit className='w-6 h-6 ' />
					</span>
				</div>

				<div className={styles.list__container}>
					<ul className='space-y-8'>
						{getGroups(items).map((group) => {
							return (
								<li
									key={group}
									className={styles.item__group}
								>
									<p>{group}</p>
									<ul className='space-y-2'>
										{getItemsByGroup(items, group).map(
											(item, idx) => {
												return (
													<li
														key={idx}
														className={
															styles.item__name
														}
													>
														<p>{item.name}</p>

														<button
															className={
																styles.item__pcs
															}
														>
															<span>
																{item.pcs}
															</span>{" "}
															pcs
														</button>
													</li>
												);
											}
										)}
									</ul>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

//  Help functions

function getGroups(items: Array<item>) {
	return items
		.map((c) => c.group)
		.filter((c, i, arr) => i === arr.indexOf(c));
}

function getItemsByGroup(items: Array<item>, group: string) {
	return items.filter((c) => c.group === group);
}
