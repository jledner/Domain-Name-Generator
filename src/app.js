/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];
  let newArray = [];
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < ext.length; d++) {
          newArray.push(pronoun[a] + adj[b] + noun[c] + ext[d]);
          var list = document.createElement("ul");
          newArray.forEach(function(wizard) {
            var li = document.createElement("li");
            li.textContent = wizard;
            list.appendChild(li);
          });
          var app = document.querySelector(".mt-5");
          app.appendChild(list);
        }
      }
    }
  }
};
