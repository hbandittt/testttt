// Display an alert with "Hello!" message when the page is loaded
window.onload = function() {
  alert("Hello!");
};

// Show/hide the paragraph of text when "Learn more" button is clicked
var learnMoreButton = document.getElementById("learn-more-button");
var learnMoreText = document.getElementById("learn-more-text");
learnMoreButton.addEventListener("click", function() {
  if (learnMoreText.style.display === "none") {
    learnMoreText.style.display = "block";
    learnMoreButton.textContent = "Hide text";
  } else {
    learnMoreText.style.display = "none";
    learnMoreButton.textContent = "Learn more";
  }
});

// Change the profile picture when hovered over
var profilePicture = document.getElementById("profile-picture");
profilePicture.addEventListener("mouseover", function() {
  profilePicture.src = "./images/alternate-profile-picture.jpg";
});
profilePicture.addEventListener("mouseout", function() {
  profilePicture.src = "./images/profile-picture.jpg";
});
