// init classes form other js files
const github = new Github();
const ui = new UI();
ui.showRecents();

// grab DOM elements
const searchUser = document.querySelector("#searchUser");
const cancleSearch = document.querySelector('#cancle-search');
const loading = document.querySelector('#loading');
const recents = document.querySelector('#recents-div');

loading.style.display = 'none';
let timeout = null;

searchUser.addEventListener("keyup", e => {
  clearTimeout(timeout);
  const userText = e.target.value;

  timeout = setTimeout(() => {
    if (userText !== "") {
      makeUi(userText);
    } else {
      noSearch();
    }
  }, 500);
});

//makes the search result ui
function makeUi(userText) {
  ui.clearProfile();
  cancleSearch.style.display = 'block';
  searchUser.style.borderRadius = '0.25rem 0 0 0.25rem';
  loading.style.display = 'block';
  recents.style.display = 'none';

  setTimeout(() => {
    github.getUser(userText).then(data => {
      loading.style.display = 'none';
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfle(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }, 2000)
}

//function runs when search bar is empty
function noSearch() {
  cancleSearch.style.display = 'none';
  searchUser.style.borderRadius = '0.25rem';
  loading.style.display = 'none';
  recents.style.display = 'block';
  ui.showRecents();
  ui.clearProfile();
  document.querySelectorAll('.show-user').forEach((item, i) => {
    item.addEventListener('click', () => {
      const userName = document.querySelector(`#name-${i}`).innerHTML;
      searchUser.value = userName;
      makeUi(userName);
    });
  });
}

//behaviour for the cancel button
cancleSearch.style.display = 'none';
searchUser.style.borderRadius = '0.25rem';
cancleSearch.addEventListener('click', () => {
  searchUser.value = '';
  searchUser.style.borderRadius = '0.25rem 0 0 0.25rem';
  noSearch();
});

//event for recent user click
document.querySelectorAll('.show-user').forEach((item, i) => {
  item.addEventListener('click', () => {
    const userName = document.querySelector(`#name-${i}`).innerHTML;
    cancleSearch.style.display = 'block';
    searchUser.value = userName;
    makeUi(userName);
  });
});

//click counter for the dark theme
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
