import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
	depthLevel = depthLevel + 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

	return (
		<ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
			{submenus.map((sub, index) => (
				<MenuItems items={sub} key={index} depthLevel={depthLevel} />
			))}
		</ul>
	);
};

export default Dropdown;
