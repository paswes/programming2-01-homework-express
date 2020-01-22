/**
 * Creating asynchronous HTTP request using POST
 * and send data back to server.
 * @param callback
 */
httpPost = () => {
    document.querySelector('#submit').addEventListener('click', () => {
        const http = new XMLHttpRequest();
        const url = 'http://localhost:8000/';
        const inputName = document.querySelector('#input-name').value;
        const inputMessage = document.querySelector('#input-message').value;
        const params = `name=${inputName}&message=${inputMessage}`;

        http.open('POST', url, true);
        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
        http.onreadystatechange = function () {  //Call a function when the state changes.
            if (http.readyState === 4 && http.status === 200) {
                console.log(JSON.parse(http.responseText));

                let responseObject = JSON.parse(http.responseText);
                console.log(responseObject[0].name);
                console.log(responseObject[0].message);

                const commentList = document.querySelector('#comment-list');

                JSON.parse(http.responseText).forEach(function(response) {
                    const node = document.createElement('li');
                    const content = document.createTextNode(response.name + ' - ' + response.message); //umschreiben
                    node.appendChild(content);
                    commentList.appendChild(node);
                });


            }
        };
        http.send(params);
    });
};

/*
document.querySelector('#submit').addEventListener('click', () => {
    const http = new XMLHttpRequest();
    const url = 'http://localhost:8000/';
    const inputName = document.querySelector('#input-name').value;
    const inputMessage = document.querySelector('#input-message').value;
    const params = `name=${inputName}&message=${inputMessage}`;


    http.open('POST', url, true);
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function () {  //Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.responseText);
        }
    };
    http.send(params);
});
*/

/**
 * Create comment and append to list.
 */
/*createComment = () => {
    console.log("häää");
    const commentList = document.querySelector('#comment-list');
    const node = document.createElement('li');
    const content = document.createTextNode(http.responseText.name + ' - ' + http.responseText.message); //umschreiben
    node.appendChild(content);
    commentList.appendChild(node);
};*/

httpPost();