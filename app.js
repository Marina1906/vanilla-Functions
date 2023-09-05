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
// mock data to filter with the searchInput element value
const mockArray = ['mile', 'maki', 'sumi', 'maja', 'goran', 'beka']

// called on searchButton click
function searchGitHubUser() {
  // gets the current value of the searchInput element
  const searchInput = document.getElementById('searchInput').value;
  // result element to show the final filtration result of mock data
  const resultElement = document.querySelector('.card-body');

  let filteredArray = []
  // TODO: filter the mock array to only include searchInput values
  // google array.include, array.filter

  resultElement.textContent = filteredArray;
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchGitHubUser);