let maxItem = 3;
        divSearchResults.innerHTML = '';

        if(searchBar.value === '') {return}

        for (let i = 0; i < 809; i++) {
            if ((responseData[i].name.english.toLowerCase().search(searchBar.value.toLowerCase()) !== -1)) {
                console.log(responseData[i].name.english);

                const aResult = document.createElement('a');
                aResult.className = 'p-2';
                const resultThumb = document.createElement('img');
                resultThumb.src = '/res/images/sprites/' + responseData[i].id.toLocaleString('en-US',{minimumIntegerDigits:3, useGrouping:false}) + '.png';
                const hResult = document.createElement('p');
                hResult.innerText = responseData[i].name.english;
                aResult.href = `/pokemon/`+responseData[i].id;
                aResult.appendChild(resultThumb);
                aResult.appendChild(hResult);
                divSearchResults.appendChild(aResult);

                maxItem--;
            }

            if(maxItem == 0) {break;}

        }