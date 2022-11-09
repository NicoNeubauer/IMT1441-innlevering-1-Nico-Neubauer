fetch ('js/kliste.json') //fetcher jason dataen som jeg trenger til å lage tabellen
.then(res=>res.json())   
.then(studenter=>{
  const section = document.getElementById("klisteSection"); //Denne costen gjør det lettere å finne hvor allt skal til slutt
  const tabel = document.getElementById("table1") //først lager jeg en table slik at jeg kan legge til  
  const tr = document.createElement("tr"); // denne gjør det lettere å lage <tr> senere
    tabel.appendChild (tr);  //bruker costen som ble laget tidligere for å henge tablet i DOMen

  studenter.forEach(student=>{ 
    const tr = document.createElement("tr"); // jeg kjører en for Eatch på srudentlista for at jeg får en <td> for hver eneste studen i emne
    tr.innerHTML = `<td>${student.givenName}</td> <td>${student.lastName}</td> 
    <td>${student.Email}</td> <td>${student.studyProgramme}</td>`;
    tabel.appendChild (tr); //bruker costen som ble laget tidligere for å henge tablet i DOMen
  });
  section.appendChild(tabel); //bruker den andre costen som ble laget tidligere for å henge tablet i DOMen
});