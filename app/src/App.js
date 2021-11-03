import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './assets/logo.png'
import loop from './assets/search.png'
import * as S from  './App.styles'
import { useState } from 'react'
import { characters } from './config/characters'

const primary = '#FC5C63';
const secondary = '#050505';



  
const App = () => {
  const [searchTitle, setSearchTitle] = useState();
  const [list, setList] = useState(characters);
  const [cardTitle, setCardTitle] = useState([]);
  const handleChange = (value) => {
    setSearchTitle(value);
    console.log(value);

  if (value == "") {
      return setList(characters)
    }
  const search = characters.filter((character) => {
    if (character.title.toLowerCase().includes(value.toLowerCase())) {
        return value
      }
    })
    setList(search);
  }

  const removePeople = (title) => {
  const array = [...cardTitle]; // make a separate copy of the array
  const index = array.indexOf(title)
    
   if (index !== -1) {
      array.splice(index, 1);
      setCardTitle(array);
   }
}

  return (
    <S.Main>
      <div>
        <div>
          <S.Title>Number of selected heroes : {cardTitle.length} </S.Title>
          <S.SubTitle> Selected heroes :{cardTitle.join(',')} </S.SubTitle>
        </div>
        <S.HeaderButtons>
          <S.Button background={primary}> <S.Label> Validate </S.Label> </S.Button>
          <S.Button background={secondary} ><S.Label> Clear </S.Label> </S.Button>
        </S.HeaderButtons>
      </div>
      <S.SearchBar>
        {<SearchSelect onChange={handleChange} />}
        <S.Search src={loop}></S.Search>
      </S.SearchBar>
      {<List list={list} removePeople={removePeople} setCardTitle={setCardTitle}/>}
    </S.Main>

    
  );
}

const CardColor = ({item,setCardTitle, removePeople}) => {
  const [colorChange, setColorChange] = useState({
      bgColor: "#FFFFFF",
      titleColor: "#000000",
      textColor: "#8C8C8C",
      bgButton: "#FC5C63",
      selected: false,
  })


  const buttonClick = () => {

    if (colorChange.selected) {
      removePeople(item.title)
    } else {
      setCardTitle(oldArray => [...oldArray,item.title] )
    }

    setColorChange({
      ...colorChange,
      bgColor: "#0C806B",
      titleColor: "#FFFFFF",
      textColor: "#FFFFFF",
      bgButton: "#000000",
      selected: !colorChange.selected,
    })
  };
  
  return (
            <S.BodyCardsContent style={{backgroundColor: colorChange.selected ? '#0C806B' : '#FFFFFF'}} key={item.id} >
              <S.TitleCard style={{color: colorChange.selected ? "#FFFFFF" : "#000000"}} > {item.title} </S.TitleCard>
              <S.CardText style={{color: colorChange.selected ? "#FFFFFF" : "#8C8C8C"}}> {item.description} </S.CardText>
              <S.CardTextButton style={{backgroundColor: colorChange.selected ? "#000000" : "#FC5C63"}} onClick={() => buttonClick()} >{<p>{colorChange.selected ? "Unselect" : "Select"} </p>}</S.CardTextButton>
            </S.BodyCardsContent>
  );
}

const List = ({ list,setCardTitle, removePeople }) => {
  return (
  <S.BodyCard>
          {list.map((item, key) => (
            <CardColor setCardTitle ={setCardTitle} removePeople={removePeople} key={key} item={item}/>
          ))}
        </S.BodyCard>
  );
}


const SearchSelect = ({ onChange }) => {
  return (
        <input type="text"
                placeholder="Search heroes..."
                onChange={(event) => {
                onChange(event.target.value);}}>
    </input>
  );
}

export default App


