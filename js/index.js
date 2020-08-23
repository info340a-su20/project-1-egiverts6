let state = {
    identityOptions: [
      {id:1, output:"You most likely are not struggling with mental health issues. Check out the 'Learn' section to find out more."},
      {id:2, output:"You might be struggling with mental health issues. Check out the 'Learn' section to find out more."} 
    ],
    inputtedText: ''
  };

function cardButtonLink(id, site){
    let butt = document.querySelector(id);
    butt.addEventListener('click', function(){
        window.location = site;
    });

}


cardButtonLink('#anxiety', "https://www.webmd.com/anxiety-panic/guide/anxiety-disorders#1");
cardButtonLink('#depression', "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007");
cardButtonLink('#eating', "https://www.mayoclinic.org/diseases-conditions/eating-disorders/symptoms-causes/syc-20353603");
cardButtonLink('#ocd', "https://www.webmd.com/mental-health/obsessive-compulsive-disorder#1");
cardButtonLink('#ptsd', "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967");

function feedbackSubButton(){
    let butt = document.querySelector('#feedbackSubmitButt');
    butt.addEventListener('click', function() {
        let feedback = document.querySelector('#feedbackInfoPar');
        feedback.innerHTML = "Thanks for the response!";
        document.querySelector('#inputFeedback').value="";
    })
}

feedbackSubButton();

function feedbackHeaderSubButton(){
    let butt = document.querySelector('#feedSubID');
    butt.addEventListener('click', function() {
        let feedback = document.querySelector('#feedbackInfo');
        feedback.innerHTML = "Thanks for the response!";
        document.querySelector('#inputFeedback1').value="";
    })
}

feedbackHeaderSubButton();



function identifySubButton(){
    let butt = document.querySelector('#identifySubButton');
    butt.addEventListener('click', function() {
        let title = document.querySelector('#identifyButt');

       let input = document.getElementById("inlineFormCustomSelect1");
       if(input.value == "1" || input.value == "2"){
            title.innerHTML = state.identityOptions[0].output;
       }else{
            title.innerHTML = state.identityOptions[1].output;
       }
        let body = document.querySelector('#collapseOne');
        body.classList.add('hide');
    })
}




identifySubButton();


function identifyHeaderSubButton(){
    let butt = document.querySelector('#identifySubButton1');
    butt.addEventListener('click', function() {
        let title = document.querySelector('#IdenitifyModalLongTitle');
        let input = document.getElementById("inlineFormCustomSelect");
        if(input.value == "1" || input.value == "2"){
            title.innerHTML = state.identityOptions[0].output;
        }else{
            title.innerHTML = state.identityOptions[1].output;
        }
        let body = document.querySelector('#collapseTwo');
        body.classList.add('hide');
    })
}

identifyHeaderSubButton();



let dataArr = "";

function searchState(state){
    console.log(state);

    d3.csv("/Mental-Illness-Stats.csv")

        .then(function(data) {
            //console.log(data);
            dataArr = data;
            console.log(dataArr);
            let index = dataArr.findIndex(function(data) {
                return data.State == state;
            });

            if(typeof dataArr[index] === 'undefined'){
                return("State does not exist. Try again.");
            }
        
            console.log(index);

            num = dataArr[index].Percent;
            console.log(num);
             return(num);
            
            
        });
    }

   searchState("California");

  
function dynamicButton(){
    let buttonn = document.querySelector('#dynamicSearchButton');
    buttonn.addEventListener('click', function(){
        let inputSpacee = document.querySelector('#stateInputt');
        let state = inputSpacee.value;
        let percent = searchState(state);
        inputSpacee.innerHTML = percent;
        let perc = document.querySelector('#output');
        perc.textContent = num;
    })
}

dynamicButton();

