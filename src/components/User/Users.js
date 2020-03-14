import React from "react";
import "./Users.css";
import  $ from 'jquery';
import faker from 'faker';


const Users = () => {
  let url = "https://jsonplaceholder.typicode.com/photos";
  let first15;
  fetch(url)
    //https://joppot.info/en/2018/11/09/4247
    .then(response => response.json())
    .then(data => {
        let results = data.map(em=> em.url);
        first15=results.slice(0,15);
        console.log(first15);

        first15.map(data=>{
            let res =`
            <img src="${data}"/>`;
           // document.getElementById("photos").appendChild(res);
           $("#photos").append(res);
        
        })
           
    });

  return (
    <div className="full-panel">
       
      <div className="left-panel" id="photos">
            
      </div>
      <div className="right-panel"></div>
    </div>
  );
};
    
export default Users;
