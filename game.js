// As we are not using any API, we will create an array for each money point and the array will have a set of random questions.
const q1set = [
    {
        question: "Complete the following sentence - 'An empty mind is a ___ workshop'.",
        a: "Carpentar's",
        b: "Dancer's",
        c: "Devil's",
        d: "Architect's",
        correct: "Devil's"
    },
    {
        question: "Which of these is the name of a device as well as an animal?",
        a: "Mouse",
        b: "Diver",
        c: "Python",
        d: "Monitor",
        correct: "Mouse"
    },
    {
        question: "What is the phenomenon of removal of the top layer of the soil under the effect of some physical forces called?",
        a: "Photosynthesis",
        b: "Osmosis",
        c: "Soil Erosion",
        d: "Soil emultion",
        correct: "Soil Erosion"
    },
    {
        question: "Which day is celebrated as Pi day every year?",
        a: "February 28",
        b: "July 5",
        c: "September 3",
        d: "March 14",
        correct: "March 14"
    },
    {
        question: "What is a figure with 4 sides called?",
        a: "Octagon",
        b: "Fourier",
        c: "Quadrilateral",
        d: "Quadratetral",
        correct: "Quadrilateral"
    },
];
const q2set = [
    {
        question: "What is the full-form of the K-pop band BTS?",
        a: "Bangwools",
        b: "Bangtan Sonyeondan",
        c: "Best Turbo Scouts",
        d: "None of the above",
        correct: "Bangtan Sonyeondan"
    },
    {
        question: "What was the old name of HYBE?",
        a: "JinHit Entertainment",
        b: "BigHit Entertainment",
        c: "JYP",
        d: "Cube Entertainment",
        correct: "BigHit Entertainment"
    },
    {
        question: "The Anti-Corruption Unit from 'Bad and Crazy' was based in which of the following?",
        a: "Munyang",
        b: "Seoul",
        c: "Busan",
        d: "Incheon",
        correct: "Munyang"
    },
    {
        question: "Galaxy x BTS: Over the Horizon was produced by which of the following BTS member? ",
        a: "RM",
        b: "SUGA",
        c: "V",
        d: "JHope",
        correct: "SUGA"
    },
    {
        question: "Who is the first Indian K-pop idol?",
        a: "Aria",
        b: "Siddhant Arora",
        c: "Priyanka Mazumdar",
        d: "Sriya Lenka",
        correct: "Sriya Lenka"
    },
];
const q3set = [
    {
        // question is the key.
        question: "Which country hosted the 2021 United Nations Climate Change Conference (COP26)?",
        a: "France",
        b: "Germany",
        c: "United States",
        d: "United Kingdom",
        correct: "United Kingdom"
    },
    {
        question: "Who is the current Secretary-General of the United Nations as of 2023?",
        a: "Angela Merkel",
        b: "António Guterres",
        c: "Xi Jinping",
        d: "Emmanuel Macron",
        correct: "António Guterres"
    },
    {
        question: "In 2021, which company's founder briefly became the world's richest person, surpassing Elon Musk?",
        a: "Apple",
        b: "Amazon",
        c: "Microsoft",
        d: "Google",
        correct: "Amazon"
    },
    {
        question: "Which country won the most gold medals in the Tokyo 2020 Summer Olympics?",
        a: "United States",
        b: "China",
        c: "Japan",
        d: "Russia",
        correct: "China"
    },
    {
        question: "What major event took place in 2021, involving a large container ship blocking the Suez Canal?",
        a: "Suez Standoff",
        b: "Suez Crisis",
        c: "Ever Given Incident",
        d: "Canal Blockade",
        correct: "Ever Given Incident"
    },
];
const q4set = [
    {
        question: "Who among these is not a brother of Shri Ram?",
        a: "Laksman",
        b: "Bharath",
        c: "Yudhishthir",
        d: "Shatrughna",
        correct: "Yudhishthir"
    },
    {
        question: "Which among these is not a name of Mata Draupadi?",
        a: "Krishnaa",
        b: "Yajnaseni",
        c: "Panchali",
        d: "Revati",
        correct: "Revati"
    },
    {
        question: "The form where Lord Shiva appears as a cosmic dancer is called?",
        a: "Gopeshwar",
        b: "Nataraj",
        c: "Maheshwar",
        d: "Vishwanath",
        correct: "Nataraj"
    },
    {
        question: "What is the ancient surgical science also known as?",
        a: "Shalya Tantra",
        b: "Pancha Tantra",
        c: "Pancha Tatva",
        d: "Ayurved",
        correct: "Shalya Tantra"
    },
    {
        question: "In which of these colleges in Austratia is a statue of Maharishi Sushruta, the author of Sushruta Samhita installed?",
        a: "Monash University, Melbourne",
        b: "The University of Sydney, Sydney",
        c: "The Royal Australian College of Surgeons (RACS), Melbourne, Australia",
        d: "Australian National University, Canberra",
        correct: "The Royal Australian College of Surgeons (RACS), Melbourne, Australia"
    },
];
const q5set = [
    {
        question: "What is the value of π (pi) to two decimal places?",
        a: "3.14",
        b: "3.16",
        c: "3.18",
        d: "3.12",
        correct: "3.14"
    },
    {
        question: "Which mathematician is credited with the discovery of calculus?",
        a: "Isaac Newton",
        b: "Euclid",
        c: "Pythagoras",
        d: "Archimedes",
        correct: "Isaac Newton"
    },
    {
        question: "What is the sum of the angles in a triangle?",
        a: "90 degrees",
        b: "180 degrees",
        c: "270 degrees",
        d: "360 degrees",
        correct: "180 degrees"
    },
    {
        question: "In algebra, what does 'x' typically represent in a mathematical expression?",
        a: "Variable",
        b: "Constant",
        c: "Exponent",
        d: "Coefficient",
        correct: "Variable"
    },
    {
        question: "What is the square root of 144?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "12"
    },
];
const q6set = [
    {
        question: "What does HTML stand for in the context of web development?",
        a: "Hyper Transfer Markup Language",
        b: "Hyper Text Markup Language",
        c: "High-Level Text Markup Language",
        d: "Home Tool Markup Language",
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is commonly used for building dynamic and interactive websites?",
        a: "HTML",
        b: "JavaScript",
        c: "CSS",
        d: "Python",
        correct: "JavaScript"
    },
    {
        question: "In programming, what does the acronym 'API' stand for?",
        a: "Advanced Programming Interface",
        b: "Application Programming Interface",
        c: "Automated Process Integration",
        d: "Advanced Protocol Interaction",
        correct: "Application Programming Interface"
    },
    {
        question: "Which of the following is a popular version control system used in software development?",
        a: "SVN (Subversion)",
        b: "FTP (File Transfer Protocol)",
        c: "HTTP (Hypertext Transfer Protocol)",
        d: "DNS (Domain Name System)",
        correct: "SVN (Subversion)"
    },
    {
        question: "In Java, what keyword is used to indicate that a method does not return any value?",
        a: "void",
        b: "null",
        c: "empty",
        d: "none",
        correct: "void"
    },
];
const q7set = [
    {
        question: "Who was the first Emperor of the Maurya Dynasty in ancient India?",
        a: "Chandragupta Maurya",
        b: "Ashoka the Great",
        c: "Bindusara",
        d: "Chanakya",
        correct: "Chandragupta Maurya"
    },
    {
        question: "The Indus Valley Civilization was primarily centered around which modern-day region?",
        a: "Rajasthan",
        b: "Punjab",
        c: "Gujarat",
        d: "Haryana",
        correct: "Punjab"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        a: "Indira Gandhi",
        b: "Sonia Gandhi",
        c: "Vijaya Lakshmi Pandit",
        d: "Sarojini Naidu",
        correct: "Indira Gandhi"
    },
    {
        question: "The Battle of Plassey in 1757 was a significant event during which historical period in India?",
        a: "Mughal Empire",
        b: "Gupta Empire",
        c: "Vijayanagara Empire",
        d: "British East India Company rule",
        correct: "British East India Company rule"
    },
    {
        question: " The Quit India Movement, a significant event in India's struggle for independence, took place in which year?",
        a: "1942",
        b: "1930",
        c: "1947",
        d: "1920",
        correct: "1942"
    },
];
const q8set = [
    {
        question: "Who is often referred to as the 'God of Cricket' in India?",
        a: "Virender Sehwag",
        b: "Sachin Tendulkar",
        c: "Virat Kohli",
        d: "Kapil Dev",
        correct: "Sachin Tendulkar"
    },
    {
        question: " In which sport did P.V. Sindhu win a silver medal at the 2016 Summer Olympics, becoming the first Indian woman to achieve this feat?",
        a: "Badminton",
        b: "Wrestling",
        c: "Boxing",
        d: "Shooting",
        correct: "Badminton"
    },
    {
        question: "Who is the first Indian woman to win a gold medal at the Olympic Games?",
        a: "Saina Nehwal",
        b: "Mary Kom",
        c: "Karnam Malleswari",
        d: "Sakshi Malik",
        correct: "Karnam Malleswari"
    },
    {
        question: "In which sport did Milkha Singh, also known as the 'Flying Sikh', achieve fame?",
        a: "Hockey",
        b: "Cricket",
        c: "Athletics",
        d: "Wrestling",
        correct: "Athletics"
    },
    {
        question: "Which Indian cricketer is known for being the captain of the Indian national team that won the inaugural ICC T20 World Cup in 2007?",
        a: "Rahul Dravid",
        b: "Anil Kumble",
        c: "Sourav Ganguly",
        d: "Mahendra Singh Dhoni",
        correct: "Mahendra Singh Dhoni"
    },
];
const q9set = [
    {
        question: "The city of Timbuktu, known for its historic role as a center of trade and learning, is located in which African country?",
        a: "Mali",
        b: "Niger",
        c: "Chad",
        d: "Burkina Faso",
        correct: "Mali"
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Brisbane",
        correct: "Canberra"
    },
    {
        question: "Which mountain range is the longest in the world?",
        a: "Himalayas",
        b: "Andes",
        c: "Alps",
        d: "Rocky Mountains",
        correct: "Andes"
    },
];
const q10set = [
    {
        question: "Who is the author of the famous novel 'The God of Small Things'?",
        a: "Ruskin Bond",
        b: "Arundhati Roy",
        c: "Jhumpa Lahiri",
        d: "Vikram Seth",
        correct: "Arundhati Roy"
    },
    {
        question: "Which Indian poet won the Nobel Prize in Literature in 1913?",
        a: "Rabindranath Tagore",
        b: "Gulzar",
        c: "Sarojini Naidu",
        d: "Harivansh Rai Bachchan",
        correct: "Rabindranath Tagore"
    },
    {
        question: "The novel 'A Suitable Boy' is written by which Indian author?",
        a: "Vikram Seth",
        b: "Salman Rushdie",
        c: "Arundhati Roy",
        d: "Rohinton Mistry",
        correct: "Vikram Seth"
    },

];
const q11set = [
    {
        question: "Who is often referred to as the 'Shakespeare of Marathi Literature'?",
        a: "P. L. Deshpande",
        b: "Vijay Tendulkar",
        c: "Vishnu Sakharam Khandekar",
        d: "Vishnu Vāman Shirwādkar 'Kusumagraj'",
        correct: "Vishnu Vāman Shirwādkar 'Kusumagraj'"
    },
    {
        question: "Which Marathi author is known for the novel 'Mrityunjay', a fictional exploration of the life of Karna from the Mahabharata?",
        a: "P. L. Deshpande",
        b: "V. S. Khandekar",
        c: "Shivaji Sawant",
        d: "Vijay Tendulkar",
        correct: "Shivaji Sawant"
    },
    {
        question: "Who wrote the famous Marathi play 'Natasamrat' (The Emperor of Theatre)?",
        a: "P. L. Deshpande",
        b: "Vijay Tendulkar",
        c: "Vishnu Sakharam Khandekar",
        d: "Kusumagraj (Vishnu Vaman Shirwadkar)",
        correct: "Kusumagraj (Vishnu Vaman Shirwadkar)"
    },


];
const q12set = [
    {
        question: "On whose advice is the Governor of state appointed by the Pesident?",
        a: "Prime Minister",
        b: "Vice - President",
        c: "Chif Minister",
        d: "Chief Justice",
        correct: "Prime Minister"
    },
    {
        question: "What is the total number of members nominated by the President to the Lok Sabha and the Rajya Sabha?",
        a: "16",
        b: "18",
        c: "14",
        d: "12",
        correct: "14"
    },
    {
        question: "The first woman Governor of a state in free India was",
        a: "Mrs. Indira Gandhi",
        b: "Mrs. Vijaya Laxmi Pandit",
        c: "Mrs. Sarojini Naidu",
        d: "Mrs. Sucheta Kripalani",
        correct: "Mrs. Sarojini Naidu"
    },
];
const q13set = [
    {
        question: "What is the capital city of Bhutan?",
        a: "Thimphu",
        b: "Kathmandu",
        c: "Ulaanbaatar",
        d: "Dili",
        correct: "Thimphu"
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        a: "Silver",
        b: "Gold",
        c: "Platinum",
        d: "Iron",
        correct: "Gold"
    },
    {
        question: "In which year did the Berlin Wall fall, leading to the reunification of Germany?",
        a: "1989",
        b: "1991",
        c: "1985",
        d: "1993",
        correct: "1989"
    },
];
const q14set = [
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Giraffe",
        c: "Blue Whale",
        d: "Polar Bear",
        correct: "Blue Whale"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "William Wordsworth",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Charles Dickens",
        correct: "William Shakespeare"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "Mars"
    },
];
const q15set = [
    {
        question: "What is the currency of Switzerland?",
        a: "Euro",
        b: "Swiss Franc",
        c: "Peso",
        d: "Krona",
        correct: "Swiss Franc"
    },
    {
        question: "Who was the first woman to win a Nobel Prize, and the only person to win Nobel Prizes in two different scientific fields?",
        a: "Marie Curie",
        b: "Rosalind Franklin",
        c: "Dorothy Crowfoot Hodgkin",
        d: "Barbara McClintock",
        correct: "Marie Curie"
    },
    {
        question: "What is the world's largest ocean?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "Pacific Ocean"
    },
];
const q16set = [
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "Albert Einstein"
    },
    {
        question: "What is the longest river in Africa?",
        a: "Nile",
        b: "Congo",
        c: "Niger",
        d: "Zambezi",
        correct: "Nile"
    },
    {
        question: "Which scientist formulated the laws of motion and universal gravitation?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "Isaac Newton"
    },
];
const q17set = [
    {
        question: "The name of the Laccadive, Minicoy and Amindivi islands was changed to Lakshadweep by an Act of Parliament in",
        a: "1970",
        b: "1971",
        c: "1972",
        d: "1973",
        correct: "1973"
    },
    {
        question: "The number of writs that can be prayed for and issued by the Supreme Court and/or a High Court is",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "5"
    },
];

