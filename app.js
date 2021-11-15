const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}};
    const res= await axios.get(`https://api.tvmaze.com/search/shows`,config);
    displayShows(res.data);
    form.elements.query.value = "";
})

const displayShows = (shows) => {
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.append(img);
        }
    }
}
// app.js:12 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'medium')
//     at displayShows (app.js:12)
//     at HTMLFormElement.<anonymous> (app.js:6)
// purpose of line 11