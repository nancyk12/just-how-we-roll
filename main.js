/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/


//reset-button
let resetButton = document.querySelector('#reset-button');

//d6-roll
let imageD6 = document.querySelector('#d6-roll');
let meanD6 = document.querySelector("#d6-rolls-mean");
let medianD6 = document.querySelector("#d6-rolls-medians");
let modeD6 = document.querySelector("#d6-rolls-mode");

//double-d6-roll
let doubleImageD6 = document.querySelector('#double-d6-buttons');
let doubleImageD6Roll1 = document.querySelector('#double-d6-roll-1');
let doubleImageD6Roll2 = document.querySelector('#double-d6-roll-2');
let doubleMeanD6 = document.querySelector('#double-d6-rolls-mean');
let doubleMedianD6 = document.querySelector("#double-d6-rolls-medians");
let doubleModeD6 = document.querySelector("#double-d6-rolls-mode");

//d12-roll
let imageD12 = document.querySelector('#d12-roll');
let meanD12 = document.querySelector('#d12-rolls-mean');
let medianD12 = document.querySelector("#d12-rolls-medians");
let modeD12 = document.querySelector("#d12-rolls-mode");

//d20-roll
let imageD20 = document.querySelector('#d20-roll');
let meanD20 = document.querySelector('#d20-rolls-mean');
let medianD20 = document.querySelector("#d20-rolls-medians");
let modeD20 = document.querySelector("#d20-rolls-mode");
/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', function(){
    console.log("D6 clicked!");
    d6RollFunction();
})

doubleImageD6.addEventListener('click', function(){
   console.log("double-d6-buttons clicked!");
   doubleD6RollFunction();
})

imageD12.addEventListener('click', function(){
    console.log("D12 clicked!");
    d12RollFunction();
})

imageD20.addEventListener('click', function(){
    console.log("D20 clicked!");
    d20Rollfunction();
})

resetButton.addEventListener('click', function(){
    console.log('Reset clicked!');
    reset()
})

//or this
//resetButton.addEventListener('click', reset);

/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //empty gloal arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    //reset images
    //images/start/d6.pngs
    imageD6.src = "./images/start/d6.png";
    doubleImageD6Roll1.src = "./images/start/d6.png";
    doubleImageD6Roll2.src = "./images/start/d6.png";
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg";
    //change text
    meanD6.innerText = "N/A";
    medianD6.innerText = "N/A";
    modeD6.innerText = "N/A";
    doubleMeanD6.innerText = "N/A";
    doubleMedianD6.innerText = "N/A";
    doubleModeD6.innerText = "N/A";
    meanD12.innerText = "N/A";
    medianD12.innerText = "N/A";
    modeD12.innerText = "N/A";
    meanD20.innerText = "N/A";
    medianD20.innerText = "N/A";
    modeD20.innerText = "N/A";
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);
    imageD6.src = `./images/d6/${result}.png`;
    sixes.push(result);
    console.log(sixes);
    meanD6.innerText = getMean(sixes);
    medianD6.innerText = getMedian(sixes);
    modeD6.innerText = getMode(sixes);
}



function doubleD6RollFunction(){
     
    //roll dice
    let roll1 = getRandomNumber(6); 
    let roll2  = getRandomNumber(6);

    //add dice rolls to numbers 

    let mean = roll1 + roll2;
    doubleSixes.push(mean);
    console.log(doubleSixes);
    //doubleSixes.push(roll1, roll2);

    // update images  with dice roll numbers  
    doubleImageD6Roll1.src = `./images/d6/${roll1}.png`;
    doubleImageD6Roll2.src = `./images/d6/${roll2}.png`;

    //update double mean text 
    doubleMeanD6.innerText = getMean(doubleSixes);
    doubleMedianD6.innerText = getMedian(doubleSixes);
    doubleModeD6.innerText = getMode(doubleSixes);
 }

function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);
    imageD12.src = `./images/numbers/${result}.png`;
    twelves.push(result);
    console.log(twelves);
    meanD12.innerText = getMean(twelves);
    medianD12.innerText = getMedian(twelves);
    modeD12.innerText = getMode(twelves);
}

function  d20Rollfunction(){
    let result = getRandomNumber(20);
    console.log(result);
    imageD20.src = `./images/numbers/${result}.png`;
    twenties.push(result);
    console.log(twenties);
    meanD20.innerText = getMean(twenties);
    medianD20.innerText = getMedian(twenties);
    modeD20.innerText = getMode(twenties);
}


/****************
 * MATH SECTION *
 ****************/
function getMean(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    }
    return total/array.length;
}
/*
function getMedian(array){
    let middle = array.length - 1 / 2;
    if(array.length - 1 % 2 == 1){
        return array[middle];
    }else {
        return (array[middle - 1] + array[middle]) / 2.0;
    }
}*/

function getMedian(array){
    let result = 0;
    let index1 = 0;
    let index2 = 0;
    //sort array from least to greatest number
    array.sort(function(a, b){
        return a - b;
    });
    if(array.length % 2 !== 0){
        //if the array is of odd length
        //divide by 2, and floor the result it will give you the element in the middle
    result = Math.floor(array.length/2)  ;
    return array[result];  
    }
    else if (array.length % 2 === 0){
        //if the element is even
        //take the two element in the middle
        //add them together and divide by

        index1 = array[(array.length / 2) - 1];
        index2 = array[(array.length / 2)];
        result = (index1 + index2) / 2;
        return result;
    }
}
/*
function getMode(array){
    let count = 0;
    let number = 0;
    let howMany = 0;
    let mode = 0;
    let most = 0;

    for(let i = 0; i < array.length; i++){
        //number stores element for current cycle
        number = array[i];
        //resets counter at zero for each cycle
        count = 0;

        for(let x = 0; x < array.length; x++){
            howMany = array [x];
            if (number === howMany){
            // a nested loop that iterates through entire array, incrementing the counter for each match of the current cycle
                count++;
            }
            //compare count to most /each time count is greater than most
            //most equals count
            if(count > most){
                most = count;
            }
        //if most equals count on this cycle within the nested loop
        //mode will equal number with updates it to the current element that has appeared the most
            if(most === count){
                mode = number;
            }        
            }
        }
        return mode
    }
    */

    function getMode(arr){
        let obj = {};
        let highest = 0;
        let count = 0;

        for(let i = 0; i < arr.length; i++){
            let num = arr[i];

            if(!obj[num]){
                obj[num] = 1;
            }else {
                obj[num]++;
            }

            if (count < obj[num]){
                highest = num;
                count = obj[num];
            }
        }
        return Number(highest);
    }


