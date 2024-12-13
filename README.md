# URL Shortener

A modern React-based URL shortener application that uses the TinyURL API to create shortened versions of long URLs.

## Features

- Clean and modern user interface
- Real-time URL shortening
- Error handling and loading states
- Copy-to-clipboard functionality
- Mobile-responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TinyURL API key

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd url-shortener
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TinyURL API key:
```env
VITE_TINYURL_API_KEY=your_api_key_here
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

The build files will be generated in the `dist` directory.

## Project Structure

```
url-shortener/
├── src/
│   ├── App.jsx        # Main application component
│   ├── App.css        # Styles for the application
│   └── main.jsx       # Application entry point
├── public/            # Static assets
├── .env              # Environment variables
└── package.json      # Project dependencies and scripts
```

## How It Works

1. The application uses React's `useState` hooks to manage the state of:
   - Input URL
   - Shortened URL
   - Loading state
   - Error messages

2. When a URL is submitted:
   - The form prevents default submission behavior
   - Loading state is activated
   - A POST request is made to the TinyURL API
   - The response is processed and either:
     - The shortened URL is displayed
     - An error message is shown if something goes wrong

3. The UI provides feedback through:
   - Loading indicators
   - Error messages
   - Success state with the shortened URL
   - Copy button for easy sharing

## Dependencies

- React 18.3.1
- Vite (for build tooling)
- TinyURL API

## Error Handling

The application includes comprehensive error handling for:
- Invalid URLs
- API failures
- Network issues
- Missing API keys

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
