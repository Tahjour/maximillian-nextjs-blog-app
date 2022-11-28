import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting started with NextJS",
		imageName: "getting-started-nextjs.png",
		excerpt: "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in serverside rendering",
		date: "2022-02-10"
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting started with NextJS",
		imageName: "getting-started-nextjs.png",
		excerpt: "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in serverside rendering",
		date: "2022-02-10"
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting started with NextJS",
		imageName: "getting-started-nextjs.png",
		excerpt: "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in serverside rendering",
		date: "2022-02-10"
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting started with NextJS",
		imageName: "getting-started-nextjs.png",
		excerpt: "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in serverside rendering",
		date: "2022-02-10"
	}
];

function HomePage(props) {
	return <Fragment>
		<Hero />
		<FeaturedPosts posts={DUMMY_POSTS} />
	</Fragment>;
}

export default HomePage;

// 1). Hero section | Welcome section. Present ourselves.
// 2). Featured Posts