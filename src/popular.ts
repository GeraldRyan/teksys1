
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