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

  const rand = arr => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  let pron = rand(pronoun);
  let ad = rand(adj);
  let nou = rand(noun);

  console.log(pron + ad + nou + ".com");
};
