import {useEffect} from "react";

export function useKey(key, action)  {

  useEffect(
    function() {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          //console.log(key + " pressed")
          action();
        }
      }

      document.addEventListener("keydown", callback);
      return () => {
        document.removeEventListener("keydown", callback);
      }
    }, [key, action]
  )

}