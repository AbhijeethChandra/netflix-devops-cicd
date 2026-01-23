import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: Number,
  description: String,
  posterUrl: String,
  category: String,
  trailerUrl: String, 
});


const Movie = mongoose.model("Movie", movieSchema);

const MONGO_URI = process.env.MONGO_URI || "";

async function seed() {
  await mongoose.connect(MONGO_URI);

  await Movie.deleteMany({});

  await Movie.insertMany([
    // ⭐ TRENDING (10)
    {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      description: "A thief enters dreams to steal secrets.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      category: "Trending",
      trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: 8.6,
      description: "Explorers travel through a wormhole in space.",
      posterUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/8d8f28105415493.619ded067937d.jpg",
      category: "Trending",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      description: "Batman faces the Joker in Gotham.",
      posterUrl: "https://m.media-amazon.com/images/I/A1exRxgHRRL.jpg",
      category: "Trending",
    },
    {
      title: "Avatar: The Way of Water",
      year: 2022,
      genre: "Fantasy",
      rating: 7.6,
      description: "Jake Sully lives with his new family on Pandora.",
      posterUrl:
        "https://m.media-amazon.com/images/I/91rGc0FAcyL.jpg",
      category: "Trending",
    },
    {
      title: "Oppenheimer",
      year: 2023,
      genre: "Drama",
      rating: 8.4,
      description: "Story of J. Robert Oppenheimer and the atomic bomb.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2RmYmVmMzctMzc5Ny00MmNiLTgxMGUtYjk1ZDRhYjA2YTU0XkEyXkFqcGc@._V1_.jpg",
      category: "Trending",
    },
    {
      title: "Dune",
      year: 2021,
      genre: "Sci-Fi",
      rating: 8.0,
      description: "A noble family becomes embroiled in a war for a desert planet.",
      posterUrl:
        "https://m.media-amazon.com/images/I/61G3TAFVdSL._AC_UF894,1000_QL80_.jpg",
      category: "Trending",
    },
    {
      title: "Spider-Man: No Way Home",
      year: 2021,
      genre: "Superhero",
      rating: 8.2,
      description: "Peter Parker seeks help after his identity is revealed.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
      category: "Trending",
    },
    {
      title: "John Wick",
      year: 2014,
      genre: "Action",
      rating: 7.4,
      description: "An ex-hitman comes out of retirement.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
      category: "Trending",
    },
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      genre: "Action",
      rating: 8.1,
      description: "In a post-apocalyptic wasteland, Max helps a rebel.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Trending",
    },
    {
      title: "Joker",
      year: 2019,
      genre: "Drama",
      rating: 8.4,
      description: "A failed comedian descends into madness.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Trending",
    },

    // ⭐ SERIES (10)
    {
      title: "Stranger Things",
      year: 2016,
      genre: "Sci-Fi Series",
      rating: 8.7,
      description: "Kids in Hawkins face supernatural forces.",
      posterUrl:
        "https://m.media-amazon.com/images/I/81U0-cRG34S._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },
    {
      title: "Money Heist",
      year: 2017,
      genre: "Crime Series",
      rating: 8.2,
      description: "A mastermind leads a heist on the Royal Mint.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Series",
    },
    {
      title: "Breaking Bad",
      year: 2008,
      genre: "Crime Series",
      rating: 9.5,
      description: "A chemistry teacher turns to making meth.",
      posterUrl:
        "https://m.media-amazon.com/images/I/51fWOBx3agL._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },
    {
      title: "Friends",
      year: 1994,
      genre: "Sitcom",
      rating: 8.9,
      description: "Six friends navigate life and love in New York.",
      posterUrl:
        "https://m.media-amazon.com/images/I/7103aePOXVL._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },
    {
      title: "The Witcher",
      year: 2019,
      genre: "Fantasy Series",
      rating: 8.1,
      description: "A monster hunter struggles to find his place.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Series",
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Fantasy Series",
      rating: 9.2,
      description: "Noble families vie for control of the Iron Throne.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Series",
    },
    {
      title: "The Office",
      year: 2005,
      genre: "Comedy Series",
      rating: 9.0,
      description: "The everyday lives of office employees in Scranton.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg",
      category: "Series",
    },
    {
      title: "Dark",
      year: 2017,
      genre: "Sci-Fi Series",
      rating: 8.8,
      description: "A time-travel mystery in a small German town.",
      posterUrl:
        "https://m.media-amazon.com/images/I/41Fv9HYZgAL._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },
    {
      title: "Peaky Blinders",
      year: 2013,
      genre: "Crime Series",
      rating: 8.8,
      description: "A gangster family epic set in 1900s England.",
      posterUrl:
        "https://m.media-amazon.com/images/I/61o+7X049mL._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },
    {
      title: "Lucifer",
      year: 2016,
      genre: "Fantasy Series",
      rating: 8.1,
      description: "The Devil runs a nightclub and solves crimes.",
      posterUrl:
        "https://m.media-amazon.com/images/I/61p5LXxllyL._AC_UF894,1000_QL80_.jpg",
      category: "Series",
    },

    // ⭐ MOVIES (10) – with Bollywood
    {
      title: "3 Idiots",
      year: 2009,
      genre: "Bollywood • Comedy-Drama",
      rating: 8.4,
      description: "Three friends and their journey through engineering college.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMzY2MzgxNDI5MV5BMl5BanBnXkFtZTcwMzk2MzkwMw@@._V1_.jpg",
      category: "Movies",
    },
    {
      title: "Dilwale Dulhania Le Jayenge",
      year: 1995,
      genre: "Bollywood • Romance",
      rating: 8.0,
      description: "Raj and Simran fall in love on a European trip.",
      posterUrl: "https://m.media-amazon.com/images/I/71CcdFCKHwL._AC_UF894,1000_QL80_.jpg",
      category: "Movies",
    },
    {
      title: "KGF: Chapter 1",
      year: 2018,
      genre: "Indian • Action",
      rating: 8.2,
      description: "Rocky rises to power in the Kolar Gold Fields.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_.jpg",
      category: "Movies",
    },
    {
      title: "Baahubali: The Beginning",
      year: 2015,
      genre: "Indian • Fantasy",
      rating: 8.0,
      description: "A young man discovers his royal heritage.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Movies",
    },
    {
      title: "RRR",
      year: 2022,
      genre: "Indian • Action",
      rating: 7.8,
      description: "Two legendary revolutionaries and their journey.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
      category: "Movies",
    },
    {
      title: "Sanju",
      year: 2018,
      genre: "Bollywood • Biopic",
      rating: 7.6,
      description: "A biopic of actor Sanjay Dutt.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/85/Sanju_poster.jpg",
      category: "Movies",
    },
    {
      title: "Drishyam 2",
      year: 2021,
      genre: "Indian • Thriller",
      rating: 8.3,
      description: "Vijay Salgaonkar protects his family again.",
      posterUrl:
        "https://m.media-amazon.com/images/I/51+T64TxZXL._AC_UF894,1000_QL80_.jpg",
      category: "Movies",
    },
    {
      title: "Zindagi Na Milegi Dobara",
      year: 2011,
      genre: "Bollywood • Drama",
      rating: 8.2,
      description: "Three friends rediscover life on a road trip.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Movies",
    },
    {
      title: "Dangal",
      year: 2016,
      genre: "Bollywood • Sports",
      rating: 8.3,
      description: "A father trains his daughters to be wrestlers.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71NiFuBLemL._AC_UF894,1000_QL80_.jpg",
      category: "Movies",
    },
    {
      title: "PK",
      year: 2014,
      genre: "Bollywood • Comedy-Drama",
      rating: 8.1,
      description: "An alien questions religious dogmas on Earth.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNjQ5NzIwNmEtNTBiMi00N2M5LWExOWEtNmQwZGQ0YjVkZTkwXkEyXkFqcGc@._V1_.jpg",
      category: "Movies",
    },

    // ⭐ LOVE (10)
    {
      title: "La La Land",
      year: 2016,
      genre: "Romance",
      rating: 8.0,
      description: "A jazz pianist and an actress fall in love.",
      posterUrl:
        "https://m.media-amazon.com/images/I/81L+uXlv5CL._AC_UF894,1000_QL80_.jpg",
      category: "Love",
    },
    {
      title: "The Notebook",
      year: 2004,
      genre: "Romance",
      rating: 7.8,
      description: "A poor man and a rich young woman fall in love.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg",
      category: "Love",
    },
    {
      title: "Yeh Jawaani Hai Deewani",
      year: 2013,
      genre: "Bollywood • Romance",
      rating: 7.2,
      description: "Four friends on a life-changing trip.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg",
      category: "Love",
      trailerUrl: "https://www.youtube.com/embed/Rbp2XUSeUNE",
    },
    {
      title: "Jab We Met",
      year: 2007,
      genre: "Bollywood • Romance",
      rating: 7.9,
      description: "A depressed man meets a lively Punjabi girl.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYmEyMmYyOTgtM2I0My00M2QyLWJhYTYtNmNhOGYzMzQwMjVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Love",
    },
    {
      title: "Titanic",
      year: 1997,
      genre: "Romance",
      rating: 7.9,
      description: "A love story aboard the Titanic.",
      posterUrl:
        "https://m.media-amazon.com/images/I/61xncIl872L._AC_UF894,1000_QL80_.jpg",
      category: "Love",
    },
    {
      title: "Kal Ho Naa Ho",
      year: 2003,
      genre: "Bollywood • Romance",
      rating: 7.9,
      description: "A man with a secret illness transforms lives.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZTczMDQ0N2EtMTY4NS00ODJhLTk4MzQtOGJmZGRmY2M4MWQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Love",
    },
    {
      title: "A Walk to Remember",
      year: 2002,
      genre: "Romance",
      rating: 7.3,
      description: "A school rebel falls for a quiet girl.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Walk_to_Remember_Poster.jpg",
      category: "Love",
    },
    {
      title: "Before Sunrise",
      year: 1995,
      genre: "Romance",
      rating: 8.1,
      description: "Two strangers bond over one night in Vienna.",
      posterUrl:
        "https://m.media-amazon.com/images/I/81ZrQXcSmQL._AC_SL1500_.jpghttps://m.media-amazon.com/images/I/71RTxRD4H3S._AC_UF894,1000_QL80_.jpg",
      category: "Love",
    },
    {
      title: "Barfi!",
      year: 2012,
      genre: "Bollywood • Romance",
      rating: 8.1,
      description: "A deaf-mute boy and his relationships.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_FMjpg_UX1000_.jpg",
      category: "Love",
    },
    {
      title: "Rockstar",
      year: 2011,
      genre: "Bollywood • Romance",
      rating: 7.7,
      description: "A singer's turbulent journey through fame and love.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_FMjpg_UX1000_.jpg",
      category: "Love",
    },

    // ⭐ SUSPENSE (10)
    {
      title: "Shutter Island",
      year: 2010,
      genre: "Thriller",
      rating: 8.2,
      description: "A U.S. Marshal investigates a psychiatric facility.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6BDD64nCrbkGVkL7rYXxjvfAgPCU5AHcvw&s",
      category: "Suspense",
    },
    {
      title: "Gone Girl",
      year: 2014,
      genre: "Thriller",
      rating: 8.1,
      description: "A man becomes the suspect in his wife's disappearance.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg",
      category: "Suspense",
    },
    {
      title: "Drishyam",
      year: 2013,
      genre: "Indian • Thriller",
      rating: 8.2,
      description: "A man covers up an accidental crime.",
      posterUrl:
        "https://m.media-amazon.com/images/I/714kDfwueCL.jpg",
      category: "Suspense",
    },
    {
      title: "Andhadhun",
      year: 2018,
      genre: "Indian • Dark Comedy Thriller",
      rating: 8.2,
      description: "A blind pianist becomes entangled in a murder.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjZiYTNkNjUtNzI3MC00YWJmLTljM2QtNTI3MTU3ODYzNWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Suspense",
    },
    {
      title: "Se7en",
      year: 1995,
      genre: "Thriller",
      rating: 8.6,
      description: "Two detectives hunt a serial killer.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Suspense",
    },
    {
      title: "The Prestige",
      year: 2006,
      genre: "Mystery",
      rating: 8.5,
      description: "Two magicians engage in a deadly rivalry.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTM3MzQ5MjQ5OF5BMl5BanBnXkFtZTcwMTQ3NzMzMw@@._V1_QL75_UY281_CR0,0,190,281_.jpg",
      category: "Suspense",
    },
    {
      title: "Fight Club",
      year: 1999,
      genre: "Drama • Thriller",
      rating: 8.8,
      description: "An insomniac meets a soap salesman.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Suspense",
    },
    {
      title: "Kahaani",
      year: 2012,
      genre: "Indian • Thriller",
      rating: 8.1,
      description: "A pregnant woman searches for her missing husband.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQ1NDI0NzkyOF5BMl5BanBnXkFtZTcwNzAyNzE2Nw@@._V1_FMjpg_UX1000_.jpg",
      category: "Suspense",
    },
    {
      title: "Talaash",
      year: 2012,
      genre: "Indian • Mystery",
      rating: 7.2,
      description: "A cop investigates a mysterious accident.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJM--b0fKX-7WCGAtkLMAC7-dUUlq4rWTYLA&s",
      category: "Suspense",
    },
    {
      title: "The Sixth Sense",
      year: 1999,
      genre: "Thriller",
      rating: 8.2,
      description: "A boy who communicates with spirits seeks help.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_.jpg",
      category: "Suspense",
    },

    // ⭐ KIDS – CARTOONS (10)
    {
      title: "Tom and Jerry",
      year: 1940,
      genre: "Cartoon",
      rating: 8.5,
      description: "Cat and mouse classic cartoon.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BT3dfJoKL.jpg",
      category: "Kids-Cartoon",
    },
    {
      title: "Doraemon",
      year: 1979,
      genre: "Cartoon",
      rating: 8.0,
      description: "A robotic cat helps Nobita with gadgets.",
      posterUrl:
        "https://m.media-amazon.com/images/I/61u7TEtIM6L.jpg",
      category: "Kids-Cartoon",
    },
    {
      title: "Motu Patlu",
      year: 2012,
      genre: "Cartoon",
      rating: 7.2,
      description: "Two friends get into funny trouble.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghGDzmkongDoDgmSSRz8Ebv15hOtfHN-66w&s",
      category: "Kids-Cartoon",
    },
    {
      title: "Chhota Bheem",
      year: 2008,
      genre: "Cartoon",
      rating: 7.5,
      description: "Bheem saves Dholakpur with his strength.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjFhNzU4NmItOTczMC00YTMyLTkzZjgtNTJjZDA0YmRkZTc4XkEyXkFqcGc@._V1_.jpg",
      category: "Kids-Cartoon",
    },
    {
      title: "Shinchan",
      year: 1992,
      genre: "Cartoon",
      rating: 8.0,
      description: "Mischievous kid causes chaos.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71-H2PEBaBL.jpg",
      category: "Kids-Cartoon",
    },
    {
      title: "Ben 10",
      year: 2005,
      genre: "Cartoon",
      rating: 7.4,
      description: "A boy uses an alien watch to fight evil.",
      posterUrl:
        "https://m.media-amazon.com/images/I/81T-CX+SlJL.jpg",
      category: "Kids-Cartoon",
    },
    {
      title: "Pokémon",
      year: 1997,
      genre: "Cartoon",
      rating: 7.5,
      description: "Ash Ketchum travels to become a Pokémon master.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXIeaxImgaqDFQHgEFPApxJy5E4br-FMEgw&s",
      category: "Kids-Cartoon",
    },
    {
      title: "Scooby-Doo",
      year: 1969,
      genre: "Cartoon",
      rating: 7.9,
      description: "Mystery-solving teens and their talking dog.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreKcTek-CEen9iLuMjtv14BKRjhhTWMGobw&s",
      category: "Kids-Cartoon",
    },
    {
      title: "Phineas and Ferb",
      year: 2007,
      genre: "Cartoon",
      rating: 8.1,
      description: "Two stepbrothers invent crazy things each day.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8KMRGuCnsgAumyll6babrdU27sIz3uf3ZA&s",
      category: "Kids-Cartoon",
    },
    {
      title: "Oggy and the Cockroaches",
      year: 1998,
      genre: "Cartoon",
      rating: 7.4,
      description: "A lazy cat fights three pesky cockroaches.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzY3ZDVhMDMtOWQ1NS00NDc2LWI2OGQtY2YxOTdjMDMxZjJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "Kids-Cartoon",
    },

    // ⭐ KIDS – MOVIES (10)
    {
      title: "Toy Story",
      year: 1995,
      genre: "Animation",
      rating: 8.3,
      description: "Toys come to life when humans are away.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71aBLaC4TzL.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Frozen",
      year: 2013,
      genre: "Animation",
      rating: 7.4,
      description: "Two sisters and a kingdom in eternal winter.",
      posterUrl:
        "https://m.media-amazon.com/images/I/819lixgNvOL._AC_UF1000,1000_QL80_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Finding Nemo",
      year: 2003,
      genre: "Animation",
      rating: 8.2,
      description: "A clownfish searches for his son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_FMjpg_UX1000_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "The Lion King",
      year: 1994,
      genre: "Animation",
      rating: 8.5,
      description: "Simba learns to take his place as king.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Coco",
      year: 2017,
      genre: "Animation",
      rating: 8.4,
      description: "A boy travels to the Land of the Dead.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71NNjdL6mOL._AC_UF894,1000_QL80_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Inside Out",
      year: 2015,
      genre: "Animation",
      rating: 8.1,
      description: "A girl's emotions struggle with a big move.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_FMjpg_UX1000_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Moana",
      year: 2016,
      genre: "Animation",
      rating: 7.6,
      description: "A girl sails to save her island.",
      posterUrl:
        "https://m.media-amazon.com/images/I/81edXbR2YtL._AC_UF894,1000_QL80_.jpg",
      category: "Kids-Movie",
      trailerUrl:"https://www.youtube.com/embed/LKFuXETZUsI",
    },
    {
      title: "Despicable Me",
      year: 2010,
      genre: "Animation",
      rating: 7.6,
      description: "A supervillain adopts three girls.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Kung Fu Panda",
      year: 2008,
      genre: "Animation",
      rating: 7.6,
      description: "A clumsy panda becomes the Dragon Warrior.",
      posterUrl:
        "https://m.media-amazon.com/images/I/51qboNmFw3L._AC_UF894,1000_QL80_.jpg",
      category: "Kids-Movie",
    },
    {
      title: "Madagascar",
      year: 2005,
      genre: "Animation",
      rating: 6.9,
      description: "Zoo animals end up in the wild.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71xU7YhoDIL.jpg",
      category: "Kids-Movie",
    },
  ]);

  console.log("Seed done ✅");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
