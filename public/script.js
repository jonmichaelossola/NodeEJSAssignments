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
      chatBox.innerHTML = "";
      users.forEach(user => {
        let str = `<div class="ChatWithMeBox">
          <span data-id="${user.id}" data-username="${
          user.username
        }">${user.first_name + " " + user.last_name}</span>
        </div>`;
        chatBox.innerHTML += str;
      });
    });
}
