import Friend from "./Friend.jsx";

export default function FriendsList ({ friends, onSelection, selectedFriend }) {

  console.log(friends);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={ friend }
                key={ friend.id }
                onSelection={ onSelection }
                selectedFriend={ selectedFriend } />
      ))}

    </ul>
  )
}

