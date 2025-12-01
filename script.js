const reels = [
  {
    ismuted:true,
    username: "travel_with_avi",
    likeCount: 12000,
    isLiked: false,
    commentCount: 540,
    caption: "Kashmir is heaven on earth ❄️❤️",
    video: "voice1.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 850,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "foodielife",
    likeCount: 5800,
    isLiked: true,
    commentCount: 210,
    caption: "Mumbai Vada Pav is love 😍🔥",
    video: "2.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 320,
    isFollowed: true,
  },
  {
     ismuted:true,
    username: "dancewithkrish",
    likeCount: 45000,
    isLiked: false,
    commentCount: 1120,
    caption: "New dance challenge 🕺🔥 #shorts",
    video: "3.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 1900,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "tech_insider",
    likeCount: 21000,
    isLiked: true,
    commentCount: 670,
    caption: "iPhone 16 tips & tricks 📱💡",
    video: "4.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 980,
    isFollowed: true,
  },
  {
     ismuted:true,
    username: "funnyboy",
    likeCount: 78000,
    isLiked: false,
    commentCount: 3200,
    caption: "Try not to laugh 😂😂",
    video: "1.mp4",
    userProfile: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
    shareCount: 4500,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "gym_motivation",
    likeCount: 30000,
    isLiked: true,
    commentCount: 890,
    caption: "No excuses 💪 Stay hard!",
    video: "2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 1400,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "crazy_animals",
    likeCount: 15000,
    isLiked: false,
    commentCount: 350,
    caption: "Dogs are the best friends 🐶❤️",
    video: "3.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 700,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "codingwithmanish",
    likeCount: 6800,
    isLiked: true,
    commentCount: 260,
    caption: "JavaScript loops explained in 30 seconds 🚀",
    video: "4.mp4",
    userProfile: "https://images.unsplash.com/photo-1551069613-1904dbdcda11",
    shareCount: 310,
    isFollowed: true,
  },
  {
     ismuted:true,
    username: "fashion_world",
    likeCount: 47000,
    isLiked: false,
    commentCount: 1560,
    caption: "Winter styling ideas ❄️💙",
    video: "1.mp4",
    userProfile: "https://images.unsplash.com/photo-1534531688091-a458257992b8",
    shareCount: 2000,
    isFollowed: false,
  },
  {
     ismuted:true,
    username: "car_lovers",
    likeCount: 92000,
    isLiked: true,
    commentCount: 4100,
    caption: "Lamborghini Huracan sound 😍🔥",
    video: "2.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 5200,
    isFollowed: true,
  }
];



let allReels=document.querySelector('.all-reels');

function addData(){
  let sum='';
reels.forEach(function(val,idx){
    sum+=` <div class="reel">
                    <video autoplay loop ${val.ismuted? 'muted':''} src="${val.video}"></video>
                      <div class="mute" id=${idx}>
                      ${val.ismuted? ' <i class="ri-volume-mute-fill"></i>' :'<i class="ri-volume-up-line"></i>'}
                                     
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${val.userProfile}" alt="">
                            <h4>${val.username}</h4>
                            <button id=${idx}  class='follow' >${val.isFollowed?'Unfollow':'Follow'}</button>

                        </div>
                        <h3>${val.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${val.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                         <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>
                          <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div>
                           <div class="menu">
                            <h4 class="share-icon icon"><i class="ri-more-2-fill"></i></h4>

                        </div>
                    </div>
                    
                </div> `
})
allReels.innerHTML=sum
}
addData();


allReels.addEventListener('click',function(dets){
  // console.log(dets.target)
  // console.log(reels[dets.target.id])
  // reels[dets.target.id].likeCount++
  // console.log(reels)

  // reels[dets.target.id].likeCount++
  // reels[dets.target.id].isLiked=true

  // if(!reels[dets.target.id].isLiked){
  //   reels[dets.target.id].likeCount++
  //   reels[dets.target.id].isLiked=true
  // }
  // else{
  //   reels[dets.target.id].likeCount--
  //   reels[dets.target.id].isLiked=false
  // }


  // follow bt add 

 


   if(dets.target.className =='like'){
     if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked=true
    }


    else{
       reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked=false
    }
    addData()
   }

   
   


    if(dets.target.className == 'follow'){
      if(!reels[dets.target.id].isFollowed){
        reels[dets.target.id].isFollowed=true
      }
      else{
        reels[dets.target.id].isFollowed=false
      }
      addData()
    }


      if(dets.target.className == 'mute'){
      if(!reels[dets.target.id].ismuted){
        reels[dets.target.id].ismuted=true
      }
      else{
        reels[dets.target.id].ismuted=false
      }
      addData()
    }




    


    
      
 
 

 addData()

})
