function createTable() {
    //Write your code here
	let rows=prompt("Input number of rows");
	let col=prompt("Input number of columns");


	let tableELe=document.getElementById("myTable");
	tableELe.innerHTML="";
	tableELe.innerHTML=`<thead></thead>
                       <tbody></tbody>`;
	//console.log(tableELe);
	let tbody=document.getElementById("myTable").children[1];
	for(let i=0;i<rows;i++){
		let newTr=document.createElement("tr");
		for(let j=0;j<col;j++){
			let newTd=document.createElement("td");
			newTd.textContent=`Row-${i} Column-${j}`;
			newTr.appendChild(newTd);
		}
		tbody.appendChild(newTr);
	}
  
}
