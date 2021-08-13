import Hero from '../components/hero/hero';
import FeaturedPost from '../components/featured-posts/featured-posts';


const DUMMY_POSTS= [
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started with NextJs 1',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-08-13'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJs 2',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-08-13'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJs 3',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-08-13'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJs 4',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-08-13'
  }
];

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <FeaturedPost posts={DUMMY_POSTS}></FeaturedPost>
    </>
  )
}

export default HomePage;