function searchGitHubUser() {
  const searchInput = document.getElementById('searchInput').value;
  const resultElement = document.querySelector('.result');

  resultElement.textContent = `Results: ${
    {
        "message": "Not Found",
        "documentation_url": "https://docs.github.com/rest"
      }
  }`;
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchGitHubUser);
