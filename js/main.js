const github = new Github;
const ui = new UI;
 const searchUser = document.querySelector('#searchUser');
 searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    // console.log(git.getUser(userText));
  github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){

      }else {
        ui.showProfle(data.profile)
      }
    })
  } else {

  }
 });