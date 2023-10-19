import React, { useEffect, useState } from "react";
import "./App.css"
import { ticketTypes,userIds, priorities } from "./assets/constants/index";
import Navbar from "./components/Navbar";
import ListHolder from "./components/ListHolder";
import DisplaySettings from "./components/DisplaySettings";
import api from "./api/index"


function App() {

  const LOCAL_STORAGE_KEY = "storage";



  const [tickets, setTickets] = useState([]);
  const [users,setUsers] = useState([])
  const [isActive, setIsActive] = useState(false);
  const [grouping, setGrouping] = useState("");
  const [ordering, setOrdering] = useState("");
  const [arrangedLists, setArrangedLists] = useState([]);
  const [coloumnNames, setColoumnNames] = useState([]);
  const [coloumnLength, setColoumnLengths] = useState([]);
  const [userAvailability,setUserAvailability] = useState([]);
  
  const fetchData = async ()=>{
      const response = await api.get();
      return response.data;
  }

  const displaySettingHandler = () => {
    const arrangedList = [];
    const coloumnNames = grouping === "status" ? ticketTypes :
      grouping === "user" ? userIds :
      grouping === "priority" ? priorities : [];
      for(let i = 0;i<5;++i){
        arrangedList.push(tickets.filter((ticket) => {
          if (grouping === "status") return ticket.status === ticketTypes[i].name;
          if (grouping === "user") return ticket.userId === userIds[i].id;
          if (grouping === "priority") return ticket.priority === priorities[i].id;
          return false;
        }));
      }
      arrangedList.forEach(subList => subList.sort((a, b) => ordering === "title" ? a.title.localeCompare(b.title) : b.priority - a.priority));
      const countList = arrangedList.map(subList => subList.length);
      const userAvailability = users.map((user,index)=> {
        const userState = {...user,img:userIds[index].icon};
        return userState;
      });
      setArrangedLists(arrangedList);
      setColoumnNames(coloumnNames);
      setColoumnLengths(countList);
      setUserAvailability(userAvailability);
  }
  

  useEffect(() => {
    const getData = async ()=>{
        const data = await fetchData();
        if(data) {
            setTickets(data.tickets);
            setUsers(data.users)
        }
        const getIntialState = () => {
          const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
          if (data) {
            setGrouping(data.group);
            setOrdering(data.order);
          } else {
            setGrouping("status");
            setOrdering("priority");
          }
        }
        getIntialState();
    }
    getData();
    displaySettingHandler();
  }, []);

  useEffect(() => {
    displaySettingHandler();
    if (grouping !== "" && ordering !== "")
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ group: grouping, order: ordering }));
  }, [grouping, ordering]);

  return (
    <div>
      <Navbar isActive={isActive} setIsActive={setIsActive}/>
      {isActive && <DisplaySettings setIsActive={setIsActive} grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering}/>}
      <div className="main-div">
        {coloumnNames.map((coloumnName, index) => (
          <ListHolder key={index} i={index} title={coloumnName} list={arrangedLists[index]} count={coloumnLength[index]} userAvailability={userAvailability} status={ticketTypes} grouping={grouping}/>
        ))}
      </div>
    </div>
  );
}

export default App;