const progressset = [
    {
        id: 1,
        price: 0,
    },
    {
        id: 2,
        price: 1000,
    },
    {
        id: 3,
        price: 2000,
    },
    {
        id: 4,
        price: 3000,
    },
    {
        id: 5,
        price: 5000,
    },
    {
        id: 6,
        price: 10000,
    },
    {
        id: 7,
        price: 20000,
    },
    {
        id: 8,
        price: 40000,
    },
    {
        id: 9,
        price: 80000,
    },
    {
        id: 10,
        price: 160000,
    },
    {
        id: 11,
        price: 320000,
    },
    {
        id: 12,
        price: 640000,
    },
    {
        id: 13,
        price: 1250000,
    },
    {
        id: 14,
        price: 2500000,
    },
    {
        id: 15,
        price: 5000000,
    },
    {
        id: 16,
        price: 10000000,
    },
    {
        id: 17,
        price: 70000000,
    },
];

const showprogressset = (progressset) => {
    let progressdiv = document.querySelector(".progress")
    let progresssetdivdata = '';

    progressset = progressset.sort((a, b) => b.price - a.price);
    progressset.forEach((item, index) => {
        if (item.price == 10000 || item.price == 320000 || item.price == 70000000) {
            item.price = item.price.toLocaleString();
            progresssetdivdata += `
        <div class="progressin1">Rs. ${item.price}</div>
        `
        }
        else {
            item.price = item.price.toLocaleString();
            progresssetdivdata += `
        <div class="progressin">Rs. ${item.price}</div>
        `
        }
    })
    progressdiv.innerHTML = progresssetdivdata;
}
showprogressset(progressset)

