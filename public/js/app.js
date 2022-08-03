const divSearchResults = document.getElementById('searchResult');
const divResult = document.createElement('div');
divResult.className = 'p-2';
const linkResult = document.createElement('a');
linkResult.innerText = "Hello";
divResult.appendChild(linkResult);
divSearchResults.appendChild(divResult);