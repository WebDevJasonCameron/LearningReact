export default function Stats({ items }) {
  if (!items.length) return (
    <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </p>
  )

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);


  return (
    <footer className="stats">
      <em>
        {
          percentPacked === 100 ? "You got everything packed! Ready to go ✈️" :
            `💼You have ${numItems} items on your list, and you already packed ${numPacked} (${percentPacked}%)`
        }

      </em>
    </footer>
  );
}