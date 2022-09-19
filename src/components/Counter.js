import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,addBy,reset} from '../Redux/counter/action'
export default function Counter() {
    const state = useSelector(state => state.value)
    const dispatch = useDispatch()
    const Increment = () =>{
      dispatch(increment())
    }
    const Decrement = () =>{
      dispatch(decrement())
    }
    const Reset = () =>{
      dispatch(reset())
    }
    const AddBy = (value) =>{
      dispatch(addBy(value))
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{state}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        onClick={Increment}
                >
                    INCREMENT
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
        onClick={Decrement}
                >
                    DECREMENT
                </button>
                <button
                    className="bg-yellow-400 text-white px-3 py-2 rounded shadow"
        onClick={Reset}
                >
                    RESET
                </button>
                <button
                    className="bg-green-400 text-white px-3 py-2 rounded shadow"
        onClick={()=>AddBy(10)}
                >
                  ADDBY
                </button>
            </div>
        </div>
    );
}
