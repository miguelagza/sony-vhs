export const initialState = {
  title: "Dynamicron",
  model: "B-250",
  color1: "#FEB603",
  color2: "#FC3B00",
  color3: "#FC0000",
  color4: "#D9003A",
  color5: "#810140",
  background: "#FFFBE5",
  borderColor: "black",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CINEMATRON":
      return {
        ...state,
        title: "Cinematron",
        model: "H-320",
        color1: "white",
        color2: "#f9e0ae",
        color3: "#fc8621",
        color4: "#c24914",
        color5: "#682c0e",
        background: "#ffc750",
        borderColor: "white",
      };
    case "CHANGE_DINAMICRON":
      return {
        ...state,
        title: initialState.title,
        model: initialState.model,
        color1: initialState.color1,
        color2: initialState.color2,
        color3: initialState.color3,
        color4: initialState.color4,
        color5: initialState.color5,
        background: initialState.background,
        borderColor: initialState.borderColor,
      };
    default:
      return { ...state };
  }
};

export default reducer;
