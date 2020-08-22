
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
    let butt = document.querySelector('#feedbackSubmit');
    butt.addEventListener('click', function() {
        let feedback = document.querySelector('#feedbackInfo');
        feedback.innerHTML = "Thanks for the response!";
        let inputSpace = document.querySelector('#inputFeed');
        inputSpace.textContent = "";
        document.querySelector('#inputFeedback').value="";
    })
}

feedbackSubButton();



function identifySubButton(){
    let butt = document.querySelector('#identifySubButton');
    butt.addEventListener('click', function() {
        let title = document.querySelector('#identifyButt');
        title.innerHTML = "Thanks for the response!"
        let body = document.querySelector('#collapseOne');
        body.classList.add('hide');
    })
}


identifySubButton();

function hotlineButtonLink(id, site){
    let butt = document.querySelector(id);
    butt.addEventListener('click', function(){
        window.location = site;
    });

}

hotlineButtonLink('#suic', "https://suicidepreventionlifeline.org/");
hotlineButtonLink("#sex", "https://www.rainn.org/about-national-sexual-assault-telephone-hotline");
hotlineButtonLink("#cris", "https://www.crisistextline.org/");
hotlineButtonLink("#eat", "https://www.bulimia.com/topics/eating-disorder-hotline/");
hotlineButtonLink("#pan", "https://www.mentalhelp.net/anxiety/panic-attack-hotline/");