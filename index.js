const startButton = document.getElementById('start_button');
const nextButton = document.getElementById('next_button');
const mainQuestion = document.getElementById('main_question');
const quiz = document.getElementById('quiz');
const landingPage = document.getElementById('landing_page'); 


startButton.addEventListener("click", function() {
    landingPage.style.display = "none"; 
    quiz.style.display = "block";
    displayQuestion();
})

nextButton.addEventListener("click", function() {
    if (currentQuestion < questions.length - 1) {
       /*if (userAnswers[currentQuestion] !== undefined) {*/
            currentQuestion++;
            displayQuestion();
        /*} else { 
            alert("Please select an answer before proceeding to the next question.");
        }*/
    } else {
            quiz.style.display = "none";
            resultsPage.style.display = "block";
            displayResults();
    }
})


function recordAnswer(){

}

const questions = [
    { 
        scenario: "Maria, a young 20-year old college student, goes to a college-wide party. Maria’s goal is to connect with other students who have the same interests as her. Fortunately, one boy at the party gives her the number of a man who runs a Marketing and Advertising company. The man contacts Maria the next day and offers her an opportunity to work with his company. However, he is vague about the job responsibilities and asks Maria to meet him alone at an unfamiliar location to discuss the opportunity. ",
        main_question: "What would be the safest response?",
        options: [ 
            "A. Meet him because the opportunity could be valuable. However, go with a trusted friend and carry a phone in case of emergency.", 
            "B. Ask for more information about the company and verify job legitimacy independently before agreeing to meet.", 
            "C. Meet him alone, but don’t take any personal verification or devices. It might only be a quick meeting anyway!", 
            "D. Accept immediately because the opportunity came through a fellow college student."
        ], 
        correct:1,
        explanation: `The correct answer is B. <br><br>
<strong>Why is A incorrect?</strong> Regardless of the safety measures implemented, walking into a potentially unsafe situation is still severely dangerous. Human traffickers often use the guise of “exclusive job opportunities to lure young targets to isolated locations. Relying solely on a friend for security does not replace the critical first step of verifying who the person is and whether the business actually exists.
<br><br>
<strong>Why is C incorrect?</strong> This is the most dangerous option. Meeting an unknown person completely alone at an unfamiliar location leaves Maria vulnerable to physical harm, kidnapping, or assault. Leaving behind communication devices means she has absolutely no way to call for help, use GPS, or alert anyone if things go wrong.
<br><br>
<strong>Why is D incorrect?</strong> Just because the contact came from a colleague at a party does not mean the person actually knows the businessman. The student could have been tricked themselves, paid to hand out the number, or could simply be an acquaintance to the businessman. Accepting a job without knowing the responsibilities or verifying the employer's legitimacy could leave Maria in physical danger.

`

    },
    { 
        scenario: "Roxanne, a 16-year old who lives in South America, loves posting about her interest in fashion design. After seeing her posts, a fashion designer located overseas contacts her and tells her that he can help her pursue opportunities in the fashion industry. He says that before they can discuss the opportunity further, she needs to send him a copy of her passport and other identification documents.",
        main_question: "What would be the most appropriate response?",
        options: [ 
            "A. Send the documents because the designer needs them to verify her identity before offering her the opportunity.", 
            "B. Ask the designer for more information about himself and his background because Roxanne should know the designer better before sending the required documents. ", 
            "C. Look for legitimacy on the designer’s profile/company, ask the designer for more information, and request a trusted adult for guidance.", 
            "D. Send a copy of the documents instead of the actual copies since that is safer."
        ], 
        correct:2,
        explanation: `The correct answer is C. <br><br>
<strong>Why is A incorrect?</strong> Sharing highly sensitive identification like a passport with an unverified stranger online threatens exploitation. Regardless of the designer's stated reasons, legitimate professionals do not require official identification documents before even discussing basic job details or establishing a formal, verified relationship. 
<br><br>
<strong>Why is B incorrect?</strong> Asking questions is a good move, but relying solely on the information the designer provides is a major security flaw. Human traffickers are skilled at fabricating elaborate lies, creating fake portfolios, and saying exactly what a young person wants to hear to build trust. Roxanne cannot rely on the predator's own self-reporting to determine if he is safe.
<br><br>
<strong>Why is D incorrect?</strong> Sending copies of documents is just as dangerous as sending the originals. Digital copies of passports and IDs contain full names, birth dates, document numbers, and photos. This is the exact information needed to facilitate human trafficking by tracking, manipulating, or fabricating official records for a minor. 
`

    },   
    { 
        scenario: "Elise, a 24-year-old, accepts a new job at a restaurant after being promised a specific wage and schedule. After she starts working, her employer tells her that she will have to work significantly longer hours without additional pay. When Elise says she cannot agree to the new conditions, her employer threatens to report her to the authorities if she refuses.",
        main_question: "What would be the most appropriate response?",
        options: [ 
            "A. Continue working because she already accepted the job and should honor her original agreement.",
            "B. Recognize the threats as a warning sign and seek help from a trusted person or appropriate support service.",
            "C. Agree to the new conditions temporarily so she doesn't create conflict with her employer",
            "D. Quit immediately without telling anyone because leaving the situation is the only way to stay safe."
        ], 
        correct:1,
        explanation: `The correct answer is B. <br><br>
<strong>Why is A incorrect?</strong> Continuing to work under these conditions traps Elise in a cycle of severe exploitation. The employer has already violated the original agreement and is using illegal coercion. Honoring a contract that the employer has broken only gives them more control to escalate their abusive demands, such as withholding pay entirely or enforcing worse working conditions.
<br><br>
<strong>Why is C incorrect?</strong> Following the employer's demands to avoid conflict gives the employer confirmation that their threats work. Threatening a worker with legal action or reporting them to authorities to force them to perform unpaid labor is a classic tactic of human trafficking and forced labor. Cooperating temporarily does not keep Elise safe. 
<br><br>
<strong>Why is D incorrect?</strong> While removing herself from the immediate environment is an important goal, quitting and cutting off communication without telling anyone leaves Elise highly vulnerable. The employer has already threatened to report her to authorities. If she disappears without seeking legal support first, the employer may carry out their threats, leaving her to face the consequences alone. 
`

    },
    { 
        scenario: "Daniel, a 19-year-old college student, posts online about his interest in photography. One day, he receives a direct message from someone claiming to work for a media company in another city. The recruiter promises good pay but gives Daniel very few details about the work. He says Daniel will need to travel quickly and that the company will arrange his housing once he arrives.",
        main_question: "What would be the most appropriate response?",
        options: [ 
            "A. Accept because the recruiter is offering to arrange transportation and housing, which makes the opportunity more convenient.",
            "B. Give the recruiter his personal information to prove that he is serious about the opportunity.",
            "C. Agree to the opportunity immediately because the recruiter contacted him directly about his photography.",
            "D. Ask for a written job description and independently verify the company, pay, and working conditions before agreeing to travel."
        ], 
        correct:3,
        explanation: `The correct answer is D. <br><br>
<strong>Why is A incorrect?</strong> Offering to handle travel and housing is a common grooming tactic used by traffickers to create immediate isolation and dependence. By allowing an unverified stranger to control his physical movement and living arrangements in a different city, Daniel risks giving up his freedom. Once he arrives, the reality of the situation could change, leaving him trapped far from home with no independent way to escape.
<br><br>
<strong>Why is B incorrect?</strong> Sharing personal data such as his home address, phone number, or ID with an unverified online contact exposes Daniel to identity theft, financial fraud, and stalking. In cases of human trafficking, predators use personal information to blackmail, track, or threaten the victim and their family, stripping away Daniel's leverage before he even fully understands the situation.
<br><br>
<strong>Why is C incorrect?</strong> Flattery and targeting a specific hobby are highly effective manipulation techniques. Just because a recruiter reaches out directly does not mean they are legitimate. Accepting an offer immediately without any details or verification bypasses critical safety checks, walking Daniel straight into a situation that could involve forced labor, fraud, or physical danger under the guise of a dream job.
`

    },
    { 
        scenario: "Jordan, a 21-year-old, meets someone who offers to help them earn money through modeling. The person begins arranging Jordan's work and keeping most of the money Jordan earns. When Jordan says they want to stop, the person threatens to share private information about them and send them off to work as a pr*stitute.",
        main_question: "What warning sign is most important to recognize in this situation?",
        options: [ 
            "A. Recognize the threats and financial control as warning signs of exploitation and seek help from a trusted person or appropriate support service.",
            "B. Continue working with the person because Jordan initially agreed to the modeling opportunity, and passing this opportunity would be disrespectful and wasteful.",
            "C. Give the person more time to manage the work because they may be trying to help Jordan earn more money. ",
            "D. Keep the situation secret and try to negotiate privately so the person does not become more threatening."
        ], 
        correct:0,
        explanation: `The answer is A<br><br>
<strong>Why is B incorrect?</strong> Continuing to work out of a sense of obligation or respect gives the trafficker total power to escalate the abuse. Traffickers intentionally use blackmail (sharing private information) and extreme threats to make victims feel like they have no choice but to comply, meaning the initial agreement is completely void and illegal.
<br><br>
<strong>Why is C incorrect?</strong> Giving the exploiters more time or assuming they are trying to help ignores the active danger. The fact that they are already withholding earnings and making threats is a definitive sign of criminal exploitation, not a temporary business misunderstanding.
<br><br>
<strong>Why is D incorrect?</strong> Keeping the situation secret and trying to negotiate privately plays directly into the trafficker's hands. Traffickers rely on secrecy and isolation to keep their victims trapped; attempting to handle a dangerous criminal alone prevents Jordan from getting the legal or physical protection needed to escape safely.
`

    },
    { 
        scenario: "Marcus, a 17-year-old, lives with a relative who has been struggling financially. The relative begins making Marcus work long hours at a nearby business and takes all of the money Marcus earns. When Marcus asks when he will be paid, the relative tells him that he owes the family for food and housing and threatens to kick him out if he refuses to work.",
        main_question: "What warning sign is most important to recognize in this situation?",
        options: [ 
            "A. Marcus is working while still in high school, which can be difficult to balance.",
            "B. Marcus should continue working because family members sometimes need to help each other financially.",
            "C. Marcus's relative is using threats and financial control to make him continue working without receiving his earnings.",
            "D. The situation cannot be exploitation because Marcus already knows and trusts the person asking him to work."
        ], 
        correct:2,
        explanation:`The answer is C<br><br>
<strong>Why is A incorrect?</strong> While balancing school and work is hard, focusing only on his schedule completely misses the severe human rights violation occurring. The actual issue is not time management, but forced labor and financial abuse.
<br><br>
<strong>Why is B incorrect?</strong> Family loyalty should never include being forced into unpaid labor through coercion and intimidation. Traffickers frequently use familial relationships and cultural obligations to make a young person feel guilty, but charging a minor a "debt" for basic survival needs like food and shelter is illegal.
<br><br>
<strong>Why is D incorrect?</strong> Knowing and trusting someone does not mean they are incapable of exploitation. In fact, labor trafficking frequently happens within families or close circles because the perpetrator knows they can use the victim's existing love, trust, and dependence as a weapon to keep them compliant.
`

    },
    { 
        scenario: "Alex, a 22-year-old college student, begins dating someone who gradually starts controlling where Alex goes and who they spend time with. Over time, the partner tells Alex that they owe them money for rent and other expenses and says Alex must work to pay the debt. When Alex tries to leave the situation, their partner threatens to take away their access to money and housing.",
        main_question: "What is the most important warning sign in this situation?",
        options: [ 
            "A. The partner is using financial control, threats, and isolation to control Alex.",
            "B. Alex's partner is involved in managing their finances, which can sometimes happen in relationships.",
            "C. Alex does not owe their partner money, but should still do it because their partner said so.",
            "D. Alex should keep the situation private because relationship problems should be handled between partners."
        ], 
        correct:0,
        explanation: ` The answer is A<br><br>
<strong>Why is B incorrect?</strong> Normal financial management in a healthy relationship involves mutual consent and transparency, not forced labor. Downplaying these severe control tactics as simple "money management" ignores the deliberate grooming process used to turn an intimate relationship into a trafficking trap.
<br><br>
<strong>Why is C incorrect?</strong> The "debt" in this scenario is completely made to trap Alex. Traffickers artificially create or inflate financial obligations (like rent or gifts) and use them as psychological leverage to convince the victim that they legally or morally "owe" labor, which is a classic form of debt bondage.
<br><br>
<strong>Why is D incorrect?</strong> Keeping relationship abuse private isolates Alex from a support network, which is exactly what the abuser wants. Reaching out to external resources or trusted individuals is the only reliable way to break the cycle of isolation and safely escape the partner's threats.

`

    },
    { 
        scenario: "Ethan, a 23-year-old, is struggling with a substance dependency and meets someone who offers to help him get access to what he needs. Over time, this person begins demanding that Ethan perform work for them in exchange for continued access. When Ethan tries to stop, the person threatens to cut off the assistance and says Ethan will have to keep working to repay what he 'owes'.",
        main_question: "What is the strongest warning sign in this situation?",
        options: [ 
            "A. Ethan is receiving help from someone while struggling with a dependency.",
            "B. The person is using Ethan’s dependency and a claimed debt to pressure him into continuing the work.",
            "C. Ethan should be concerned because the person is asking him to perform work without clearly explaining the terms of the arrangement.",
            "D. Ethan should continue working until he has repaid everything he owes."
        ], 
        correct:1,
        explanation: `The answer is B<br><br>
<strong>Why is A incorrect?</strong> While struggling with a dependency is a serious challenge, the primary warning sign regarding trafficking is how another person is actively exploiting that medical vulnerability. The helper is not actually providing medical or compassionate care; they are using a substance as a weapon of control.
<br><br>
<strong>Why is C incorrect?</strong> The lack of a clear job description is a minor detail compared to the active coercion taking place. The core danger is not that the job terms are vague, but that Ethan is being forced into labor through the manipulation of his dependency and a fake debt.
<br><br>
<strong>Why is D incorrect?</strong> Ethan does not legally or morally owe anything. Traffickers purposefully target individuals dealing with substance use dependencies because they can use the threat of withdrawal or exposure to force compliance, and continuing to work will only trap Ethan further.
`

    }
]

