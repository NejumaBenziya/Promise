function getCountryData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>{
        return res.json()
    })
    .then(result=>{
        console.log(result)
        result.forEach( cnty=> {
            const cntyBox=document.createElement('div')
            cntyBox.className='box'
            const img= document.createElement('img')
            img.className='imgtag'
            img.src=cnty.flags.png
            cntyBox.appendChild(img)
            document.getElementById('container').appendChild(cntyBox)
        });
    })
    .catch(err=>{
        console.log(err)
    })
}