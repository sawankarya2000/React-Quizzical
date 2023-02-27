import React from "react";

async function fetchData() {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await response.json();
      const results = data.results.map(item => ({
        question : item.question,
        correct_answer : item.correct_answer,
        incorrect_answers : item.incorrect_answers
      }))
      console.log(results);
      return results;
}


export default fetchData;