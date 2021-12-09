const form = document.querySelector('#searchForm');
const showInput = document.querySelector('#showSearch');
const refresh = document.querySelector('#refresh');
const div = document.querySelector('.display')

form.addEventListener('submit', async function(e){
    e.preventDefault();//to prevent the browser from executing the default action
    const img = document.querySelectorAll('img');
    console.log(img);
    const searchTerm = showInput.value;
    console.log(searchTerm);
    const config = {params: {q: searchTerm}};//setting config values
    console.log(config);
    const res= await axios.get(`https://api.tvmaze.com/search/shows`,config);
    displayShows(res.data);
    form.elements.query.value = "";
})

const displayShows = (shows) => {
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        div.append(img);
        }
    }
}
const img = document.querySelectorAll('img');
refresh.addEventListener('click', () => {
    div.remove(img);
})
// app.js:12 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'medium')
//     at displayShows (app.js:12)
//     at HTMLFormElement.<anonymous> (app.js:6)
// purpose of line 14
// showInput.addEventListener('change',function (){
//     document.body.remove('img');
// });