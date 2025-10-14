let comments = JSON.parse(localStorage.getItem("comments")) || [];

function addComment() {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (name && comment) {
    const newComment = { name, comment };
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    displayComments();
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  } else {
    alert("Please enter your name and comment!");
  }
}

function displayComments() {
  const commentBox = document.getElementById("commentBox");
  commentBox.innerHTML = comments
    .map((c) => `<p><strong>${c.name}</strong>: ${c.comment}</p>`)
    .join("");
}

window.onload = displayComments;
