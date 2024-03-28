//fetch returns a promise

// AJAX asynchronous JS & XML
// JSON is javascript object notation
// AJAJ asynchronous js and json


const URL="https://cat-fact.herokuapp.com/facts";


const getFacts=async ()=>{
    console.log("getting data");
    let response=await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
}