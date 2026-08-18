const stories = [
    {
        category: "global",
        title: "Global markets watch inflation and interest rates",
        summary: "Markets are watching economic data and central-bank decisions as investors assess global growth."
    },

    {
        category: "technology",
        title: "Artificial intelligence continues to reshape technology",
        summary: "AI development is moving rapidly into consumer products, business software and everyday applications."
    },

    {
        category: "business",
        title: "Businesses focus on resilience and efficiency",
        summary: "Companies are reviewing supply chains, operating costs and technology investments."
    },

    {
        category: "science",
        title: "Science continues to produce major breakthroughs",
        summary: "Researchers are pursuing advances in computing, energy, medicine and environmental technology."
    },

    {
        category: "sports",
        title: "Sport remains a major global entertainment industry",
        summary: "Major sporting competitions continue to generate audiences, sponsorships and international media activity."
    }
];


function generateBriefing() {

    const topic = document.getElementById("topic").value;
    const newsContainer = document.getElementById("news");
    const status = document.getElementById("status");

    status.innerText =
        "Generating " + topic + " briefing...";

    newsContainer.innerHTML = "";

    const filteredStories = stories.filter(story => {

        if (topic === "global") {
            return true;
        }

        return story.category === topic;
    });


    filteredStories.forEach((story, index) => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <div class="meta">
                STORY ${index + 1}
            </div>

            <h2>
                ${story.title}
            </h2>

            <div class="summary">
                ${story.summary}
            </div>
        `;

        newsContainer.appendChild(card);

    });


    status.innerText =
        topic.toUpperCase() + " BRIEFING READY";
}



// ==============================
// VOICE CONTROLS
// ==============================

const speakBtn = document.getElementById("speakBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");


// PLAY / LISTEN

speakBtn.onclick = function () {

    const newsContainer = document.getElementById("news");

    const briefingText = newsContainer.innerText.trim();

    if (briefingText === "") {
        alert("Generate a briefing first.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(briefingText);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
};


// PAUSE / RESUME

pauseBtn.onclick = function () {

    if (window.speechSynthesis.paused) {

        window.speechSynthesis.resume();

        pauseBtn.innerText = "⏸ Pause";

    } else if (window.speechSynthesis.speaking) {

        window.speechSynthesis.pause();

        pauseBtn.innerText = "▶️ Resume";
    }

};


// STOP

stopBtn.onclick = function () {

    window.speechSynthesis.cancel();

    pauseBtn.innerText = "⏸ Pause";

};
