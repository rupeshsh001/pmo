import React from 'react'
import ViewProjects from './components/view-projects/ViewProjects'
import {Switch,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/projects" exact>
          <ViewProjects />
        </Route>
      </Switch>
    </>
  )
}

export default App
