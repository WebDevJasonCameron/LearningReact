import {useState} from "react";

export default function TextExpander({ collapsedNumWords,
                                       expandButtonText = "Show more",
                                       collapseButtonText,
                                       buttonColor,
                                       expanded = false,
                                       className,
                                       children }) {

  const [ isExpanded, setIsExpanded ] = useState(expanded);

  const displayText = isExpanded ? children : "test";

  return (
    <div className={className}>
      <span>
        { displayText }
      </span>
      <button>
        { expandButtonText }
      </button>
    </div>);
}