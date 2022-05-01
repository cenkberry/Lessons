const default_state = 0;

const reducer = (state = default_state , action) =>{

  switch(action.type) {

    case "SAYAC_ARTTIR":
      return state + +1;

    case "SAYAC_AZALT":
      return state - 1;

    case "SAYAC_SIFIRLA":
      return state = 0;

    case "NAMER":
      return state = "CENK";

    default:
      return state;
  }
}

export default reducer;