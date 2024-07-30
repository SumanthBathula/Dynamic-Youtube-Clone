
    window.onload=function(){
        document.getElementById("autoplay").play();
    }
   
     function All(){
      let likedSection = document.querySelector(".liked-videos")
         let btn1 = document.getElementById("a")
         let recent1 = document.querySelector(".recent")
         let recent = document.querySelector(".recent2")
         let btn2 = document.getElementById("b")
         let btn3 = document.getElementById("c")
         recent1.style.display = "block"
         recent.style.display = "block"
         recent.style.display = "flex"
         recent.style.paddingLeft = "0%"
         recent.style.flexWrap = "wrap"
         recent.style.width = "750px"
         btn1.style.backgroundColor = "red"
         btn1.style.color = "white"
         btn2.style.color = "black"
         btn3.style.color = "black"
         likedSection.style.height = "246vh"
         likedSection.style.backgroundColor = "black"
         btn2.style.backgroundColor = "white"
         btn3.style.backgroundColor = "white"
     }
     
    function videos(){
      let likedSection = document.querySelector(".liked-videos")
      let btn1 = document.getElementById("a")
      let btn2 = document.getElementById("b")
      let btn3 = document.getElementById("c")
         let recent1 = document.querySelector(".recent")
         let recent = document.querySelector(".recent2")
         recent1.style.display = "block"
         recent.style.display = "none"
         btn2.style.color = "white"
         btn1.style.color = "black"
         btn3.style.color = "black"
         btn1.style.backgroundColor = "white"
         btn2.style.backgroundColor = "red"
         likedSection.style.height = "130vh"
         btn3.style.backgroundColor = "white"
    }
    
    function short(){
      let likedSection = document.querySelector(".liked-videos")
      let btn1 = document.getElementById("a")
      let btn2 = document.getElementById("b")
      let btn3 = document.getElementById("c")
         let recent1 = document.querySelector(".recent")
         let recent = document.querySelector(".recent2")
         recent1.style.display = "none"
         recent.style.display = "block"
         btn3.style.color = "white"
         btn2.style.color = "black"
         btn1.style.color = "black"
         btn1.style.backgroundColor = "white"
         btn2.style.backgroundColor = "red"
         recent.style.display = "flex"
         recent.style.paddingLeft = "10%"
         recent.style.flexWrap = "wrap"
         recent.style.width = "750px"
         btn1.style.backgroundColor = "white"
         btn2.style.backgroundColor = "white"
         btn3.style.backgroundColor = "red"
         likedSection.style.height = "140vh"
         likedSection.style.backgroundColor = "black"
    }


    function showmore(){
          let shortsReels = document.querySelector(".reels")
          let widthContainer = document.querySelector(".container")
          shortsReels.style.overFlow = "visible"
          shortsReels.style.height = "fit-content"
          widthContainer.style.height = "100%"
    }
     function home(){
        let Home = document.querySelector(".div1 i")
        let shorts = document.querySelector(".div2 i")
        let likedSection = document.querySelector(".liked-videos")
         let like = document.querySelector(".div7 i")
        let subscription = document.querySelector(".div3 i")
        let history = document.querySelector(".div5 i")
        let container = document.querySelector(".container")
        let childNavbar = document.querySelector(".child-navbar")
        let shortsDiv = document.querySelector(".shorts-container")
        let Subscriptions = document.querySelector(".Subscriptions-container")
        let sectionHistory = document.querySelector(".history-section")
        let watchSection = document.querySelector(".watch-later")
       let watch = document.querySelector(".div6 i")
       watchSection.style.display = "none"
       watch.style = "none"
       sectionHistory.style.display = "none"
       history.style = "none"
          container.style.display ="block"
          Home.style.backgroundColor = "rgb(47, 45, 45)"
          Home.style.borderRadius = "10px"
          Subscriptions.style.display = "none"
          shortsDiv.style.display = "none"
          shorts.style = "none"
          subscription.style = "none"
          childNavbar.style.display = "block"
          likedSection.style.display = "none"
        like.style = "none"
        
     }
        
     function shorts(){
       let Home = document.querySelector(".div1 i")
       let shorts = document.querySelector(".div2 i")
       let subscription = document.querySelector(".div3 i")
       let likedSection = document.querySelector(".liked-videos")
        let like = document.querySelector(".div7 i")
       let history = document.querySelector(".div5 i")
       let container = document.querySelector(".container")
       let childNavbar = document.querySelector(".child-navbar")
        let shortsDiv = document.querySelector(".shorts-container")
        let Subscriptions = document.querySelector(".Subscriptions-container")
        let sectionHistory = document.querySelector(".history-section")
        let watchSection = document.querySelector(".watch-later")
       let watch = document.querySelector(".div6 i")
       watchSection.style.display = "none"
       watch.style = "none"
       sectionHistory.style.display = "none"
       history.style = "none"
         container.style.display ="none"
          Home.style = "none"
          subscription.style = "none"
          shorts.style.backgroundColor = "rgb(47, 45, 45)"
          shorts.style.borderRadius = "10px"
          Subscriptions.style.display = "none"
          shortsDiv.style.display = "block"
          childNavbar.style.display = "none"
          likedSection.style.display = "none"
        like.style = "none"
     }

     function subscriptions(){
       let Home = document.querySelector(".div1 i")
       let shorts = document.querySelector(".div2 i")
       let likedSection = document.querySelector(".liked-videos")
        let like = document.querySelector(".div7 i")
       let subscription = document.querySelector(".div3 i")
       let history = document.querySelector(".div5 i")
       let container = document.querySelector(".container")
       let shortsDiv = document.querySelector(".shorts-container")
       let childNavbar = document.querySelector(".child-navbar")
       let Subscriptions = document.querySelector(".Subscriptions-container")
       let sectionHistory = document.querySelector(".history-section")
       let watchSection = document.querySelector(".watch-later")
       let watch = document.querySelector(".div6 i")
       watchSection.style.display = "none"
       watch.style = "none"
       sectionHistory.style.display = "none"
       subscription.style.backgroundColor = "rgb(47, 45, 45)"
       subscription.style.borderRadius = "10px"
       Home.style = "none"
       shorts.style = "none"
       history.style = "none"
       container.style.display ="none"
       Subscriptions.style.display = "block"
       shortsDiv.style.display = "none"
       childNavbar.style.display = "none"
       likedSection.style.display = "none"
        like.style = "none"
     }
     
     function history(){
      let Home = document.querySelector(".div1 i")
       let shorts = document.querySelector(".div2 i")
       let subscription = document.querySelector(".div3 i")
       let likedSection = document.querySelector(".liked-videos")
        let like = document.querySelector(".div7 i")
        let history = document.querySelector(".div5 i")
        let sectionHistory = document.querySelector(".history-section")
        let container = document.querySelector(".container")
       let shortsDiv = document.querySelector(".shorts-container")
       let childNavbar = document.querySelector(".child-navbar")
       let Subscriptions = document.querySelector(".Subscriptions-container")
       let watchSection = document.querySelector(".watch-later")
       let watch = document.querySelector(".div6 i")
       watchSection.style.display = "none"
       watch.style = "none"
        sectionHistory.style.display = "block"
        container.style.display ="none"
       Subscriptions.style.display = "none"
       shortsDiv.style.display = "none"
       childNavbar.style.display = "none"
       history.style.backgroundColor = "rgb(47, 45, 45)"
       history.style.borderRadius = "10px"
       Home.style = "none"
       shorts.style = "none"
       subscription.style = "none"
       likedSection.style.display = "none"
        like.style = "none"

     }

     function watchLater(){
      let watchSection = document.querySelector(".watch-later")
      let likedSection = document.querySelector(".liked-videos")
       let like = document.querySelector(".div7 i")
      let Home = document.querySelector(".div1 i")
       let shorts = document.querySelector(".div2 i")
       let subscription = document.querySelector(".div3 i")
        let history = document.querySelector(".div5 i")
        let watch = document.querySelector(".div6 i")
        let sectionHistory = document.querySelector(".history-section")
        let container = document.querySelector(".container")
       let shortsDiv = document.querySelector(".shorts-container")
       let childNavbar = document.querySelector(".child-navbar")
       let Subscriptions = document.querySelector(".Subscriptions-container")
        sectionHistory.style.display = "none"
        container.style.display ="none"
       Subscriptions.style.display = "none"
       shortsDiv.style.display = "none"
       childNavbar.style.display = "none"
       watch.style.backgroundColor = "rgb(47, 45, 45)"
       watch.style.borderRadius = "10px"
       Home.style = "none"
       shorts.style = "none"
       subscription.style = "none"
       history.style = "none"
       watchSection.style.display = "block"
        likedSection.style.display = "none"
        like.style = "none"
     }
     function likedVideos(){
     let likedSection = document.querySelector(".liked-videos")
     let like = document.querySelector(".div7 i")
     let watchSection = document.querySelector(".watch-later")
      let Home = document.querySelector(".div1 i")
       let shorts = document.querySelector(".div2 i")
       let subscription = document.querySelector(".div3 i")
        let history = document.querySelector(".div5 i")
        let watch = document.querySelector(".div6 i")
        let sectionHistory = document.querySelector(".history-section")
        let container = document.querySelector(".container")
       let shortsDiv = document.querySelector(".shorts-container")
       let childNavbar = document.querySelector(".child-navbar")
       let Subscriptions = document.querySelector(".Subscriptions-container")
       sectionHistory.style.display = "none"
        container.style.display ="none"
       Subscriptions.style.display = "none"
       shortsDiv.style.display = "none"
       childNavbar.style.display = "none"
       like.style.backgroundColor = "rgb(47, 45, 45)"
       like.style.borderRadius = "10px"
       Home.style = "none"
       shorts.style = "none"
       subscription.style = "none"
       history.style = "none"
       watchSection.style.display = "none"
        watch.style = "none"
        likedSection.style.display = "block"

    }






    function allbtn(){
      let container = document.querySelector(".container")
      let CristianoRonaldoBt = document.querySelector(".cristiano")
      let childBt2 = document.getElementById("child-bt2")
      let childBt1 = document.getElementById("child-bt1")
      childBt2.style = "none"
      let TeluguMoviesBt = document.querySelector(".TeluguMovies")
      childBt1.style.backgroundColor = "rgb(223, 218, 218)"
      CristianoRonaldoBt.style.display = "none"
      container.style.display = "block"
      let childBt3 = document.getElementById("child-bt3")
      childBt1.style.color = "black"
      childBt1.style.transition = "0.1s"
      TeluguMoviesBt.style.display = "none"
      childBt3.style = "none"
      
    }
    function CristianoRonaldo(){
      let CristianoRonaldoBt = document.querySelector(".cristiano")
      let container = document.querySelector(".container")
      let childBt3 = document.getElementById("child-bt3")
      let TeluguMoviesBt = document.querySelector(".TeluguMovies")
      let childBt2 = document.getElementById("child-bt2")
      let childBt1 = document.getElementById("child-bt1")
      childBt1.style = "none"
      CristianoRonaldoBt.style.display = "block"
      container.style.display = "none"
      childBt2.style.backgroundColor = "rgb(223, 218, 218)"
      childBt2.style.color = "black"
      childBt2.style.transition = "0.1s"
      TeluguMoviesBt.style.display = "none"
      childBt3.style = "none"
      

    }  
  

  function TeluguMovies(){
         let TeluguMoviesBt = document.querySelector(".TeluguMovies")
         let childBt3 = document.getElementById("child-bt3")
         let CristianoRonaldoBt = document.querySelector(".cristiano")
         let container = document.querySelector(".container")
         let childBt2 = document.getElementById("child-bt2")
         let childBt1 = document.getElementById("child-bt1")
         childBt1.style = "none"
         CristianoRonaldoBt.style.display = "none"
         container.style.display = "none"
         TeluguMoviesBt.style.display = "block"
         childBt3.style.backgroundColor = "rgb(223, 218, 218)"
         childBt3.style.color = "black"
         childBt3.style.transition = "0.1s"
         childBt2.style = "none"

  }

  