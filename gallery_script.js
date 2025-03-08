const imageGallery = [
    "https://c.ndtvimg.com/2025-02/dv92otp_virat-kohli-_625x300_23_February_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    "https://images.news18.com/ibnlive/uploads/2025/02/india-vs-pakistan-live-streaming-champions-trophy-2025-2025-02-2e315419db0aa1f5603c623f99992ffc-16x9.jpg?impolicy=website&width=640&height=360",
    "https://images.firstpost.com/uploads/2025/03/Champions-trophy-final-reserve-day-2025-03-3d90bbaf2891165292a24216b359a7b9-1200x675.jpg?im=FitAndFill=(596,336)",
    "https://www.hindustantimes.com/ht-img/img/2025/03/04/550x309/rahul_jadeja_getty_1741104924146_1741104939355.jpg",
    "https://c.ndtvimg.com/2025-03/ml59v3dg_team-australia-afp_625x300_04_March_25.jpg?im=FitAndFill,algorithm=dnn,width=806,height=605",
]
const imageText = [
    "Virat Kohli makes 100 on the last ball, winning the Ind vs Pak match for India ",
    "The India vs Pakistan match, arguably the greatest sporting rivalry in the world",
    "New Zealand Cricketer Glenn Philips attempts to direct hit run-out Hardik Pandya from India ",
    "KL Rahul and Ravindra Jadeja celebrate their partnership against Australia",
    "Adam Zampa celebrates taking a Pakistani wicket"
]
const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const caption = document.getElementById("caption");

let currentImgIndex = 0;

function updateImage() {
    caption.innerHTML = imageText [currentImgIndex];
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