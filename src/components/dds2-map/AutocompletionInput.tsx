import './AutocompletionInput.css'
import React, {useEffect, useRef, useState} from "react";
import useMapData from "../../hooks/useMapData.ts";

function AutocompletionInput() {

  const MapData = useMapData()
  const [input, setInput] = useState<string>('')

  const [suggestions, setSuggestions] = useState<string[]>([])
  const [chosenIndex, setChosenIndex] = useState<number>(0)
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (input) {
      const filteredItems = MapData.getAvailableItems().filter(i =>
        i.toLowerCase().includes(input.toLowerCase())
      ) || [];
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  }, [input, MapData]);

  function submitSuggestion(suggestion: string) {
    if (MapData.getAvailableItems().find(i => i === suggestion))
      MapData.submitItem(suggestion)

    setSuggestions([]);
    setInput('')
  }

  function handleIndexChange(index: number) {
    let newIndex = index;
    if (index >= suggestions.length) newIndex = 0;
    if (index < 0) newIndex = suggestions.length - 1;
    setChosenIndex(newIndex);

    if (suggestionRefs.current[newIndex]) {
      suggestionRefs.current[newIndex]!.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    let preventDefault: boolean = true
    switch (e.key) {
      case "Enter": {
        submitSuggestion(suggestions[chosenIndex])
        break
      }
      case "Tab": {
        handleIndexChange(chosenIndex + (e.shiftKey ? -1 : 1))
        break
      }
      case "ArrowUp": {
        handleIndexChange(chosenIndex - 1)
        break
      }
      case "ArrowDown": {
        handleIndexChange(chosenIndex + 1)
        break
      }
      default: {
        if (!e.shiftKey)
          handleIndexChange(0)
        preventDefault = false
      }
    }

    if (preventDefault) e.preventDefault()
  }

  return (
    <div className={'input-container'} onKeyDown={handleKeyPress}>

      <input
        title={'Search Item'} type={'search'} value={input} ref={inputRef}
        onChange={e => setInput(e.target.value)} className={'input'} onKeyDown={handleKeyPress}
      />

      {suggestions.length > 0 && (
        <div className={'suggestion-container'} style={{width: inputRef.current?.clientWidth ?? 0}}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              ref={el => {suggestionRefs.current[index] = el}}
              className={index === chosenIndex ? "suggestion suggestion-active" : "suggestion"}
              onClick={() => submitSuggestion(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default AutocompletionInput;