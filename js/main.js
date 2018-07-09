const github = new Github();
const ui = new UI();
const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    // console.log(git.getUser(userText));
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfle(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});

let clicks = 1;
document.querySelector('#theme').addEventListener('click', () => {
  if(clicks%2 !== 0) {
   ui.theme(clicks)
   
   clicks += 1;
  } else {
    ui.theme(clicks)
    clicks += 1;

  }
})