import FriendsList from "./components/FriendsList.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";
import {useState} from "react";

import {initialFriends} from "./assets/InitialFriends.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((current) =>
    current?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {...friend, balance: friend.balance + value } : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={ friends }
                     onSelection={ handleSelection }
                     selectedFriend={ selectedFriend } />

        {showAddFriend && <FormAddFriend onAddFriend={ handleAddFriend } />}

        <Button onClick={ handleShowAddFriend } >
          { showAddFriend ? "Close" : "Add friend" }
        </Button>
      </div>

      { selectedFriend && <FormSplitBill selectedFriend={ selectedFriend }
                                         onSplitBill={ handleSplitBill }
                                         key={ selectedFriend.id } /> }
    </div>
  )
}

export default App
