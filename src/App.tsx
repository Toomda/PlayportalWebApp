import {Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Events} from './pages/Events'
import {Members} from './pages/Members'
import {Partnerships} from './pages/Partnerships'
import {Merch} from './pages/Merch'
import {Giveaways} from './pages/Giveaways'
import {Navbar} from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Events" element={<Events/>}></Route>
        <Route path="/Members" element={<Members/>}></Route>
        <Route path="/Partnerships" element={<Partnerships/>}></Route>
        <Route path="/Merch" element={<Merch/>}></Route>
        <Route path="/Giveaways" element={<Giveaways/>}></Route>
      </Routes>

    </div>

      

    
  )
}

export default App
