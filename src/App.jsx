import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const shortenUrl = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError()
    
    try {
      const response = await fetch('https://api.tinyurl.com/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_TINYURL_API_KEY}`
        },
        body: JSON.stringify({
          url: url,
          domain: "tinyurl.com"
        })
      })

      const data = await response.json()
      if (response.ok) {
        setShortUrl(data.data.tiny_url)
      } else {
        setError('Failed to shorten URL')
      }
    } catch (err) {
      setError('An error occurred while shortening the URL')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form onSubmit={shortenUrl}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your long URL"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      
      {shortUrl && (
        <div className="result">
          <h2>Shortened URL:</h2>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default App
