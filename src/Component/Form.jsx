import React from "react";

export default function Form() {
  return (
    <div>
      <form id="create-one" >
        <label for="title"> Title : </label>
        <input type="string" name="title" value="Take me to a quick walk with my wheelchair" id="title" />
        <label for="description"> Description :</label>
        <input type="string" name="description" value="I want to see the cherry blossom of the park and have some fresh air !
" id="description" />
        <label for="location">Location: </label>
        <input type="string" name="location" value="Jardin des Plantes" id="location" />
        <label for="tags">Catégorie :</label>
        <select name="tags" form="create-one">
  <option value="Take a walk">Take a walk</option>
  <option value="DIY">DIY</option>
  <option value="Admiministrative">Admiministrative</option>
  <option value="Learn">Learn</option>
  <option value="Nursering">Nursering</option>
  <option value="Other">Other</option>
</select>
        <label for="date">Date :</label>
        <input type="date" name="date" id="date" />
       
      </form>
    </div>
  );
}
