import React from 'react'
import { useState,useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import Buttons from '../components/Buttons';
const Home = () => {
  const [card,setCard] = useState([]);
  const [categories,setCategories] = useState([]);
  const [page,setPage] = useState(0);
  
  const filterItems = async(cat)=>{
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const newItems = data.products.filter((newval)=>newval.category === cat);
    setCard(newItems);
  }
  
  const getAllData = async()=>{
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setCard(data.products);
  }
  const getCardData = async()=>{
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const categories =new Set();
    for(let i in data.products){
      categories.add(data.products[i].category);
    }
    const array = Array.from(categories);
    setCategories(array);
    setCard(data.products);
    console.log(data.products);
    console.log(array);
  };

  // const handleInfiniteScroll = async ()=>{
  //   try{
  //     if(window.innerHeight + document.documentElement.scrollTop >= 
  //       document.documentElement.scrollHeight){
  //         setPage((prev) => prev+18);
  //     }
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }

  useEffect(()=>{
    getCardData();
  },[page]);

  return (
    <div>
    <Buttons categories={categories} filterItems={filterItems} getAllData={getAllData}/>
    <CardComponent card={card} setCard={setCard}/>
    </div>
  )
}

export default Home