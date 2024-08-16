var e=!1;function t(t,n){var r=document.getElementById("fname");0===r.value.length&&(t.textContent=n,r.remove()),r.value.length>0&&(t.textContent=r.value,r.remove()),e=!1}document.addEventListener("dblclick",function(n){var r=function(e){"Enter"===e.key&&t(o,a)};if(n.target.closest("td")&&!e){e=!0;var o=n.target,a=o.textContent,l=document.createElement("input");o.textContent="",o.appendChild(l),l.setAttribute("type","text"),l.setAttribute("id","fname"),l.setAttribute("class","cell-input"),l.value=a,l.onblur=function(){t(o,a)},l.onkeyup=function(e){r(e)}}}),document.body.insertAdjacentHTML("beforeend",'\n  <form\n      class="new-employee-form"\n      data-qa="small"\n    >\n      <label>Name: <input name="name" type="text" data-qa="name"></label>\n      <label>Position: <input name="position" type="text" data-qa="position"></label>\n      <label>Office:\n        <select name="office" data-qa="office">\n          <option value="Tokyo">Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label>Age: <input name="age" type="number" data-qa="age"></label>\n      <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n      <button type="submit">Save to table</button>\n    </form>\n');var n=function(e,t,n,r,o){var a=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("p");l.innerHTML=n,l.setAttribute("class","title"),i.innerText=r,a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),a.style.width="320px",a.setAttribute("class","notification ".concat(o)),a.setAttribute("data-qa","notification"),document.body.append(a),a.append(l),a.append(i),setTimeout(function(){return a.remove()},2e3)},r=document.querySelector(".new-employee-form"),o=document.querySelector("table").tBodies[0],a=o.children;r.addEventListener("submit",function(e){e.preventDefault();var t=r.elements.name.value,l=r.elements.position.value,i=r.elements.office.value,c=r.elements.age.value,s=r.elements.salary.value;if(t.length<4){n(150,10,"Incorrect name value","The value of the name must contain more than 4 letters","error");return}if(l.length<4){n(150,10,"Incorrect position value","The value of the position must contain more than 4 letters","error");return}if(c<18||c>90){n(150,10,"Incorrect age value","The age value must be greater than 18 or less than 90 years","error");return}if(s<=0){n(150,10,"Incorrect salary value","The salary value must be greater than 0","error");return}var u=a[0].cloneNode(!0);u.children[0].textContent=t,u.children[1].textContent=l,u.children[2].textContent=i,u.children[3].textContent=c;var d=(+s).toLocaleString("en-US");u.children[4].textContent="$".concat(d),o.appendChild(u),r.reset(),n(10,10,"Success","New employee is successfully added to the table","success")});var l=!1,i=!1,c=!1,s=!1,u=!1;document.addEventListener("click",function(e){var t;if(e.target.closest("thead")){var n=Array.from(document.querySelector("table").tBodies[0].children);"Name"===e.target.innerText&&(t=l?n.sort(function(e,t){return t.cells[0].innerText.localeCompare(e.cells[0].innerText)}):n.sort(function(e,t){return e.cells[0].innerText.localeCompare(t.cells[0].innerText)}),l=!l,i=!1,c=!1,s=!1,u=!1),"Position"===e.target.innerText&&(t=i?n.sort(function(e,t){return t.cells[1].innerText.localeCompare(e.cells[1].innerText)}):n.sort(function(e,t){return e.cells[1].innerText.localeCompare(t.cells[1].innerText)}),i=!i,l=!1,c=!1,s=!1,u=!1),"Office"===e.target.innerText&&(t=c?n.sort(function(e,t){return t.cells[2].innerText.localeCompare(e.cells[2].innerText)}):n.sort(function(e,t){return e.cells[2].innerText.localeCompare(t.cells[2].innerText)}),c=!c,l=!1,i=!1,s=!1,u=!1),"Age"===e.target.innerText&&(t=s?n.sort(function(e,t){return+t.cells[3].innerText-+e.cells[3].innerText}):n.sort(function(e,t){return+e.cells[3].innerText-+t.cells[3].innerText}),s=!s,l=!1,i=!1,c=!1,u=!1),"Salary"===e.target.innerText&&(t=u?n.sort(function(e,t){return+t.cells[4].innerText.slice(1).split(",").join("")-+e.cells[4].innerText.slice(1).split(",").join("")}):n.sort(function(e,t){return+e.cells[4].innerText.slice(1).split(",").join("")-+t.cells[4].innerText.slice(1).split(",").join("")}),u=!u,l=!1,i=!1,c=!1,s=!1),t.forEach(function(e){return o.appendChild(e)})}}),document.addEventListener("click",function(e){var t=e.target.closest("tbody"),n=Array.from(document.querySelector("table").tBodies[0].children);if(t){var r=e.target.closest("tr");n.forEach(function(e){e.hasAttribute("class")&&e.removeAttribute("class")}),r.setAttribute("class","active")}});
//# sourceMappingURL=index.eb4b8790.js.map
