export default function FriendsList ({ friendsList }) {
  const friends = friendsList;

    return (
      <ul>
        {friend.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    );
}

function Friend({ Friend }) {
  return (
    <li>
      <img src={friend.image} alt="friend" />
    </li>
  )
}