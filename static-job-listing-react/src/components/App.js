import { useState } from 'react';
import '../style/App.css';
import CategoryFilter from './CategoryFilter';
import JobList from './JobList';


function App() {

  const [categoryFilter, updateCategoryFilter] = useState([])

  return (
    <>
      <header></header>
      <div className='App__content'>
        <CategoryFilter categoryFilter={categoryFilter} updateCategoryFilter={updateCategoryFilter}/>
        <JobList categoryFilter={categoryFilter} updateCategoryFilter={updateCategoryFilter}/>
      </div>
      
    </>
  )
}

export default App
