import styled from 'styled-components'
export const Main = styled.div`
padding  2rem 9rem;

`
export const Title = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.02em;
color: #050505;

`
export const SubTitle = styled.h2`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #050505;

`
export const Button = styled.button`
  ${({ background }) => (
    `background-color: ${background};`
)}
font-size: 14px;
width: 121px;
top: 136px;
border-radius: 8px;
`
export const Label = styled.p`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 16px;
color: #FFFFFF
`

export const HeaderButtons = styled.div`
  display: flex;
  margin-top: 16px;
  button:first-child{
    height: 64px;
    left: 212px;
    top: 136px;
  }
  button:last-child {
    margin-left: 25px;
  }`
  ;
export const SearchBar = styled.div`
position:relative;
margin-top: 32px;
input:first-child {
align-items: center;
padding: 16px;
width: 600px;
height: 56px;
background: #F5F5F5;
border: 1px solid #D3D3D3;
box-sizing: border-box;
border-radius: 8px;
}
`
export const Search = styled.img`
position:absolute;
left: 570px;
top: 22px;
height: 11px;`

export const BodyCard = styled.div`
display: flex;
column-gap: 20px;
flex-wrap: wrap;
`
export const BodyCardsContent = styled.div`
    width: 325.33px;
    border: 0.5px #D3D3D3 solid;
    border-radius: 6px;
    margin-top :40px;
`

export const TitleCard = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.02em;
color: #050505;
padding  0px 24px;
margin-top : 24px;
`


export const CardText = styled.p`
height: 230px;
overflow: auto;
padding: 10px 0px;
color: #8C8C8C;
text-align: inherit;
padding  0px 24px;
margin-top : 16px;

::-webkit-scrollbar{
    width 10px;
    
}
::-webkit-scrollbar-track {
    margin-top: 50px;
    margin-bottom: 90px;
}
::-webkit-scrollbar-thumb{
    background: rgba(5, 5, 5, 0.2);
    border-radius: 100px;
    margin-left :20px;
};
`

export const CardTextButton = styled.button`
width: 277px;
background-color: #FC5C63;
border: none;
border-radius: 8px;
color: #FFFFFF;
height: 64px;
font-size: 18px;
font-family: Inter;
font-style: normal;
font-weight: bold;
margin: 12px 24px;
`

