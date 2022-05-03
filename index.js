function search(){
    /**
     * 1.get the value of the search-input
     * 2. Append the value of the input to the api
     * 3. call fetch with the api and get a json format of the data
     * 4. Display the data on html
     */

    //1.get the value of the search-input
    let searchValue = document.getElementById("search-box").value;

    //2. Append the value of the input to the api
    // const usersApiEndpoint = "https://api.github.com/users/";
    // let searchURL = usersApiEndpoint + searchValue
    
    const searchURL = `https://api.github.com/users/${searchValue}`;
    //  3. call fetch with the api and get a json format of the data
    fetch(searchURL)
    .then((response)=> response.json())
    .then((searchData)=>{ 

        //4. Display the data on html
        /**
         * i. get the display area element
         * ii. create the child elements
         * iii. add data to the children
         * iv. append the children to the parent() diplay area
         */

            // i. get the display area element
        let displayDiv = document.getElementById("display-area");

        // ii. create the child elements
        let image = document.createElement('img');
        image.src = searchData.avatar_url;
        displayDiv.appendChild(image);
    
        let name = document.createElement("p");
        name.id = "name"
        name.innerText = searchData.name;
        displayDiv.appendChild(name);
    
        let location =  document.createElement("p");
        location.innerText = searchData.location;
        displayDiv.appendChild(location);
    });
    
    
    

}
