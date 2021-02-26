import {useState, useEffect} from 'react';
import styled from 'styled-components'
import Input from './components/Input'
import SearchBox from './components/SearchBox'

function App() {

  const [inputText, setInputText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const [tagList, setTagList] = useState(['Agriculture', 'Land', 'Property', 'Child malnutrition', 'Child consultant', 'Children', 'Poultry and bird cultivation','React', 'Css', 'Javascript', 'Node js', 'Babel', 'Dart', 'Ember js', 'Farmer', 'Ground'])
  
  const [suggestedTags, setSuggestedTags] = useState([]);

  const addTags = (data) => {
    setSelectedTags([...selectedTags, data]);
    setSuggestedTags([]);
    let copy = tagList.some(tag => tag.toString() === data.toString());
    if(!copy) {
    setTagList([...tagList, data])
    }
    setInputText("");
  }

  const onchange = e => {
      setInputText(e.target.value);
      var reg = new RegExp(e.target.value.split('').join('\\w*').replace(/\W/, ""), 'i');
      const list = tagList.filter(tag => tag.match(reg));
      if(e.target.value !== ''){
        setSuggestedTags(list)
      } else {
        setSuggestedTags([])
      }
  }

  return (
    <AppWrap>
       <Input 
       addTags = {addTags}
       selectedTags = {selectedTags}
       setSelectedTags = {setSelectedTags}
       inputText = {inputText}
       setInputText = {setInputText}
       onchange = {onchange}
       setSuggestedTags = {setSuggestedTags}
       />
       <SearchBox 
       addTags = {addTags}
       suggestedTags = {suggestedTags} 
       setSuggestedTags = {setSuggestedTags}/>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
 display: flex;
 align-items: center;
 margin-top: 4rem;
 justify-content: center;
 flex-direction: column;
`