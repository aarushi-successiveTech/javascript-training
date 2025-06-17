// Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchAndCombineData() {
  try {
    const userUrl = "https://jsonplaceholder.typicode.com/users/1";
    const postUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";

    const [userRes, postsRes] = await Promise.all([
      fetch(userUrl),
      fetch(postUrl)
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    const result = {
      userName: user.name,
      email: user.email,
      totalPosts: posts.length,
      postsTitles: posts.map(p => p.title)
    };

    console.log("Combined Data:", result);
    return result;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAndCombineData();
