import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
	return <Fragment>
		<Hero />
		<FeaturedPosts posts={props.featuredPosts} />
	</Fragment>;
}


export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			featuredPosts: featuredPosts
		},
		revalidate: 600
	};
}

export default HomePage;

// 1). Hero section | Welcome section. Present ourselves.
// 2). Featured Posts