let currentQuestion = 1;
let score = 0;


const question = document.querySelector(".question-container p")
const allanswerscont = document.querySelector(".answer-container")

const setallanswerscont = (randomquestion) =>{
    allanswerscont.innerHTML = `
        <div class="answerin">
                    <div class="hr"></div>
                    <p onclick="selectoption('${randomquestion.a}','${randomquestion.correct}')">
                        <span>A. </span>${randomquestion.a}
                    </p>
                    <div class="hr"></div>
                    <p onclick="selectoption('${randomquestion.b}','${randomquestion.correct}')">
                        <span>B. </span>${randomquestion.b}
                    </p>
                    <div class="hr"></div>
                </div>

                <div class="answerin">
                    <div class="hr"></div>
                    <p onclick="selectoption('${randomquestion.c}','${randomquestion.correct}')">
                        <span>C. </span>${randomquestion.c}
                    </p>
                    <div class="hr"></div>
                    <p onclick="selectoption('${randomquestion.d}','${randomquestion.correct}')">
                        <span>D. </span>${randomquestion.d}
                    </p>
                    <div class="hr"></div>
                </div>
        `
}

const setquestionandanswer = (currentQuestion) => {
    if (currentQuestion == 1) {
        let random = Math.floor(Math.random() * q1set.length)
        let randomquestion = q1set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 2) {
        let random = Math.floor(Math.random() * q2set.length)
        let randomquestion = q2set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    } 
    else if (currentQuestion == 3) {
        let random = Math.floor(Math.random() * q3set.length)
        let randomquestion = q3set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 4) {
        let random = Math.floor(Math.random() * q4set.length)
        let randomquestion = q4set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 5) {
        let random = Math.floor(Math.random() * q5set.length)
        let randomquestion = q5set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 6) {
        let random = Math.floor(Math.random() * q6set.length)
        let randomquestion = q6set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 7) {
        let random = Math.floor(Math.random() * q7set.length)
        let randomquestion = q7set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 8) {
        let random = Math.floor(Math.random() * q8set.length)
        let randomquestion = q8set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 9) {
        let random = Math.floor(Math.random() * q9set.length)
        let randomquestion = q9set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 10) {
        let random = Math.floor(Math.random() * q10set.length)
        let randomquestion = q10set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 11) {
        let random = Math.floor(Math.random() * q11set.length)
        let randomquestion = q11set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 12) {
        let random = Math.floor(Math.random() * q12set.length)
        let randomquestion = q12set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 13) {
        let random = Math.floor(Math.random() * q13set.length)
        let randomquestion = q13set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 14) {
        let random = Math.floor(Math.random() * q14set.length)
        let randomquestion = q14set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 15) {
        let random = Math.floor(Math.random() * q15set.length)
        let randomquestion = q15set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else if (currentQuestion == 16) {
        let random = Math.floor(Math.random() * q16set.length)
        let randomquestion = q16set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
    else{
        let random = Math.floor(Math.random() * q17set.length)
        let randomquestion = q17set[random]
        question.innerHTML = randomquestion.question;
        setallanswerscont(randomquestion)
    }
}
setquestionandanswer(currentQuestion)

const setactivetoprogressitem = (currentQuestion)=>{
    let progresssetdiv = document.querySelector(".progress")
    let progresssetdivdata = progresssetdiv.querySelectorAll("div")
    let progtesssetdivdatalength = progresssetdivdata.length

    progresssetdivdata.forEach((item)=>{
        item.classList.remove("active")
    })

    progresssetdivdata[progtesssetdivdatalength - currentQuestion].classList.add("active")
}
setactivetoprogressitem(currentQuestion)

let timer = document.querySelector(".timer p");
let time = 60;

const tick = new Audio('Audio/tick.mp3'); // music4
const win = new Audio('Audio/win.mp3');

// Start playing background music
tick.loop = true;
tick.play();

const selectoption = (selectedOption, correctAnswer) => {
    // Pause background music when an option is chosen
    tick.pause();

    if (selectedOption === correctAnswer && time > 0) {
        currentQuestion++;
        if (currentQuestion > 17) {
            clearInterval(timerInterval);
            win.play(); // Play win sound for congratulations
            alert("Congratulations.");
            time = 0;
            return;
        }
        setactivetoprogressitem(currentQuestion);
        setquestionandanswer(currentQuestion);
        alert("Correct answer");
        time = 60;

        // Start playing background music for the next question
        tick.currentTime = 0;
        tick.play();
    } else if (time <= 0) {
        alert("Time's up!");
    } else {
        alert("Wrong answer");
    }
};

const timerInterval = setInterval(() => {
    if (time === 0) {
        clearInterval(timerInterval);
        return;
    }
    time--;
    timer.innerHTML = "Time Left: 00:" + time + "s";
}, 1000);