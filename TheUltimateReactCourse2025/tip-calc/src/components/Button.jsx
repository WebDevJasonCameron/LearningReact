import React from "react";

export function Button(onHandleReset) {
  return (
    <div>
      <button
        type="reset" onClick={() => onHandleReset.onHandleReset()}>
        Reset
      </button>
    </div>
  )
}