
import './App.css'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function App() {

  const articles = [
    {title: 'First Article', content: 'Content 1'},
    {title: 'Second Article', content: 'Content 2'},
    {title: 'Third Article', content: 'Content 3'}
  ]

  return (
    <main>
      <Header />
      <Body articles={articles}/>
      <Footer />
    </main>
  )
  
}

  


export default App
