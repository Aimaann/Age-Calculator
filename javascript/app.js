document.getElementById('sub_btn').addEventListener('click' ,calculate)
// calculate the funtion
function calculate(){
    //user input date
    let y1 = document.getElementById('year').value 
    let m1 = document.getElementById('month').value
    let d1 = document.getElementById('date').value
    
    //Current date 
    let y2 = new Date().getFullYear();
    let m2 = new Date().getMonth();
    let d2 = new Date().getDate();
    
    // output box
    let dayBox = document.getElementById('sp_day')
    let monthBox = document.getElementById('sp_month')
    let yearBox = document.getElementById('sp_year')
      
     // Calculation
     var d; var m; var y;
     let month =[31,28,31,30,31,31,31,30,31,,31,31]

     if(y1 <= y2 && m1 <= 12 && d1 <=31){
        if(d1>d2){
            d2=d2 + month[m2 -1]
            m2 = m2 -1
        }
        if (m1 > m2){
            m2 = m2 + 12
            y2 = y2 - 1
        }
        d = d2 - d1;
        m = m2 - m1 ;
        y = y2 - y1;
        dayBox.textContent = d;
        monthBox.textContent = m;
        yearBox.textContent = y;

     }
     else{
        // let inputs = document.getElementsByClassName("birth_inp"
        // Array.from(inputs).forEach(e)=>{
        //    e.valua = " " 
        // })
        
        alert('Please Enter Valid Date')
     }


}
