const imageGallery = [
    "https://images.pexels.com/photos/11424548/pexels-photo-11424548.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5109341/pexels-photo-5109341.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5123016/pexels-photo-5123016.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2782485/pexels-photo-2782485.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://vancouver.ca/images/cov/feature/vancouver-aquatic-centre-landing.jpg",
]

const imageElement = document.getElementById
("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery [currentImgIndex];
}


nextButton.addEventListener("click", function(){
   currentImgIndex=(currentImgIndex + 1) % imageGallery.length
   updateImage()
});

prevButton.addEventListener("click", function(){
    currentImgIndex=(currentImgIndex - 1 + imageGallery.length) % imageGallery.length
    updateImage()
 });

updateImage();