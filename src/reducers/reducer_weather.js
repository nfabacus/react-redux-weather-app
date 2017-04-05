import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if(action.error) {
        console.log(action.payload);
        return state;
      }
      if(state.length>0 ){
        console.log("state in reducer_weather", state);
        var sameNames = state.filter((obj)=>{
          // console.log("obj.city.name", obj.city.name);
          return obj.city.name === action.payload.data.city.name;
         });
        // console.log("sameNames:", sameNames);
        if(sameNames.length>0){
          console.log("Same name already searched!");
          return state;
        }
      }
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
