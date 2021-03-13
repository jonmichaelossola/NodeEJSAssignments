function onFriendTextInput(e) {
  // hardcoded query string parameter for now because registration process is not setup yet.
  const userId = 1;
  const input = e.target.value;
  fetch(
    `https://afternoon-tor-78552.herokuapp.com/getChatMates?id=${userId}&input=${input}`
  )
    .then(res => res.json())
    .then(users => {
      let chatBox = document.querySelector(".friendFinderDropdown");
      chatBox.innerHTML = "";
      users.forEach(user => {
        let str = `<div class="ChatWithMeBox">
          <span role="button" onclick="startChat(event)" data-id="${
            user.id
          }" data-username="${user.username}">${user.first_name +
          " " +
          user.last_name}</span>
        </div>`;
        chatBox.innerHTML += str;
      });
    });
}

function startChatWith() {
  console.log("hello world test");
}
