const albums = [
  {
    id: "jack",
    title: "Jack Daniel’s",
    icon: "🥃",
    subtitle: "Collector Cards",
    collected: 0,
    total: 100
  },
  {
    id: "hardrock",
    title: "Hard Rock Pins",
    icon: "🎸",
    subtitle: "Pin Collection",
    collected: 0,
    total: 100
  },
  {
    id: "ionity",
    title: "IONITY Stops",
    icon: "⚡",
    subtitle: "Ladestopp Karten",
    collected: 0,
    total: 100
  }
];

const app = document.getElementById("app");

function renderHome() {
  app.innerHTML = `
    <div class="app">
      <header class="app-header">
        <div>
          <p class="eyebrow">LadyAti Collection</p>
          <h1>Meine Sammlung</h1>
        </div>
        <div class="profile-badge">LA</div>
      </header>

      <section class="hero">
        <h2>Digitales Sammelalbum</h2>
        <p>Wähle ein Album und blättere durch deine persönlichen Sammelkarten.</p>
      </section>

      <main class="album-grid">
        ${albums.map(album => `
          <button class="album-card" onclick="renderAlbum('${album.id}')">
            <span class="album-icon">${album.icon}</span>
            <h3>${album.title}</h3>
            <p>${album.subtitle}</p>
            <div class="progress">
              <span style="width:${(album.collected / album.total) * 100}%"></span>
            </div>
            <small>${album.collected} von ${album.total} Karten</small>
          </button>
        `).join("")}
      </main>

      <nav class="bottom-nav">
        <button onclick="renderHome()">📖<span>Alben</span></button>
        <button>🔍<span>Suche</span></button>
        <button>🏆<span>Erfolge</span></button>
        <button>⚙️<span>Mehr</span></button>
      </nav>
    </div>
  `;
}

function renderAlbum(albumId) {
  const album = albums.find(a => a.id === albumId);

  app.innerHTML = `
    <div class="app">
      <header class="app-header">
        <button class="back-button" onclick="renderHome()">←</button>
        <div>
          <p class="eyebrow">Album</p>
          <h1>${album.icon} ${album.title}</h1>
        </div>
      </header>

      <section class="album-page">
        <h2>Seite 1</h2>

        <div class="card-page">
          ${Array.from({ length: 9 }).map((_, index) => `
            <div class="card-slot empty">
              <span>${String(index + 1).padStart(3, "0")}</span>
              <strong>???</strong>
              <small>Noch nicht gesammelt</small>
            </div>
          `).join("")}
        </div>
      </section>

      <nav class="bottom-nav">
        <button onclick="renderHome()">📖<span>Alben</span></button>
        <button>🔍<span>Suche</span></button>
        <button>🏆<span>Erfolge</span></button>
        <button>⚙️<span>Mehr</span></button>
      </nav>
    </div>
  `;
}

renderHome();
