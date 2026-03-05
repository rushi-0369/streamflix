# StreamFlix 🎬

A **Netflix-style movie streaming web application** built with React and the TMDB API.
Users can browse popular movies, watch official trailers, and explore different categories with a smooth Netflix-like UI.

## 🌐 Live Demo

https://streamflix-virid-ten.vercel.app

---

## ✨ Features

* Browse **Popular, Now Playing, Top Rated, and Upcoming movies**
* Watch **official movie trailers**
* **Smooth section scrolling** navigation
* **Responsive Netflix-style UI**
* Dynamic movie data fetched from TMDB API
* Hosted and deployed using Vercel

---

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* JavaScript
* CSS

**APIs & Services**

* TMDB API (movie data and trailers)

**Deployment**

* Vercel

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/rushi-0369/streamflix.git
cd streamflix/client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **client** folder and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can get an API key from the TMDB website.

---

## ⚠️ Trailer Loading Issue (Network Restriction)

Some networks or ISPs may block requests to the TMDB API.

If trailers or movies are not loading, try switching your DNS to:

Cloudflare DNS:

```
1.1.1.1
1.0.0.1
```

or Google DNS:

```
8.8.8.8
8.8.4.4
```

Alternatively, enabling **Cloudflare WARP (1.1.1.1)** may resolve the issue.

---

## 📁 Project Structure

```
streamflix
 ├── client
 │   ├── src
 │   ├── components
 │   ├── pages
 │   ├── assets
 │   └── App.jsx
 ├── README.md
```

---

## 🚀 Deployment

This project is deployed on **Vercel**.

To deploy your own version:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Set the environment variable `VITE_TMDB_API_KEY`
4. Deploy

---

## 👨‍💻 Author

**Rushi**

GitHub:
https://github.com/rushi-0369
