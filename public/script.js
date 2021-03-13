function onFriendTextInput() {
  console.log("hello world test");
  // hardcoded query string parameter for now
  const userId = 1;
  fetch(
    `https://afternoon-tor-78552.herokuapp.com/getChatMates?userId=${userId}`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
