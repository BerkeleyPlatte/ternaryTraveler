function poiForm() {
  return `
    <div id="addForm">
        <label>Name</label>
        <input type="text" id="name" />
        <label>Description</label>
        <input type="text" id="description" />
        <label>Cost</label>
        <input type="text" id="cost" />
        <label>Country</label>
        <select id="country">
            <option value="italy">Italy</option>
            <option value="switzerland">Switzerland</option>
            <option value="france">France</option>
        </select>
        <button id="saveBtn">Save</button>
    `;
}

function makeInterestsComp(int) {
  let intComponent = `
        <div class="intCard" id="intCard--${int.id}">
         <h1>${int.name}</h1>
         <p>${int.description}</p>
         <p>${int.cost}</p>
         <p>${int.country}</p>
         <button id="delete--${int.id}" class="deleteIntBtn">delete</button>
         <button id="edit--${int.id}" class="editIntBtn">edit</button>
         
        </div>
        `;
  return intComponent;
}

export { poiForm, makeInterestsComp };
