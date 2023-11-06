import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import store from "../store";
import { Provider } from "react-redux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import todosReducer from "./ReduxExamples/todos/todosReducer";
import Assignment3 from "../a3";

function Assignment4() {
    function sayHello() {
      alert("Hello");
    }

   return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions theFunction={sayHello} />
     <EventObject />
     <Counter />
     <BooleanStateVariables />
     <StringStateVariables />
     <DateStateVariable />
     <ObjectStateVariable />
     <ArrayStateVariable />
     <ParentStateComponent />
     <ReduxExamples />
     <Provider store={store}>
      <div className="container">
        <h1>Labs</h1>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <Assignment3 />
      </div>
    </Provider>

   </>
 );
};
export default Assignment4;