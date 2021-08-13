import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST=
{
  slug: 'getting-started-with-nextjs1',
  title: 'Getting Started with NextJs 1',
  image: 'getting-started-nextjs.png',
  date: '2022-08-13',
  content: '# This is a first post'
};


function PostContent() {

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;