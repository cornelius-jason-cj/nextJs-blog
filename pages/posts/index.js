import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from '../../lib/posts-util';


function AllPostsPage(props) {
  return (
   <>
   <AllPosts posts={props.posts}></AllPosts>
   </>
  )
}


export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}


export default AllPostsPage;