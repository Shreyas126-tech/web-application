import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Home, BookOpen, User, Crown, Settings, LogOut } from 'lucide-react'
import './App.css'

const API_BASE = 'http://10.199.115.254:8080/api'

// --- Public Pages ---

function HomePage() {
    const [flash, setFlash] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch(`${API_BASE}/content/flash-updates`).then(r => r.json()).then(setFlash).catch(console.error)
        fetch(`${API_BASE}/content/news`).then(r => r.json()).then(setNews).catch(console.error)
    }, [])

    return (
        <div className="page-container">
            {flash.length > 0 && (
                <div className="flash-banner">
                    <span>⚡ FLASH UPDATE: {flash[0].content}</span>
                </div>
            )}

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Sode Sri Vadiraja Matha</h1>
                    <p>Experience the divine tradition and heritage of Sri Vadiraja Teertharu.</p>
                    <Link to="/sevas" className="btn-primary-large">Book Seva Now</Link>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <h2>Latest News & Updates</h2>
                    <div className="divider"></div>
                </div>
                <div className="news-grid">
                    {news.slice(0, 3).map(item => (
                        <div key={item.id} className="news-card">
                            <div className="news-image-placeholder">📰</div>
                            <div className="news-content">
                                <h3>{item.title}</h3>
                                <p>{item.content.substring(0, 100)}...</p>
                                <span className="date">{new Date(item.publishedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="info-section bg-light">
                <div className="section-header">
                    <h2>Daily Timings</h2>
                    <div className="divider"></div>
                </div>
                <div className="timings-list">
                    <div className="timing-item">
                        <span className="time">05:30 AM</span>
                        <span className="event">Nirmalya Visarjana</span>
                    </div>
                    <div className="timing-item">
                        <span className="time">08:00 AM</span>
                        <span className="event">Panchamrutha Abhisheka</span>
                    </div>
                    <div className="timing-item">
                        <span className="time">12:30 PM</span>
                        <span className="event">Maha Pooja</span>
                    </div>
                    <div className="timing-item">
                        <span className="time">07:00 PM</span>
                        <span className="event">Rathotsava</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

function HistoryPage() {
    const [gurus, setGurus] = useState([])

    useEffect(() => {
        fetch(`${API_BASE}/content/parampara`).then(r => r.json()).then(setGurus).catch(console.error)
    }, [])

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Guru Parampara</h1>
                <p>The illustrious lineage of Pontiffs of Sode Matha</p>
            </div>
            <div className="guru-grid">
                {gurus.map(guru => (
                    <div key={guru.id} className="guru-card">
                        <div className="guru-image">🕉️</div>
                        <div className="guru-info">
                            <h3>{guru.name}</h3>
                            <p className="guru-bio">{guru.biography}</p>
                            {guru.aaradhane && <span className="tag">Aaradhane: {guru.aaradhane}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function SevasPage() {
    const [sevas, setSevas] = useState([])

    useEffect(() => {
        fetch(`${API_BASE}/content/sevas`).then(r => r.json()).then(setSevas).catch(console.error)
    }, [])

    const handleBook = (name) => {
        alert(`Booking initiated for ${name}. In a real app, this would open a payment gateway.`)
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Offer Sevas</h1>
                <p>Perform sevas online from anywhere in the world</p>
            </div>
            <div className="sevas-grid-public">
                {sevas.map(seva => (
                    <div key={seva.id} className="seva-public-card">
                        <h3>{seva.name}</h3>
                        <p>{seva.description}</p>
                        <div className="seva-footer">
                            <span className="amount">₹{seva.amount}</span>
                            <button onClick={() => handleBook(seva.name)} className="btn-book">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// --- Admin Dashboard (Refactored) ---

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('news')
    const [news, setNews] = useState([])
    const [sevas, setSevas] = useState([])

    useEffect(() => {
        fetch(`${API_BASE}/content/news`).then(r => r.json()).then(setNews).catch(console.error)
        fetch(`${API_BASE}/content/sevas`).then(r => r.json()).then(setSevas).catch(console.error)
    }, [])

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <button className={activeTab === 'news' ? 'active' : ''} onClick={() => setActiveTab('news')}>Manage News</button>
                <button className={activeTab === 'sevas' ? 'active' : ''} onClick={() => setActiveTab('sevas')}>Manage Sevas</button>
                <button className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>Users</button>
            </div>
            <div className="admin-main">
                {activeTab === 'news' && (
                    <div className="panel">
                        <h3>News Management</h3>
                        <table className="admin-table">
                            <thead><tr><th>ID</th><th>Title</th><th>Date</th><th>Action</th></tr></thead>
                            <tbody>
                                {news.map(n => (
                                    <tr key={n.id}><td>{n.id}</td><td>{n.title}</td><td>{new Date(n.publishedAt).toLocaleDateString()}</td><td><button>Edit</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'sevas' && (
                    <div className="panel">
                        <h3>Seva Management</h3>
                        <div className="admin-cards">
                            {sevas.map(s => (
                                <div key={s.id} className="mini-card">
                                    <strong>{s.name}</strong><br />₹{s.amount}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// --- Main App Component ---

function App() {
    const location = useLocation()
    const isAdmin = location.pathname.startsWith('/admin')

    return (
        <div className="app-root">
            {!isAdmin && (
                <nav className="main-nav">
                    <div className="logo">
                        <Crown color="#FFD700" size={28} />
                        <span>Sode Matha</span>
                    </div>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/history">Parampara</Link>
                        <Link to="/sevas">Sevas</Link>
                        <Link to="/profile">My Profile</Link>
                        <Link to="/admin" className="admin-link"><Settings size={16} /> Admin</Link>
                    </div>
                </nav>
            )}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/sevas" element={<SevasPage />} />
                <Route path="/profile" element={<div className="page-container"><h1>My Profile</h1><p>Please login to view profile.</p></div>} />
                <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>

            {!isAdmin && (
                <footer className="main-footer">
                    <p>© 2026 Sode Sri Vadiraja Matha. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </footer>
            )}
        </div>
    )
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    )
}

export default AppWrapper
