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

  function handleSuggestionClick(suggestion: string) {
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
        behavior: 'auto',
        block: 'center',
      });
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      handleSuggestionClick(suggestions[chosenIndex]);
      return;
    }
    if (e.key === "Tab" || e.key === "ArrowDown") {
      e.preventDefault();
      handleIndexChange(chosenIndex + 1);
      return;
    }
    if (e.key === "ArrowUp") {
      handleIndexChange(chosenIndex - 1);
      return;
    }
    handleIndexChange(0);
  }

  return (
    <div className={'input-container'} onKeyDown={handleKeyPress}>

      <input
        title={'Search Item'} type={'search'} value={input} ref={inputRef}
        onChange={e => setInput(e.target.value)} className={'input'}
      />

      {suggestions.length > 0 && (
        <div className={'suggestion-container'} style={{width: inputRef.current?.clientWidth ?? 0}}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              ref={el => {suggestionRefs.current[index] = el}}
              className={index === chosenIndex ? "suggestion active" : "suggestion"}
              onClick={() => handleSuggestionClick(suggestion)}
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