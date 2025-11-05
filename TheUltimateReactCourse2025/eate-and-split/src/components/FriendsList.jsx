import Friend from "./Friend.jsx";

export default function FriendsList ({ initialFriends }) {

  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}

    </ul>
  )
}

