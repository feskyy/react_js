import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div>
      <Header />
      <main style={main}>
        <h1>Hello, React!</h1>
      </main>
      <div style={container}>
        <Footer />
      </div>
    </div>
  )
}

const container = {
  maxWidth: '80px',
  margin: '100px',
  padding: '100px',
  textAlign: 'center',
}

const main = {
  padding: '48px 0',
}

export default App;

