/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "your", "my", "her"];
  let adjective = ["great", "big", "large", "huge"];
  let noun = ["jogger", "raccoon", "soldier", "gym"];
  let url = [".com", ".yeah", ".net", ".gov"];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let urlIndex = 0; urlIndex < url.length; ++urlIndex) {
          let para = document.createElement("p");
          para.innerHTML = `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${url[urlIndex]}`;
          document.getElementById("domain-gen").appendChild(para);
        }
      }
    }
  }
};
