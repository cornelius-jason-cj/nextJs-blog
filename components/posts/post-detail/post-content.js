import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'; 

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  console.log('slug : ', post.slug)
  const customRenderers = {
    img(image) {
      console.log('src : ', image)
      return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}></Image>
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;