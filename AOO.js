// let num=[1,2,3,6,7]
// let newnum= num.map((e)=>{
// return e<3

// })

let TABLE = document.querySelector("#BODY");

student.map((e) => {
  TABLE.innerHTML += `
    <tr>
      <td>${e.Name}</td>
      <td>${e.GENDER}</td>
      <td>${e.AGE}</td>
    </tr>
  `;
});
