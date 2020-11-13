import React, { useState } from 'react';
import Accordion from './components/widgets/Accordion'
import Search from './components/widgets/Search'
import Dropdown from './components/widgets/Dropdown'
import Translate from './components/widgets/Translate'
import Route from './components/widgets/Route'
import Header from './components/widgets/Header'
import VideoSearch from './components/video-search/VideoSearch'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why is React?',
    content: 'React is a favorite of front end engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

const options = [
  {
    label:'The Color Red',
    value: 'red'
  },
  {
    label:'The Color Green',
    value: 'green'
  },
  {
    label:'A Shade of Blue',
    value: 'blue'
  },
]


export default () => {
  const [selected, setSelected] = useState(options[0])
   return(
     <div>

       <Header />
       <Route path="/videos">
         <VideoSearch/>
       </Route>
       <Route path="/">
         <Accordion items={items} />
       </Route>
       <Route path="/list">
         <Search />
       </Route>
       <Route path="/dropdown">
         <Dropdown
           label="Select a color"
           options={options}
           selected={selected}
           onSelectedChange={setSelected}
          />
       </Route>
       <Route path="/translate">
         <Translate />
       </Route>
     </div>
   )
}
