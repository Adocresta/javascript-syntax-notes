const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

const btn = document.querySelector("#remove");
btn.addEventListener("click", () => {
  // get the list of li elements inside ol called tweetsContainer
  const tweets = tweetsContainer.children;

  if (tweets.length === 0) {
    console.error("No items to remove!");
    return;
  }
  // list.removeChild(list.childNodes[list.length-1]);
  if (tweets.length > 0) {
    // items[items.length - 1].remove()
    tweetsContainer.childNodes[tweets.length - 1].remove();
  }
});
