import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  Category: [],
  value: [],
  price: 0,
  dis: 0,
  amt: 0,
  tdis: 0,
  cnt: 0,
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    item: (state, action) => {
      for(let i=0;i<action.payload.length;i++)
      {
          action.payload[i].qty = 1;
        action.payload[i].tprice = action.payload[i ].price;
      }
      state.data = [...action.payload];
      console.log(state.data);
    },
    category: (state, action) => {
      state.Category = [...action.payload];
    },
    
    add: (state,action) => {
      
      let check = false;
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].title === action.payload.title) {
          check = true;
        }
        else {
          check = false;
        }
        if (check === true) {
          break;
        }
      }

      if (check === true) {
        alert("All Ready In Cart")
      }
      else {
        console.log(action);
        // Object.defineProperty( action.payload,action.payload.qty = 1)
        state.value = [...state.value, action.payload];

        state.price = state.price + action.payload.price;

        state.dis = action.payload.price / action.payload.discountPercentage;
        state.tdis = state.tdis + state.dis;
        state.amt = state.price - state.tdis;
        state.cnt++;
      }

    },
    increment: (state, ele) => {

      console.log(ele);
      state.value[ele.payload.ind].qty = ele.payload.ele.qty + 1;
      state.value[ele.payload.ind].tprice = ele.payload.ele.price * state.value[ele.payload.ind].qty;

      state.price = state.price + ele.payload.ele.price;

      state.dis = ele.payload.ele.price / ele.payload.ele.discountPercentage;
      state.tdis = state.tdis + state.dis;
      state.amt = state.price - state.tdis;
    },
    decrement: (state, ele) => {

      if (state.value[ele.payload.ind].qty > 1) {
        state.value[ele.payload.ind].qty = ele.payload.ele.qty - 1;

        state.value[ele.payload.ind].tprice = ele.payload.ele.price * state.value[ele.payload.ind].qty;

        state.price = state.price - ele.payload.ele.price;

        state.dis = ele.payload.ele.price / ele.payload.ele.discountPercentage;
        state.tdis = state.tdis - state.dis;
        state.amt = state.price - state.tdis

      }

    },
    remove: (state, action) => {
      state.value = state.value.filter((ele, ind) => {
        return action.payload.ele.title !== ele.title;
      })
      state.price = state.price - action.payload.ele.tprice;

      state.dis = action.payload.ele.tprice / action.payload.ele.discountPercentage;
      state.tdis = state.tdis - state.dis;
      state.amt = state.price - state.tdis;
      state.cnt--;

    }
  },
})

// Action creators are generated for each case reducer function
export const { item, category, add, increment, decrement, remove } = counterSlice.actions

export default counterSlice.reducer