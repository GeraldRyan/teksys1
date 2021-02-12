
// axios.get(`https://api.nasa.gov/planetary/apod?api_key=1KP7HFMm9RGHkhwkvYPFImgat3hNyWdt9cVkDdQa`).then(response=>{
// console.log(response.data)
// }).catch(
//   console.log("Error on request")
// )
let tagAreaDiv = document.getElementById("tag-area")

let tags = ["beaches", "mountains", "woods", "family", "adventure", "disney", "romance", "epic", "European", "Asia"]

tags.forEach((v,i,a)=>{
  let newButton = document.createElement("button")
  let newTextNode = document.createTextNode(v)
  newButton.appendChild(newTextNode)
  tagAreaDiv.appendChild(newButton)
})

let resultsHeadings = ["City", "Country", "Booking Agent", "Description"]
let sampleResultsData = [["Marburg", "Germany", "Heidi G.", "Super Cool Place"], ["Capetown", "South Africa", "Natalie P.","Super Cool Place"], ["Bogota", "Columbia", "Alejandra G.", "Super Cool Place"], ["Chaing Main", "Thailand", "Sara M.", "Super Cool Place"]]


let resultsTable = document.getElementById("results-table")
let tableHeading = document.getElementById("table-heading")

resultsHeadings.forEach((v,i,a)=>{
  let newTH = document.createElement("th")
  let newTextNode = document.createTextNode(v)
  newTH.appendChild(newTextNode)
  tableHeading.appendChild(newTH)
})
for (let i =0; i< sampleResultsData.length; i++){
  let tr = document.createElement("tr")
  resultsTable.appendChild(tr)
  sampleResultsData[i].forEach((v,i,a)=>{
    let newTD = document.createElement("td")
    let newTextNode = document.createTextNode(v)
    newTD.appendChild(newTextNode)
    tr.appendChild(newTD)
    })
    
}
