import FormAddPost from "./FormAddPost.jsx";
import Posts from "./Posts.jsx";

export default function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}