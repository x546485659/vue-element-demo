export const increment = (store,payload) => {
  payload.msg+="44"
  store.commit('getMsg',payload)
};
