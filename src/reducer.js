export const initialState = {
  user: null,
  playlists: [],
  playlist: [],
  playing: false,
  item: null,
  discover_weekly: [],
  // token:
  //   "BQDuFRfFQMWp39siPe_bw0u7hryr7Qx-X06L67Y2cd_kAXPOPqrhJK_JIgb3gupxpoWNQPjTbRH5ToUHXX3LdsA5Ths2mJoiyr-Qy4zI5hdfeAoKyhcvy3hv5sTGUzOguOPGjRMIXbfFbGZVKHS5VEjPYP0cPg8pORZb2T0btDJotvV4ooqH",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
};

export default reducer;
