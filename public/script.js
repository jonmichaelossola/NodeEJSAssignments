function onFriendTextInput() {
  console.log("hello world test");
  // hardcoded query string parameter for now
  const userId = 1;
  fetch(`https://somewhere.com?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
