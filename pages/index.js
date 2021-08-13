import Hero from '../components/hero/hero';
import FeaturedPost from '../components/featured-posts/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <>
      <Hero></Hero>
      <FeaturedPost posts={props.posts}></FeaturedPost>
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts : featuredPosts
    }
  }
}


export default HomePage;