/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "his", "her"];
  let adj = ["great", "big", "little", "small"];
  let noun = ["jogger", "racoon", "bear", "dog"];

  for (let pron of pronoun) {
    for (let ad of adj) {
      for (let no of noun) {
        console.log(pron + ad + no + ".com");
      }
    }
  }
};