const questionNumber = document.getElementById("question_number");
const scenario = document.getElementById("scenario");
const answerChoices = document.getElementById("answer_choices");
const resultsPage = document.getElementById("results_page");
const resultsText = document .getElementById("results_text");
let currentQuestion=0;
let userAnswers = [];

function displayQuestion() {
    const current = questions[currentQuestion];
    questionNumber.textContent = "Question " + (currentQuestion + 1);
    scenario.textContent = current.scenario;
    answerChoices.innerHTML = "";
    mainQuestion.textContent = current.main_question;

   
    current.options.forEach(function(option, index) {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function() {
            const allButtons = answerChoices.querySelectorAll("button");
            
            allButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");
            userAnswers[currentQuestion] = index;
        });
        answerChoices.appendChild(button);
    });
} 
function calculateScore() {
    let score = 0;
    for (let i = 0; i< questions.length; i++) {
        if (questions[i].correct === userAnswers[i]) {
            score++;  
        }
        
    } 
    return score;
}

function displayResults() {
    const score = calculateScore(); 
    resultsText.textContent = score + " / " + questions.length;

    const questionResults = document.getElementById("question_results");

    questionResults.innerHTML = "";

    for(let i = 0; i<questions.length; i++) {
            questionResults.innerHTML += 
            "<h3>Question : " + (i + 1) + "</h3>" +
            "<p>" + questions[i].explanation + "</p>";
    }
}

displayResults();

