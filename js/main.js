const github = new Github();
const ui = new UI();
const recents = document.querySelector('#recents-div');
ui.showRecents();
const searchUser = document.querySelector("#searchUser");
let timeout = null;
searchUser.addEventListener("keyup", e => {
  clearTimeout(timeout);
  const userText = e.target.value;

  timeout = setTimeout(() => {
    if (userText !== "") {
      recents.style.display = 'none';
      makeUi(userText);
    } else {
      ui.showRecents();
      recents.style.display = 'block';
      ui.clearProfile();
    }
  }, 500);
});

function makeUi(userText) {
  github.getUser(userText).then(data => {
    if (data.profile.message === "Not Found") {
      ui.showAlert("User not found", "alert alert-danger");
    } else {
      recents.style.display = 'none';
      ui.showProfle(data.profile);
      ui.showRepos(data.repos);
    }
  });
}

document.querySelectorAll('.show-user').forEach((item, i) => {
  item.addEventListener('click', () => {
    makeUi(document.querySelector(`#name-${i}`).innerHTML)
  });
});

let clicks = 1;
document.querySelector("#theme").addEventListener("click", () => {
  if (clicks % 2 !== 0) {
    ui.theme(clicks);

    clicks += 1;
  } else {
    ui.theme(clicks);
    clicks += 1;
  }
});
