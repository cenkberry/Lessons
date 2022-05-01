import { SAYAC_ARTTIR , SAYAC_AZALT , SAYAC_SIFIRLA } from "./types";

export const arttir = () =>{
  return{
    type: SAYAC_ARTTIR,
  }
}

export const azalt = () =>{
  return{
    type: SAYAC_AZALT,
  }
}

export const sifirla = () =>{
  return{
    type: SAYAC_SIFIRLA,
  }
}
