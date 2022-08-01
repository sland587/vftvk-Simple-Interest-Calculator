function compute()
{
    //Grab the principal textbox
    let principalTextbox = document.getElementById("principal");
    
    //Get the principal value
    let principal = principalTextbox.value;

    //If the principal is less than or equal to 0, 
    // do not continue calculation.
    //Alert user to enter positive number.
    if(principal <= 0)
    {        
        alert("Enter a positive number");        
        principalTextbox.focus();
        return;
    }
    
    //Grab the selected interest rate
    let rate = document.getElementById("rate").value;

    //Grab the selected year
    let years = document.getElementById("years").value;

    //Calculate the interest
    let interest = principal * years * rate / 100;

    //Add the number of years to current year to get the
    //maturaty year.
    let year = new Date().getFullYear()+parseInt(years);

    //Update the result message with the calculate values
    //Note: values will be highlighted in message.
    let result = document.getElementById("result");
    result.innerHTML = 
    `If you deposit <span style="background-color:yellow">${principal}</span>,<br>
    at an interest rate of <span style="background-color:yellow">${rate}%</span><br>
    You will receive an amount of <span style="background-color:yellow">${interest}</span><br>
    in the year <span style="background-color:yellow">${year}</span>`;
}

//Updates the slider rate label as the user changes the slider.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}
        