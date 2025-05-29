 let store = ""; // current input

    let handleClick = (value) => {
      let show = document.querySelector("#display");

      if (value === "AC") {
        store = "";
      } else if (value === "DEL") {
        store = store.slice(0, -1);
      } else if (value === "=") {
        
          store = eval(store).toString();
      
      } else {
        store += value;
      }

      show.innerHTML = store;
    };