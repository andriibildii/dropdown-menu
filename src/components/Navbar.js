import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
	const depthLevel = 0;

	return (
		<nav>
			<ul className="menus">
				{menuItems.map((item) => {
					return (
						<MenuItems items={item} key={item.id} depthLevel={depthLevel} />
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
