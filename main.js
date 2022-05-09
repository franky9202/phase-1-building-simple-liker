// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hidden = document.querySelector('#modal')
hidden.classList.add('hidden')

const hearts = document.querySelectorAll(".like-glyph")
for (const heart of hearts){
  heart.addEventListener('click', () => {
    if (heart.textContent === EMPTY_HEART)
      mimicServerCall()
      .then(() => {
        heart.classList.add('.activated-heart')
        heart.textContent = FULL_HEART
      })
      .catch(error => {
        setTimeout( () => {
          hidden.classList.add('hidden')
          hidden.textContent = error.message
        }, 3000)
        hidden.classList.remove('hidden')
        
      })
    if (heart.textContent === FULL_HEART){
      heart.classList.remove('.activated-heart')
        heart.textContent = EMPTY_HEART
    }
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
