import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function FeaturedPost (props) {
  console.log(props)
  return(
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={props.posts}></PostGrid>
    </section>
  )
}

export default FeaturedPost;