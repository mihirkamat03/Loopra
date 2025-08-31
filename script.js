// function story_btn_click() {
//   var x = document.getElementById("story_btn");
//   if (x.innerHTML === "Stories 🡣") {
//     x.innerHTML = "Stories 🡡";
//     document.getElementById("stories").style.display=""none"";
//     document.getElementById("hr").style.display=""none"";
//   } else if (x.innerHTML === "Stories 🡡") {
//     x.innerHTML = "Stories 🡣";
//   }
// }

const x = document.getElementById("like");

x.addEventListener("click", function like_btn() {
    if (x.style.color === "#fff") {
        x.style.color = "#f00";
    }
    else if (x.style.color === "#f00") {
        x.style.color = "#fff";
    }
});

document.querySelectorAll(".post").forEach(post => {
    const likeBtn = post.querySelector(".like");
    const likedBtn = post.querySelector(".liked");

    likeBtn.addEventListener("click", () => {
        likeBtn.style.display = "none";
        likedBtn.style.display = "flex";
    });

    likedBtn.addEventListener("click", () => {
        likedBtn.style.display = "none";
        likeBtn.style.display = "flex";
    });
});
