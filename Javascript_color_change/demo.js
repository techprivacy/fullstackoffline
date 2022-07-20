
var count  =  0
setInterval(()=>{


    var color  =  Math.floor(Math.random() *  16777215   ).toString(16)
    document.getElementById('space').innerHTML =  `<h1>#${color}</h1>`
    document.getElementById('space').style.color  =  '#'+color
    if(count <  10)
    {

        document.getElementById('myimg').src = `file:///C:/Users/NTPL/OneDrive/Desktop/Demo-10/person/person_000${count}.jpg`
    }
    else if(count > 9 && count < 100)
    {
        document.getElementById('myimg').src = `file:///C:/Users/NTPL/OneDrive/Desktop/Demo-10/person/person_00${count}.jpg`
        
    }
    else
    {
        document.getElementById('myimg').src = `file:///C:/Users/NTPL/OneDrive/Desktop/Demo-10/person/person_0${count}.jpg`

    }

    document.getElementById('myimg').style.border =  `10px solid #${color}`
    count  =  count +1

  
} , 500)