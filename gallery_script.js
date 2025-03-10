const imageGallery = [
    "https://c.ndtvimg.com/2025-02/dv92otp_virat-kohli-_625x300_23_February_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    "https://images.news18.com/ibnlive/uploads/2025/02/india-vs-pakistan-live-streaming-champions-trophy-2025-2025-02-2e315419db0aa1f5603c623f99992ffc-16x9.jpg?impolicy=website&width=640&height=360",
    "https://images.firstpost.com/uploads/2025/03/Champions-trophy-final-reserve-day-2025-03-3d90bbaf2891165292a24216b359a7b9-1200x675.jpg?im=FitAndFill=(596,336)",
    "https://www.hindustantimes.com/ht-img/img/2025/03/04/550x309/rahul_jadeja_getty_1741104924146_1741104939355.jpg",
    "https://c.ndtvimg.com/2025-03/ml59v3dg_team-australia-afp_625x300_04_March_25.jpg?im=FitAndFill,algorithm=dnn,width=806,height=605",
    "https://www.wisden.com/static-assets/waf-images/62/82/12/16-9/ludNKveZeo.jpg?v=23.07&w=600",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/397900/397907.6.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202503/team-india-092752782-16x9_0.jpg?VersionId=D8TKiOEul8rcdXl9wqliRA.wgYj9c5fL&size=686:385",
    "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/p8vh7uk1as9uedgdr3us",
    "https://www.livehindustan.com/lh-img/smart/img/2025/03/09/1600x900/CRICKET-CT-2025-IND-NZL-245_1741537587422_1741537604725.jpg",
    "https://www.hindustantimes.com/ht-img/img/2025/03/09/550x309/indian_cricket_1741539396473_1741539408138.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-42568,resizemode-75,msid-118822689/news/sports/rohit-sharma-a-captain-who-leads-with-a-hitman-mentality-delivering-trophies-champions-trophy-2025/rohit-sharma-virat-kohli.jpg"
]
const imageText = [
    "Virat Kohli makes 100 on the last ball, winning the Ind vs Pak match for India ",
    "The India vs Pakistan match, arguably the greatest sporting rivalry in the world",
    "New Zealand Cricketer Glenn Philips attempts to direct hit run-out Hardik Pandya from India ",
    "KL Rahul and Ravindra Jadeja celebrate their partnership against Australia",
    "Adam Zampa celebrates taking a Pakistani wicket",
    "Axar Patel batting against New Zealand during the Champions Trophy Final in Dubai, UAE",
    "The 100-run partnership between Rohit Sharma and Shubman Gill",
    "India celebrates winning the 2025 Champions Trophy in Dubai",
    "Spinner Varun Chakravarty runs up to the crease",
    "KL Rahul and Ravindra Jadeja finish off in style with a boundary",
    "The Indian Celebration after Jadeja hits the last ball for four runs",
    "Indian captain Rohit Sharma and top-order batsman Virat Kohli celebrate by fencing with the match stumps"
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