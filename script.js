let data = [
    {Id:1, Ism:'Farrukh', Yoshi:25, Kasbi:'Dasturchi'},
    {Id:2, Ism:'AbduLaziz', Yoshi:20, Kasbi:'Dasturchi'},
    {Id:3, Ism:'Shaxzod', Yoshi:21, Kasbi:'Dasturchi'},
    {Id:4, Ism:'Ahtambek', Yoshi:22, Kasbi:'Dasturchi'},
    {Id:5, Ism:'Miras', Yoshi:27, Kasbi:'Dasturchi'},
    {Id:6, Ism:'Islomjon', Yoshi:25, Kasbi:'Dasturchi'},
    {Id:7, Ism:'Asrorbek', Yoshi:30, Kasbi:'Dasturchi'}


];
const maint = document.getElementById('body');
const inputModelBlock = document.getElementById('inputName');
const inputNameBlock = document.getElementById('inputAge');
const inputJobBlock = document.getElementById('inputJob')

// let valueModel = ''
// let inputName = ''
// let inputJob = ''

inputJobBlock.addEventListener('input',(e)=>{
    inputJob = e.target.value
})

inputModelBlock.addEventListener('input',(e)=>{
    valueModel = e.target.value
})
inputNameBlock.addEventListener('input',(e)=>{
    inputName = e.target.value
})
function addProperty() {
    if(valueModel.length){
        if(inputName.length){
    data.push({Id:data.length+1,Ism:valueModel,Yoshi:inputName,Kasbi:inputJob  })
    fara()
}}}

  function deleteFunc(Id) {
    data = data.filter((value)=> value.Id !==Id)
    fara()
  }

const maintag = document.getElementById("main");

function fara () {
    maintag.innerHTML = data.map((value)=>`
    
    <div class="section">
   <div class="id1">
   <h1>${value.Id}</h1>
   </div>
   <div>
   <h1>${value.Ism}</h1>
   </div>
   <div>
   <h1>${value.Yoshi}</h1>
   </div>
   <div>
   <h1>${value.Kasbi}</h1>
   </div>
   <div>
   <button onclick="deleteFunc(${value.Id})">O'chirish</button>
   </div>

    </div>
    
    `).join(``)
}
fara()