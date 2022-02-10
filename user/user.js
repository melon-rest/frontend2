let user = localStorage.getItem("user");

if(!user) location.pathname = "/";

user = JSON.parse(user);

document.getElementById('avatar').src = user.profile_picture;