function searchGitHubUser() {
  const searchInput = document.getElementById('searchInput').value;
  const resultElement = document.querySelector('.result');

  resultElement.textContent = `Results: ${{
    message: 'Not Found',
    documentation_url: 'https://docs.github.com/rest',
  }}`;
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchGitHubUser);
const mockArray = ['Dimis','Mile', 'Maki', 'Sumi', 'Maja', 'Goran', 'Beka', 'Tom'];


function searchGitHubUser() {
  const searchInput = document.getElementById('searchInput').value;
  // result element to show the final filtration result of mock data
  const resultElement = document.querySelector('.card-body');
  const filteredArray = mockArray.filter(item => item.includes(searchInput));

  // Clear the previous result
  resultElement.textContent = '';

  if (filteredArray.length > 0) {
    filteredArray.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      resultElement.appendChild(listItem);
    });
  } else {
    resultElement.textContent = 'No matching results found.';
  }
}

const searchButton1 = document.getElementById('searchButton');
searchButton.addEventListener('click', searchGitHubUser);
