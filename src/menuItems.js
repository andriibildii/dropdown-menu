export const menuItems = [
	{
		title: "Home",
		url: "/",
		id: 1,
	},
	{
		title: "Services",
		url: "/services",
		id: 2,
		submenu: [
			{
				id: 21,
				title: "web design",
				url: "web-design",
			},
			{
				id: 22,
				title: "web development",
				url: "web-dev",
				submenu: [
					{
						id: 221,
						title: "Frontend",
						url: "frontend",
					},
					{
						id: 222,
						title: "Backend",
						url: "backend",
						submenu: [
							{
								id: 2221,
								title: "NodeJS",
								url: "node",
							},
							{
								id: 2222,
								title: "PHP",
								url: "php",
							},
						],
					},
				],
			},
			{
				id: 23,
				title: "SEO",
				url: "seo",
			},
		],
	},
	{
		title: "About",
		url: "/about",
		id: 3,
		submenu: [
			{
				title: "Who we are",
				url: "who-we-are",
			},
			{
				title: "Our values",
				url: "our-values",
			},
		],
	},
];
