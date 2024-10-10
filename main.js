// We need to fetch our post from the API
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded we can now fetch the posts");

  fetchData();
});
// Display our posts on the HTML page

const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);

    console.log(response);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json(); // 100 posts

    console.log(json);

    json.forEach(addToDom);
  } catch (error) {
    console.error(error.message);
  }
};

const postsContainer = document.querySelector(".posts_container");

// Add our Posts to the DOM
const addToDom = (post) => {
  const postCard = document.createElement("div");
  postCard.classList.add("post_card");

  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = post.title;

  postCard.appendChild(title);

  const body = document.createElement("p");
  body.classList.add("body");
  body.innerText = post.body;

  postCard.appendChild(body);

  postsContainer.appendChild(postCard);
};
