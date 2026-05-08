// ===== DOM REFS =====
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const currentArt = document.getElementById('currentArt');
const currentTitle = document.getElementById('currentTitle');
const currentArtist = document.getElementById('currentArtist');
const progressFill = document.getElementById('progressFill');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const searchInput = document.getElementById('searchInput');

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderTrending();
    renderNewReleases();
    renderAllSongs(songsDatabase);
    setupAudioEvents();
});

// ===== SETUP AUDIO EVENTS =====
function setupAudioEvents() {
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        totalTime.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', nextSong);
    audio.addEventListener('play', () => {
        isPlaying = true;
        playBtn.textContent = '⏸️';
    });
    audio.addEventListener('pause', () => {
        isPlaying = false;
        playBtn.textContent = '▶️';
    });
}

// ===== FORMAT TIME =====
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===== RENDER TRENDING =====
function renderTrending() {
    const container = document.getElementById('trendingSlider');
    const trending = songsDatabase.filter(s => s.trending).slice(0, 12);
    container.innerHTML = trending.map(song => createSongCard(song)).join('');
    addCardListeners(container);
}

// ===== RENDER NEW RELEASES =====
function renderNewReleases() {
    const container = document.getElementById('newReleasesSlider');
    const sorted = [...songsDatabase].reverse().slice(0, 12);
    container.innerHTML = sorted.map(song => createSongCard(song)).join('');
    addCardListeners(container);
}

// ===== CREATE SONG CARD =====
function createSongCard(song) {
    return `
        <div class="song-card" data-id="${song.id}" onclick="playSongById(${song.id})">
            <img class="album-art" src="${song.art}" alt="${song.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/170/1db954/ffffff?text=🎵'">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <button class="card-play" onclick="event.stopPropagation(); playSongById(${song.id})">▶</button>
        </div>
    `;
}

// ===== ADD CARD LISTENERS =====
function addCardListeners(container) {
    container.querySelectorAll('.song-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            playSongById(id);
        });
    });
}

// ===== RENDER ALL SONGS =====
function renderAllSongs(songs) {
    const container = document.getElementById('songsList');
    if (songs.length === 0) {
        container.innerHTML = `<div class="no-results"><span>🔍</span><h3>No songs found</h3><p>Try a different search or genre</p></div>`;
        return;
    }
    container.innerHTML = songs.map((song, idx) => `
        <div class="song-item ${currentQueue[currentIndex]?.id === song.id ? 'active' : ''}" 
             onclick="playFromList(${song.id})" data-id="${song.id}">
            <span class="item-num">${idx + 1}</span>
            <img class="item-art" src="${song.art}" alt="${song.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/45/1db954/ffffff?text=🎵'">
            <div class="item-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <span class="item-genre">${song.genre}</span>
            <span class="item-duration">${song.duration}</span>
        </div>
    `).join('');
}

// ===== PLAY SONG BY ID =====
function playSongById(id) {
    const song = songsDatabase.find(s => s.id === id);
    if (!song) return;
    
    currentQueue = songsDatabase;
    currentIndex = currentQueue.findIndex(s => s.id === id);
    
    // Add to recently played
    recentlyPlayed = recentlyPlayed.filter(s => s.id !== id);
    recentlyPlayed.unshift(song);
    if (recentlyPlayed.length > 20) recentlyPlayed.pop();
    
    playSong(song);
    highlightActiveSong(id);
}

// ===== PLAY FROM LIST =====
function playFromList(id) {
    currentQueue = currentSongs;
    currentIndex = currentQueue.findIndex(s => s.id === id);
    const song = currentQueue[currentIndex];
    if (!song) return;
    
    recentlyPlayed = recentlyPlayed.filter(s => s.id !== id);
    recentlyPlayed.unshift(song);
    if (recentlyPlayed.length > 20) recentlyPlayed.pop();
    
    playSong(song);
    highlightActiveSong(id);
}

// ===== PLAY SONG =====
function playSong(song) {
    if (!song) return;
    
    currentTitle.textContent = song.title;
    currentArtist.textContent = `${song.artist} • ${song.genre}`;
    currentArt.src = song.art;
    currentArt.onerror = function() {
        this.src = 'https://via.placeholder.com/60/1db954/ffffff?text=🎵';
    };
    
    audio.src = song.url;
    audio.play().catch(e => console.log('Play error:', e));
    
    // Update document title
    document.title = `${song.title} - ${song.artist} | Freel Soongs`;
}

// ===== TOGGLE PLAY =====
function togglePlay() {
    if (audio.src === '' || audio.src === window.location.href) {
        if (songsDatabase.length > 0) {
            playSongById(songsDatabase[0].id);
        }
        return;
    }
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// ===== NEXT / PREV =====
function nextSong() {
    if (currentQueue.length === 0) return;
    currentIndex = (currentIndex + 1) % currentQueue.length;
    const song = currentQueue[currentIndex];
    if (song) {
        playSong(song);
        highlightActiveSong(song.id);
    }
}

function prevSong() {
    if (currentQueue.length === 0) return;
    currentIndex = (currentIndex - 1 + currentQueue.length) % currentQueue.length;
    const song = currentQueue[currentIndex];
    if (song) {
        playSong(song);
        highlightActiveSong(song.id);
    }
}

// ===== PROGRESS =====
function updateProgress() {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
        currentTime.textContent = formatTime(audio.currentTime);
    }
}

function setProgress(e) {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    audio.currentTime = percent * audio.duration;
}

// ===== VOLUME =====
function setVolume(val) {
    audio.volume = val;
}

// ===== HIGHLIGHT ACTIVE SONG =====
function highlightActiveSong(id) {
    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.toggle('active', parseInt(item.dataset.id) === id);
    });
}

// ===== SEARCH =====
function searchSongs() {
    const query = searchInput.value.toLowerCase().trim();
    const genre = document.getElementById('genreFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    let results = songsDatabase;
    
    if (query) {
        results = results.filter(s => 
            s.title.toLowerCase().includes(query) || 
            s.artist.toLowerCase().includes(query) ||
            s.genre.toLowerCase().includes(query)
        );
    }
    
    if (genre !== 'all') {
        results = results.filter(s => s.genre === genre);
    }
    
    currentSongs = applySort(results, sort);
    renderAllSongs(currentSongs);
    
    // Scroll to results
    document.getElementById('all-songs').scrollIntoView({ behavior: 'smooth' });
}

// ===== FILTER SONGS =====
function filterSongs() {
    searchSongs();
}

function filterByGenre(genre) {
    document.getElementById('genreFilter').value = genre;
    searchSongs();
}

// ===== APPLY SORT =====
function applySort(songs, sort) {
    const sorted = [...songs];
    switch(sort) {
        case 'az': return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'za': return sorted.sort((a, b) => b.title.localeCompare(a.title));
        default: return sorted;
    }
}

// ===== SCROLL SLIDER =====
function scrollSlider(id, direction) {
    const container = document.getElementById(id);
    const scrollAmount = 300 * direction;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// ===== MOBILE MENU =====
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            nextSong();
            break;
        case 'ArrowLeft':
            prevSong();
            break;
        case 'ArrowUp':
            audio.volume = Math.min(1, audio.volume + 0.1);
            break;
        case 'ArrowDown':
            audio.volume = Math.max(0, audio.volume - 0.1);
            break;
    }
});