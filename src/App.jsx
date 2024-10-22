import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Main/CategoriesofPet/Categories/Categories'
import TitleofMain from './Components/Main/mainHeader/titleofMain'
import Sort from './Components/Main/SortingbyPrice/Sort'
import Pets from './Components/Main/AllpetsandLikedPets/AllPets/Pets/Pets'

function App() {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data =>setCategories(data.categories));
  },[])

  return (
    <>

      <Header></Header>
      <Hero></Hero>
      <TitleofMain></TitleofMain>
      <Categories categories={categories}></Categories>
      <Sort></Sort>
      <Pets></Pets>

    </>
  )
}

export default App
