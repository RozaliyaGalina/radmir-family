const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const images = document.querySelectorAll('.slider img')
let currentIndex = 0

function prevSlide() {
  hideAllImages()
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = images.length - 1
  }
  showCurrentImage()
}

function nextSlide() {
  hideAllImages()
  currentIndex++
  if (currentIndex >= images.length) {
    currentIndex = 0
  }
  showCurrentImage()
}

function hideAllImages() {
  images.forEach((image) => {
    image.style.display = 'none'
  })
}

function showCurrentImage() {
  images[currentIndex].style.display = 'block'
}

prevButton.addEventListener('click', prevSlide)
nextButton.addEventListener('click', nextSlide)

showCurrentImage()