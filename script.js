const music = new Audio('audio/1.mp3');
music.play();

const songs = [
  {
    id: 1,
    songName: `Heeriye<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/"
  },
  {
    id: 2,
    songName: `Kashmir<br> 
    <div class="subtitle">Shreya Ghosal</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 3,
    songName: `Ram Siya Ram<br> 
    <div class="subtitle">Sachet Tandon</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 4,
    songName: `Bekhayali<br> 
    <div class="subtitle">Sachet Tandon</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 5,
    songName: `Chaleya<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 6,
    songName: `Dil se dil tak<br> 
    <div class="subtitle">Akashdeep SenGupta</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 7,
    songName: `Hua Main<br> 
    <div class="subtitle">Raghav Chaitanya</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 8,
    songName: `Jaadui<br> 
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 9,
    songName: `Jai Shree Ram<br> 
    <div class="subtitle">Ajay Atul</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 10,
    songName: `Lutt Putt Gaya<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 11,
    songName: `Maine Pi Rakhi Hai<br> 
    <div class="subtitle">Shreya Ghosal</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 12,
    songName: `Mitti<br> 
    <div class="subtitle">Shekhar Ravjiani</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 13,
    songName: `O Maahi<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 14,
    songName: `Papa Meri Jaan<br> 
    <div class="subtitle">Sonu Nigam</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 15,
    songName: `Pyaar Hota Kayi Baar<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 16,
    songName: `Saari Duniya Jala Denge<br> 
    <div class="subtitle">Jaani & B Praak</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 17,
    songName: `Sher Khul Gye<br> 
    <div class="subtitle">Shilpa Rao</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 18,
    songName: `Tu Hai Mujhe fir aur Kya Chahiye<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 19,
    songName: `Tum kya mile<br> 
    <div class="subtitle">Arijit Singh, Shreya Ghosal</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 20,
    songName: `Ve Haniya<br> 
    <div class="subtitle">Danny, Avvy Sra</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 21,
    songName: `Ve Kamleya<br> 
    <div class="subtitle">Arijit Singh</div>`,
    poster: "img/1.jpeg"
  },
  {
    id: 22,
    songName: `What Jhumka?<br> 
    <div class="subtitle">Arijit Singh, Jonita Gandhi</div>`,
    poster: "img/1.jpeg"
  }
]


Array.from








let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_song_right.addEventListener('click', () => {
  Artist_bx.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
  Artist_bx.scrollLeft -= 330;
});