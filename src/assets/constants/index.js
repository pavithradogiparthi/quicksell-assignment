
import user1 from '../images/1.jpg';
import user2 from '../images/2.jpg';
import user3 from '../images/3.jpg';
import user4 from '../images/4.jpg';
import user5 from '../images/5.jpg';

const ticketTypes = [{name:"Backlog",icon:"rotate_left"},{name:"Todo",icon:"circle"},{name:"In progress",icon:"clock_loader_40"},{name:"Done",icon:"check_circle"},{name:"Canceled",icon:"cancel"}];
const userIds = [{id:"usr-1",name:"Anoop sharma",icon:user1},{id:"usr-2",name:"Yogesh",icon:user2},{id:"usr-3",name:"Shankar Kumar",icon:user3},{id:"usr-4",name:"Ramesh",icon:user4},{id:"usr-5",name:"Suresh",icon:user5}];
const priorities = [{id:0,name:"No priority",icon:"more_horiz"},{id:4,name:"Urgent",icon:"crisis_alert"},{id:3,name:" High",icon:"priority_high"},{id:2,name: "Medium",icon:"priority"} ,{id:1,name:"Low",icon:"low_priority"}];

export {ticketTypes,userIds,priorities};