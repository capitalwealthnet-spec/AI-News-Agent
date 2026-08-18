const stories = [
    {
        title: "Global markets watch inflation and interest rates",
        summary: "Markets are watching economic data and central-bank decisions as investors assess global growth."
    },

    {
        title: "Artificial intelligence continues to reshape technology",
        summary: "AI development is moving rapidly into consumer products, business software and everyday applications."
    },

    {
        title: "Businesses focus on resilience and efficiency",
        summary: "Companies are reviewing supply chains, operating costs and technology investments."
    },

    {
        title: "Science continues to produce major breakthroughs",
        summary: "Researchers are pursuing advances in computing, energy, medicine and environmental technology."
    },

    {
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

    stories.forEach((story, index) => {

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
