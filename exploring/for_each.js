const friends = ["Alice", "Bob", "Charlie", "Diana"];

const printFriend = (friend, index) => {
    console.log(friend, index, "inside printFriend");
}

friends.forEach(printFriend);

friends.forEach((friend, index) => {
    console.log(friend, index, "inside anonymous function");
})