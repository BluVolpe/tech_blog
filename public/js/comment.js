const comment = async (e) => {
  console.log("Clicky click button");
  e.preventDefault();
  const userComment = document.getElementById("commentInput").value;
  const response = await fetch("/newcomment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      comment: userComment || "",
      blog_id: document.getElementById("postId").dataset.value,
    }),
  });
  if (response.ok) {
    location.reload();
  } else {
    alert("Failed to post comment");
  }
};

document.querySelector("#submitBtn").addEventListener("click", comment);
console.log(singlePost);
