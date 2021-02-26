import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const SearchBox = ({suggestedTags, addTags}) => {
    if(suggestedTags.length > 0) {
       return (
        <SearchBoxWrap >
              {suggestedTags.map((tag, idx) => (
                  <div className='tagItem' key = {idx} onClick = {() => addTags(tag)}>
                      <p>{tag}</p>
                  </div>
              ))}
        </SearchBoxWrap>
    ) 
    } else {
        return null
    }
    
}

export default SearchBox

const SearchBoxWrap = styled.div`
width: 489px;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
border: 1px solid ${colors.gray};
padding: 15px 0;
.tagItem {
    padding: 7px 19px;
    cursor: default;
    padding-bottom: 8px;
    &:hover {
        background: ${colors.lightBlue};
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        line-height: 22px;
        color: #383838;
    }
}
@media(max-width: 500px) {
    width: 95%;
}
`
