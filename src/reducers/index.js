import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "4:05" },
    { title: "Nutshell", duration: "3:35" },
    { title: "In the End", duration: "4:50" },
    { title: "Patience", duration: "5:25" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
