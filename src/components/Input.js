import React, { useRef } from "react";
import styled from "styled-components";
import colors from "../colors";
import { FiX, FiPlus } from "react-icons/fi";

const Input = ({
  inputText,
  setSuggestedTags,
  selectedTags,
  setSelectedTags,
  addTags,
  onchange
}) => {
  const inputRef = useRef(null);

  const removeTags = indexToRemove => {
    setSelectedTags([
      ...selectedTags.filter((_, index) => index !== indexToRemove)
    ]);
    inputRef.current.focus();
    setSuggestedTags([])
  };
  const addSelectedTags = event => {
    if (event.key === "Enter") {
      if (inputText !== "") {
        addTags(inputText)
      }
    }
  };

  return (
    <InputWrap text={inputText} tags={selectedTags} >
      {selectedTags.map((tag, index) => (
        <div key={index} className="tag">
          <span className="tag-title">{tag}</span>
          <div className="tag-close-icon" onClick={() => removeTags(index)}>
            <FiX />
          </div>
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={e => onchange(e)}
        onKeyUp={event => addSelectedTags(event)}
      />

      <div className="placeholder" onClick={() => inputRef.current.focus()}>
        <div className="icon">
          <FiPlus size={20} />
        </div>
        <p>Add Tags</p>
      </div>
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  display: flex;
  border: 2px solid
    ${props =>
      props.tags.length > 0 || props.text ? colors.blue : colors.lightGray};
  background: ${props =>
    props.tags.length > 0 || props.text ? "white" : colors.lightGray};
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0;
  width: 489px;
  padding: 0 6px;
  &:hover {
    border: 2px solid
      ${props =>
        props.tags.length > 0 || props.text ? colors.blue : colors.gray};
    background: ${props =>
      props.tags.length > 0 || props.text ? "white" : colors.gray};
  }

  &:hover input {
    background: ${props =>
      props.tags.length > 0 || props.text ? "white" : colors.gray};
  }
  position: relative;
  .placeholder {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    display: flex;
    color: ${colors.darkGray};
    display: ${props =>
      props.tags.length > 0 || props.text ? "none" : "flex"};
    z-index: 0;
    .icon {
      display: flex;
      align-items: center;
      cursor: text;
      margin-right: 0.3rem;
    }
  }

  input {
    min-width: 50px;
    padding: 14px;
    font-size: 16px;
    line-height: 22px;
    border: 0;
    outline: none;
    font-family: "Rubik";
    color: #333;
    flex: 1;
    background: ${props =>
      props.tags.length > 0 || props.text ? "white" : colors.lightGray};
  }
  .tag {
    margin: 7px 6px;
    margin-bottom: 6px;
    padding: 7px 10px;
    padding-top: 8px;
    border-radius: 3px;
    background: ${colors.lightBlue};
    display: flex;
    align-items: center;
    color: #333;
    cursor: default;
    .tag-title {
      font-size: 16px;
    }
    .tag-close-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
  @media(max-width: 500px) {
      width: 95%;
  }
`;
