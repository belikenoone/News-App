import { createContext, useReducer } from "react";
const AppContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HEADLINES":
      return {
        ...state,
        headlines: action.payload,
      };
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload,
      };
    default:
      state;
      break;
  }
};
export const AppProvider = ({ children }) => {
  const initialState = {
    headlines: [],
    news: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchHeadlines = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=APIKEY`
    );
    const { articles } = await response.json();
    dispatch({ type: "FETCH_HEADLINES", payload: articles });
  };
  const fetchNews = async (newsCategory) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=${newsCategory}&apiKey=APIKEY&`
    );
    const { sources } = await response.json();
    dispatch({ type: "GET_NEWS", payload: sources });
  };
  return (
    <AppContext.Provider
      value={{
        fetchHeadlines,
        headlines: state.headlines,
        fetchNews,
        news: state.news,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
