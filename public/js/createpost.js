const newPost = async (e) => {
  e.preventDefault();
  const title = document.getElementById("titleInput").value;
  const text = document.getElementById("postInput").value;

  if (title && text) {
    const response = await fetch("/newpost", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, text }),
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create a post");
    }
  }
};

document.querySelector("#postBtn").addEventListener("click", newPost);
