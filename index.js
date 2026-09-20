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
        if (userAnswers[currentQuestion] !== undefined) {
            currentQuestion++;
            displayQuestion();
        } else { 
            alert("Please select an answer before proceeding to the next question.");
        }
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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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
        explanation: "..."

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

