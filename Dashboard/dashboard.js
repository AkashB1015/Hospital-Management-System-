const menuItems = document.querySelectorAll('.side-menu li');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((i) => i.classList.remove('active'));

    item.classList.add('active');
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const email = localStorage.getItem('loggedInEmail');
  if (email) {
    const username = email.split('@')[0];
    document.getElementById(
      'navbar-message'
    ).textContent = `Hello, ${username}`;
    this.document.getElementById('satoshi').textContent = `${username}`;
  } else {
    document.getElementById('navbar-message').textContent = 'Hello, Guest';
  }
});

profilePic.addEventListener('click', (event) => {
  event.stopPropagation();
  profileCard.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (
    !profileCard.contains(event.target) &&
    !profilePic.contains(event.target)
  ) {
    profileCard.classList.remove('active');
  }
});

cardImageContainer.addEventListener('click', (event) => {
  event.stopPropagation();
  cardImgInput.click();
});

function previewImage(event) {
  const newImg = URL.createObjectURL(event.target.files[0]);
  profileIcon.src = newImg;
  cardProfileImg.src = newImg;
}
