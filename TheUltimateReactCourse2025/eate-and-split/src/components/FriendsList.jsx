export default function FriendsList ({ friendsList }) {
  const friends = friendsList;

  function Friend({friend}) {
    return (
      <li>
        {friend}
      </li>
    )
  }

  return (
    <ul>
      {friends.map(friend => (<li key={friend.id}>{friend.name}</li>))}
    </ul>
  )
}