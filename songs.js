// ===== SONGS DATABASE - 70+ Free Songs =====
// All songs are from free-to-use sources (Pixabay, Free Music Archive, etc.)

const songsDatabase = [
    // ===== POP =====
    {
        id: 1,
        title: "Happy Day",
        artist: "SoulProdMusic",
        genre: "pop",
        duration: "3:15",
        url: "https://cdn.pixabay.com/audio/2025/02/17/audio_1b8d0a2f3c.mp3",
        art: "https://cdn.pixabay.com/photo/2017/09/28/09/41/music-2794704_1280.jpg",
        trending: true
    },
    {
        id: 2,
        title: "Summer Vibes",
        artist: "FASSounds",
        genre: "pop",
        duration: "2:48",
        url: "https://cdn.pixabay.com/audio/2024/11/21/audio_b62c9f3a1d.mp3",
        art: "https://cdn.pixabay.com/photo/2020/04/20/18/13/summer-5071637_1280.jpg",
        trending: true
    },
    {
        id: 3,
        title: "Dance All Night",
        artist: "penguinmusic",
        genre: "pop",
        duration: "3:32",
        url: "https://cdn.pixabay.com/audio/2024/06/21/audio_3c9e2b7a1f.mp3",
        art: "https://cdn.pixabay.com/photo/2019/02/11/19/13/disco-3990648_1280.jpg",
        trending: true
    },
    {
        id: 4,
        title: "Sunshine",
        artist: "DayFox",
        genre: "pop",
        duration: "3:05",
        url: "https://cdn.pixabay.com/audio/2024/08/15/audio_5a7d3e9c2b.mp3",
        art: "https://cdn.pixabay.com/photo/2021/08/04/14/02/sunset-6522110_1280.jpg"
    },
    {
        id: 5,
        title: "Lovely Day",
        artist: "Music_Unlimited",
        genre: "pop",
        duration: "2:55",
        url: "https://cdn.pixabay.com/audio/2024/04/18/audio_7f1d4a8c3e.mp3",
        art: "https://cdn.pixabay.com/photo/2018/04/22/22/50/flowers-3340690_1280.jpg"
    },
    {
        id: 6,
        title: "Pop Star",
        artist: "SoulProdMusic",
        genre: "pop",
        duration: "3:22",
        url: "https://cdn.pixabay.com/audio/2024/10/05/audio_9d2e4f1b7a.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/22/22/27/microphone-1851169_1280.jpg"
    },
    {
        id: 7,
        title: "Celebration",
        artist: "SoulProdMusic",
        genre: "pop",
        duration: "2:38",
        url: "https://cdn.pixabay.com/audio/2025/01/12/audio_4a8c2e6d9f.mp3",
        art: "https://cdn.pixabay.com/photo/2015/10/30/20/35/celebration-1014714_1280.jpg"
    },
    {
        id: 8,
        title: "Feeling Good",
        artist: "SoulProdMusic",
        genre: "pop",
        duration: "3:10",
        url: "https://cdn.pixabay.com/audio/2024/09/28/audio_2f5b8d1a7c.mp3",
        art: "https://cdn.pixabay.com/photo/2022/08/07/08/47/people-7370179_1280.jpg"
    },

    // ===== HIP-HOP =====
    {
        id: 9,
        title: "Beat Flow",
        artist: "AlexGrohl",
        genre: "hip-hop",
        duration: "3:42",
        url: "https://cdn.pixabay.com/audio/2024/07/14/audio_6b3e8f2c1a.mp3",
        art: "https://cdn.pixabay.com/photo/2018/07/08/21/00/hip-hop-3524810_1280.jpg",
        trending: true
    },
    {
        id: 10,
        title: "City Lights",
        artist: "penguinmusic",
        genre: "hip-hop",
        duration: "3:18",
        url: "https://cdn.pixabay.com/audio/2024/05/22/audio_8d1a4f7b2e.mp3",
        art: "https://cdn.pixabay.com/photo/2019/05/29/22/48/city-4237839_1280.jpg",
        trending: true
    },
    {
        id: 11,
        title: "Hustle Mode",
        artist: "Coma-Media",
        genre: "hip-hop",
        duration: "3:05",
        url: "https://cdn.pixabay.com/audio/2024/12/01/audio_3f7b2e5a8d.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/28/13/47/man-1866571_1280.jpg"
    },
    {
        id: 12,
        title: "Rap Beat",
        artist: "AlexGrohl",
        genre: "hip-hop",
        duration: "3:55",
        url: "https://cdn.pixabay.com/audio/2025/03/05/audio_1a4d7f9c2e.mp3",
        art: "https://cdn.pixabay.com/photo/2017/08/30/07/56/music-2696749_1280.jpg"
    },
    {
        id: 13,
        title: "Night Rider",
        artist: "penguinmusic",
        genre: "hip-hop",
        duration: "2:58",
        url: "https://cdn.pixabay.com/audio/2024/03/15/audio_5b8e2d1a7c.mp3",
        art: "https://cdn.pixabay.com/photo/2020/06/05/21/29/car-5265788_1280.jpg"
    },
    {
        id: 14,
        title: "Down Town",
        artist: "AlexGrohl",
        genre: "hip-hop",
        duration: "3:28",
        url: "https://cdn.pixabay.com/audio/2024/11/09/audio_7c1e4a8d3f.mp3",
        art: "https://cdn.pixabay.com/photo/2018/01/21/07/58/downtown-3096136_1280.jpg"
    },

    // ===== ROCK =====
    {
        id: 15,
        title: "Electric Guitar",
        artist: "RockyMusic",
        genre: "rock",
        duration: "3:45",
        url: "https://cdn.pixabay.com/audio/2024/08/30/audio_2d6a9c3e7b.mp3",
        art: "https://cdn.pixabay.com/photo/2016/09/28/13/36/electric-guitar-1700408_1280.jpg",
        trending: true
    },
    {
        id: 16,
        title: "Rock Anthem",
        artist: "penguinmusic",
        genre: "rock",
        duration: "4:02",
        url: "https://cdn.pixabay.com/audio/2024/06/10/audio_4f8b1d3a6c.mp3",
        art: "https://cdn.pixabay.com/photo/2017/05/08/17/57/concert-2295837_1280.jpg",
        trending: true
    },
    {
        id: 17,
        title: "Guitar Solo",
        artist: "RockyMusic",
        genre: "rock",
        duration: "3:30",
        url: "https://cdn.pixabay.com/audio/2024/10/18/audio_8e3a6c1d4f.mp3",
        art: "https://cdn.pixabay.com/photo/2018/09/10/17/47/guitar-3667665_1280.jpg"
    },
    {
        id: 18,
        title: "Hard Rock",
        artist: "Music_Forge",
        genre: "rock",
        duration: "3:58",
        url: "https://cdn.pixabay.com/audio/2025/02/01/audio_1c4f7e9b2d.mp3",
        art: "https://cdn.pixabay.com/photo/2019/07/17/15/39/guitar-4344932_1280.jpg"
    },
    {
        id: 19,
        title: "Rock Ballad",
        artist: "penguinmusic",
        genre: "rock",
        duration: "4:12",
        url: "https://cdn.pixabay.com/audio/2024/04/05/audio_6d2a8f4b1e.mp3",
        art: "https://cdn.pixabay.com/photo/2016/03/09/09/21/guitarist-1245888_1280.jpg"
    },
    {
        id: 20,
        title: "Wildfire",
        artist: "RockyMusic",
        genre: "rock",
        duration: "3:25",
        url: "https://cdn.pixabay.com/audio/2024/12/20/audio_3a7e1c5d8b.mp3",
        art: "https://cdn.pixabay.com/photo/2017/01/28/18/53/fire-2016212_1280.jpg"
    },

    // ===== ELECTRONIC =====
    {
        id: 21,
        title: "Electronic Dream",
        artist: "FASSounds",
        genre: "electronic",
        duration: "4:15",
        url: "https://cdn.pixabay.com/audio/2024/09/12/audio_5c1e9a3d7f.mp3",
        art: "https://cdn.pixabay.com/photo/2020/05/14/17/05/cyber-5171416_1280.jpg",
        trending: true
    },
    {
        id: 22,
        title: "Techno Beat",
        artist: "penguinmusic",
        genre: "electronic",
        duration: "3:48",
        url: "https://cdn.pixabay.com/audio/2024/07/28/audio_2b8d4f1a6c.mp3",
        art: "https://cdn.pixabay.com/photo/2018/05/10/11/10/neon-3387220_1280.jpg",
        trending: true
    },
    {
        id: 23,
        title: "Deep House",
        artist: "SergeQuadrado",
        genre: "electronic",
        duration: "4:30",
        url: "https://cdn.pixabay.com/audio/2024/11/15/audio_7e3a1c5d8b.mp3",
        art: "https://cdn.pixabay.com/photo/2016/10/21/14/03/abstract-1758191_1280.jpg"
    },
    {
        id: 24,
        title: "Synth Wave",
        artist: "FASSounds",
        genre: "electronic",
        duration: "3:55",
        url: "https://cdn.pixabay.com/audio/2025/01/20/audio_4a8d2f6b1c.mp3",
        art: "https://cdn.pixabay.com/photo/2018/03/10/23/06/neon-3214397_1280.jpg"
    },
    {
        id: 25,
        title: "Midnight",
        artist: "penguinmusic",
        genre: "electronic",
        duration: "3:40",
        url: "https://cdn.pixabay.com/audio/2024/03/28/audio_9c2e6a1d4f.mp3",
        art: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
    },
    {
        id: 26,
        title: "Chill Step",
        artist: "FASSounds",
        genre: "electronic",
        duration: "3:22",
        url: "https://cdn.pixabay.com/audio/2024/10/30/audio_1b5d8a3c7e.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
    },

    // ===== R&B =====
    {
        id: 27,
        title: "Smooth Groove",
        artist: "SoulProdMusic",
        genre: "r&b",
        duration: "3:38",
        url: "https://cdn.pixabay.com/audio/2024/08/08/audio_6f2c5a1d9b.mp3",
        art: "https://cdn.pixabay.com/photo/2018/04/05/12/05/vinyl-3293595_1280.jpg",
        trending: true
    },
    {
        id: 28,
        title: "Neon Nights",
        artist: "Coma-Media",
        genre: "r&b",
        duration: "3:15",
        url: "https://cdn.pixabay.com/audio/2024/06/15/audio_3d7a1e5c9f.mp3",
        art: "https://cdn.pixabay.com/photo/2019/06/07/19/22/neon-4258779_1280.jpg"
    },
    {
        id: 29,
        title: "Slow Jam",
        artist: "SoulProdMusic",
        genre: "r&b",
        duration: "4:05",
        url: "https://cdn.pixabay.com/audio/2025/02/22/audio_8b2e6d4a1c.mp3",
        art: "https://cdn.pixabay.com/photo/2019/03/21/20/19/romantic-4071636_1280.jpg"
    },
    {
        id: 30,
        title: "R&B Flow",
        artist: "penguinmusic",
        genre: "r&b",
        duration: "3:28",
        url: "https://cdn.pixabay.com/audio/2024/09/20/audio_4c7a1e3d8f.mp3",
        art: "https://cdn.pixabay.com/photo/2019/12/25/15/20/music-4718504_1280.jpg"
    },
    {
        id: 31,
        title: "Velvet Touch",
        artist: "Coma-Media",
        genre: "r&b",
        duration: "3:50",
        url: "https://cdn.pixabay.com/audio/2024/12/10/audio_2f5b9d7a4c.mp3",
        art: "https://cdn.pixabay.com/photo/2017/08/07/22/15/rose-2607773_1280.jpg"
    },

    // ===== JAZZ =====
    {
        id: 32,
        title: "Jazz Cafe",
        artist: "penguinmusic",
        genre: "jazz",
        duration: "4:20",
        url: "https://cdn.pixabay.com/audio/2024/05/08/audio_7d1b4a8e2f.mp3",
        art: "https://cdn.pixabay.com/photo/2019/07/13/12/41/jazz-4334959_1280.jpg",
        trending: true
    },
    {
        id: 33,
        title: "Blue Note",
        artist: "SoulProdMusic",
        genre: "jazz",
        duration: "3:55",
        url: "https://cdn.pixabay.com/audio/2024/10/12/audio_1a5c9d3e7b.mp3",
        art: "https://cdn.pixabay.com/photo/2016/09/05/12/18/music-1646383_1280.jpg"
    },
    {
        id: 34,
        title: "Smooth Jazz",
        artist: "penguinmusic",
        genre: "jazz",
        duration: "4:08",
        url: "https://cdn.pixabay.com/audio/2025/03/15/audio_6e2b8a4d1c.mp3",
        art: "https://cdn.pixabay.com/photo/2017/01/24/03/52/piano-2004634_1280.jpg"
    },
    {
        id: 35,
        title: "Evening Jazz",
        artist: "SoulProdMusic",
        genre: "jazz",
        duration: "3:42",
        url: "https://cdn.pixabay.com/audio/2024/07/02/audio_3d8c6a1e4f.mp3",
        art: "https://cdn.pixabay.com/photo/2018/04/01/04/36/bar-3280162_1280.jpg"
    },
    {
        id: 36,
        title: "Swing Time",
        artist: "RockyMusic",
        genre: "jazz",
        duration: "3:18",
        url: "https://cdn.pixabay.com/audio/2024/11/28/audio_9a4e1c7d2b.mp3",
        art: "https://cdn.pixabay.com/photo/2017/10/12/11/49/city-2844436_1280.jpg"
    },

    // ===== LO-FI =====
    {
        id: 37,
        title: "Study Time",
        artist: "FASSounds",
        genre: "lofi",
        duration: "4:35",
        url: "https://cdn.pixabay.com/audio/2024/06/28/audio_5b2e8a1d7c.mp3",
        art: "https://cdn.pixabay.com/photo/2021/09/14/04/41/coffee-6623830_1280.jpg",
        trending: true
    },
    {
        id: 38,
        title: "Lofi Beats",
        artist: "penguinmusic",
        genre: "lofi",
        duration: "3:50",
        url: "https://cdn.pixabay.com/audio/2024/09/05/audio_2c7f4a1d8e.mp3",
        art: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg",
        trending: true
    },
    {
        id: 39,
        title: "Chill Vibes",
        artist: "FASSounds",
        genre: "lofi",
        duration: "4:10",
        url: "https://cdn.pixabay.com/audio/2025/01/08/audio_8d3b6e1a4c.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/29/03/06/coffee-1867359_1280.jpg"
    },
    {
        id: 40,
        title: "Rainy Day",
        artist: "penguinmusic",
        genre: "lofi",
        duration: "4:25",
        url: "https://cdn.pixabay.com/audio/2024/04/12/audio_1e6c9a3d7b.mp3",
        art: "https://cdn.pixabay.com/photo/2018/06/29/23/12/rain-3506445_1280.jpg"
    },
    {
        id: 41,
        title: "Night Study",
        artist: "FASSounds",
        genre: "lofi",
        duration: "3:55",
        url: "https://cdn.pixabay.com/audio/2024/11/02/audio_4a7d2f1b6e.mp3",
        art: "https://cdn.pixabay.com/photo/2015/07/09/22/45/library-838694_1280.jpg"
    },
    {
        id: 42,
        title: "Coffee Shop",
        artist: "penguinmusic",
        genre: "lofi",
        duration: "3:30",
        url: "https://cdn.pixabay.com/audio/2024/08/22/audio_7c1e5a9d3f.mp3",
        art: "https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792111_1280.jpg"
    },
    {
        id: 43,
        title: "Lofi Rain",
        artist: "FASSounds",
        genre: "lofi",
        duration: "4:05",
        url: "https://cdn.pixabay.com/audio/2025/02/14/audio_2b8d4f7a1c.mp3",
        art: "https://cdn.pixabay.com/photo/2017/01/19/23/40/rain-1993643_1280.jpg"
    },
    {
        id: 44,
        title: "Dreamy",
        artist: "SergeQuadrado",
        genre: "lofi",
        duration: "3:45",
        url: "https://cdn.pixabay.com/audio/2024/10/25/audio_6e3a1c8d4b.mp3",
        art: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
    },

    // ===== INDIE =====
    {
        id: 45,
        title: "Indie Day",
        artist: "penguinmusic",
        genre: "indie",
        duration: "3:22",
        url: "https://cdn.pixabay.com/audio/2024/07/08/audio_9d2a5c1e7b.mp3",
        art: "https://cdn.pixabay.com/photo/2018/04/26/13/37/road-3352005_1280.jpg",
        trending: true
    },
    {
        id: 46,
        title: "Acoustic Sunset",
        artist: "SoulProdMusic",
        genre: "indie",
        duration: "3:40",
        url: "https://cdn.pixabay.com/audio/2024/12/15/audio_3f7b4e1a8c.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/08/05/08/sunset-1807698_1280.jpg"
    },
    {
        id: 47,
        title: "Folk Song",
        artist: "penguinmusic",
        genre: "indie",
        duration: "3:15",
        url: "https://cdn.pixabay.com/audio/2025/04/01/audio_5a1e8c3d7f.mp3",
        art: "https://cdn.pixabay.com/photo/2017/09/29/17/10/guitar-2799706_1280.jpg"
    },
    {
        id: 48,
        title: "Wandering",
        artist: "SoulProdMusic",
        genre: "indie",
        duration: "3:35",
        url: "https://cdn.pixabay.com/audio/2024/05/30/audio_8c2e6a4d1b.mp3",
        art: "https://cdn.pixabay.com/photo/2019/06/28/16/06/man-4304949_1280.jpg"
    },
    {
        id: 49,
        title: "Indie Pop",
        artist: "Music_Unlimited",
        genre: "indie",
        duration: "3:08",
        url: "https://cdn.pixabay.com/audio/2024/09/18/audio_1b5d9a3e7c.mp3",
        art: "https://cdn.pixabay.com/photo/2020/02/06/10/02/alone-4823794_1280.jpg"
    },
    {
        id: 50,
        title: "Morning Light",
        artist: "penguinmusic",
        genre: "indie",
        duration: "2:55",
        url: "https://cdn.pixabay.com/audio/2024/11/22/audio_4d7a1c9e3f.mp3",
        art: "https://cdn.pixabay.com/photo/2017/12/15/13/51/sunrise-3020500_1280.jpg"
    },
    {
        id: 51,
        title: "Road Trip",
        artist: "FASSounds",
        genre: "indie",
        duration: "3:28",
        url: "https://cdn.pixabay.com/audio/2025/03/22/audio_6e2b8a4c1d.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/29/09/49/route-1869019_1280.jpg"
    },
    {
        id: 52,
        title: "Autumn Leaves",
        artist: "SoulProdMusic",
        genre: "indie",
        duration: "3:48",
        url: "https://cdn.pixabay.com/audio/2024/10/08/audio_2a6d9c3e7b.mp3",
        art: "https://cdn.pixabay.com/photo/2016/11/21/15/29/autumn-1846075_1280.jpg"
    },

    // ===== MORE MIXED =====
    {
        id: 53,
        title: "Ocean Waves",
        artist: "penguinmusic",
        genre: "lofi",
        duration: "4:15",
        url: "https://cdn.pixabay.com/audio/2024/06/05/audio_3c8e1a6d4f.mp3",
        art: "https://cdn.pixabay.com/photo/2017/01/20/00/30/ocean-1993718_1280.jpg"
    },
    {
        id: 54,
        title: "Starlight",
        artist: "FASSounds",
        genre: "electronic",
        duration: "3:50",
        url: "https://cdn.pixabay.com/audio/2024/08/18/audio_7b2d5a9e1c.mp3",
        art: "https://cdn.pix