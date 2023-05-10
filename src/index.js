// write your code here
const url = 'https://localhost:3000/ramens'
const menu = document.querySelector('#ramen-menu')
const details = document.querySelector('#ramen-detail')
const addComment = document.querySelector('#comment-display');
const displayRating = document.querySelector('#rating-display');
const addRamen = document.querySelector('#new-ramen');
  
  fetch(url)
  .then(response => {
        if(response.ok) {
          return response.json()
        } throw new Error ('Request failed!')
      }, networkError => console.log(networkError.message))
  .then(ramens => {

      ramens.forEach(ramen => {
        const markup = `<li>${ramen.name}</li>`
        markup.insertAdjacentHTML('beforeend', markup)
      })

    })

    img.addEventListener('click', (event) => {
   
      document.querySelector('#ramen-detail') = event.target.id;
      displayName.textContent = ramen.name;
      displayImg.src = ramen.img_url;
      displayImg.alt = ramen.name;
  
      // displayButton.href = ramen.url;
    });

  