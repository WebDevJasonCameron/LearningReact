import Friend from "./Friend.jsx";

export default function FriendsList ({ friends }) {

  console.log(friends);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}

    </ul>
  )
}

