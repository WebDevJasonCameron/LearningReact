import List from "./List.jsx";

export default function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}