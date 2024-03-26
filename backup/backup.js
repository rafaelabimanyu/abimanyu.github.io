function closeOpening() {
    const opening = document.getElementById("opening");
    opening.style.display = "none";
}


const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

const films = [
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto

    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    {   
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1 
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    },
    { 
        title: "Naruto", 
        genre: "Anime", 
        year: 2014, 
        thumbnail: "gambar/naruto.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.2 
    }, //BATAS NARUTO
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    },
    { 
        title: "Boruto", 
        genre: "Anime", 
        year: 2017, 
        thumbnail: "gambar/nonton-boruto-192-jadwal-rilis-boruto-naruto-next-generations-di-april-2021-bocoran-boruto-193.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi ipsa repellendus sunt quo maxime accusamus voluptatibus dolorum pariatur quia, eaque nemo at obcaecati voluptatem necessitatibus optio! Placeat, harum adipisci.",        
        rating: 9.1   
    }, // batas boruto
];

function displayMovies() {
    const moviesSection = document.getElementById("movies");

    films.forEach(film => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${film.thumbnail}" alt="${film.title}">
            <h2>${film.title}</h2>
            <p><strong>Genre:</strong> ${film.genre}</p>
            <p><strong>Year:</strong> ${film.year}</p>
            <p>${film.description}</p>
            <div class="star-rating">${getStarRating(film.rating)}</div>
        `;
        moviesSection.appendChild(movieElement);
    });
}

function getStarRating(rating) {
    const roundedRating = Math.round(rating * 2) / 2; // Pembulatan rating ke setengah bintang terdekat
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (roundedRating >= i + 0.5) {
            stars += '<span>&#9733;</span>'; // Karakter bintang berbentuk solid
        } else if (roundedRating >= i) {
            stars += '<span>&#9734;</span>'; // Karakter bintang berbentuk outline
        } else {
            stars += ''; // Tidak ada karakter bintang
        }
    }
    return stars;
}

window.onload = displayMovies;