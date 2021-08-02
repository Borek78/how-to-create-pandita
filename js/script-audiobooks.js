document.querySelector("#menu").addEventListener("click", goToContent);

function goToContent() {
  const contentAudiobooks = document.getElementById("go-to-content");
  contentAudiobooks.scrollIntoView();
}
