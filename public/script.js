function onFriendTextInput(e) {
  // hardcoded query string parameter for now
  const userId = 1;
  const input = e.target.value;
  fetch(
    `https://afternoon-tor-78552.herokuapp.com/getChatMates?id=${userId}&input=${input}`
  )
    .then(res => res.json())
    .then(users => {
      console.log(users);
      let chatBox = document.querySelector(".friendFinderDropdown");
    });
}
