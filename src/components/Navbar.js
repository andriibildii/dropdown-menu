import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
	return (
		<nav>
			<ul className="menus">
				{menuItems.map((items) => {
					const depthLevel = 0;
					return (
						<MenuItems items={items} key={items.id} depthLevel={depthLevel} />
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
