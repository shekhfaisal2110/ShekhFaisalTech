document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("projectContainer");
    const paginationContainer = document.querySelector(".pagination");

    const projects = [
        [
            { img1: "./img/carMarketHub1.png", img2: "./img/carMarketHub2.png", img3: "./img/carMarketHub3.png", title: "🚗 CarMarketHub – Your Ultimate Car Buying & Selling Platform", link: "https://shekhfaisal2110.github.io/CarMarketHub/" },
            { img1: "./img/AudioQuran1.png", img2: "./img/AudioQuran2.png", img3: "./img/AudioQuran3.png", title: "📖 Audio Quran Pak – Listen to the Holy Quran Anytime, Anywhere", link: "https://audioquranpak.netlify.app/" },
            { img1: "./img/OnlineHTML, CSS&JSEditor1.png", img2: "./img/OnlineHTML, CSS&JSEditor2.png",img3: "./img/OnlineHTML, CSS&JSEditor3.png",title: "📝 Online HTML, CSS & JS Editor – Code & Preview Instantly", link: "https://shekhfaisal2110.github.io/html_css_js_editor/" }
        ],
        [
            { img1: "./img/smartCampus1.png", img2: "./img/smartCampus2.png", img3: "./img/smartCampus3.png", title: "🏫 SmartCampus – Your Digital Campus Companion", link: "https://shekhfaisal2110.github.io/SmartCampus/" },
            { img1: "./img/WeatherApp1.png", img2: "./img/WeatherApp2.png", img3: "./img/WeatherApp3.png", title: "🌦 WeatherApp – Real-Time Forecast at Your Fingertips", link: "https://shekhfaisal2110.github.io/weatherApp/" },
            { img1: "./img/snackGame1.png", img2: "./img/snackGame2.png", img3: "./img/snackGame3.png", title: "🐍 Classic Snake Game – Retro Fun Reimagined", link: "https://shekhfaisal2110.github.io/SnakeGmae/" }
        ],
        [
            { img1: "./img/EraseBG1.png", img2: "./img/EraseBG2.png", img3: "./img/EraseBG3.png", title: "🖼️ EraseBG – Instant Background Remover", link: "https://shekhfaisal2110.github.io/erase_bg/" },
            { img1: "./img/loveCal1.png", img2: "./img/loveCal2.png", img3: "./img/loveCal3.png", title: "❤️ Love Calculator – Find Your Compatibility!", link: "https://shekhfaisal2110.github.io/LoveCalculater/" },
            { img1: "./img/burgerHub1.png", img2: "./img/burgerHub2.png", img3: "./img/burgerHub3.png", title: "🍔 Burger Hub – Satisfy Your Cravings!", link: "https://shekhfaisal2110.github.io/Burger_Hub/" }
        ],
        [
            { img1: "./img/todoList1.png", img2: "./img/todoList2.png", img3: "./img/todoList3.png", title: "📝 To-Do List – Stay Organized, Stay Productive!", link: "https://shekhfaisal2110.github.io/ToDoList/" },
            { img1: "./img/ImageSearchHub1.png", img2: "./img/ImageSearchHub2.png", img3: "./img/ImageSearchHub3.png", title: "🔍 Image Search Hub – Find & Explore Stunning Images!", link: "https://shekhfaisal2110.github.io/Image_Search_app/" },
            { img1: "./img/LinguaFlow1.png", img2: "./img/LinguaFlow2.png", img3: "./img/LinguaFlow3.png", title: "🌍 LinguaFlow – Instant Language Translator", link: "https://shekhfaisal2110.github.io/language_translator/" }
        ],
        [
            { img1: "./img/burgerHub1.png", img2: "./img/burgerHub2.png", img3: "./img/burgerHub3.png", title: "🍔 Berger Hub - Ultimate Burger Ordering Experience", link: "https://shekhfaisal2110.github.io/BergerHub/" },
            { img1: "./img/AIImageGenerator1.png", img2: "./img/AIImageGenerator2.png", img3: "./img/AIImageGenerator3.png", title: "🎨 AI Image Generator - Create Stunning Visuals with AI", link: "https://shekhfaisal2110.github.io/image-generation-ai/" },
            { img1: "./img/RecipeHub1.png", img2: "./img/RecipeHub2.png", img3: "./img/RecipeHub3.png", title: "🍽️ Recipe Hub - Discover & Cook Delicious Meals", link: "https://shekhfaisal2110.github.io/Recipe/" }
        ],
        [
            { img1: "./img/AnimateJS1.png", img2: "./img/AnimateJS2.png", img3: "./img/AnimateJS3.png", title: "🎭 AnimateJS - Smooth & Stunning Web Animations", link: "https://shekhfaisal2110.github.io/AnimateJS/" },
            { img1: "./img/RandomJokes1.png", img2: "./img/RandomJokes2.png", img3: "./img/RandomJokes3.png", title: "😂 Random Jokes - Laugh Anytime!", link: "https://shekhfaisal2110.github.io/Rendom_Jokes/" },
            { img1: "./img/StonePaperScissors1.png", img2: "./img/StonePaperScissors2.png", img3: "./img/StonePaperScissors3.png", title: "✊📝✂️ Stone Paper Scissors - Classic Game", link: "https://shekhfaisal2110.github.io/Stone_Paper_Scissors/" }
        ],
        [
            { img1: "./img/UniversalTravels1.png", img2: "./img/Universal Travels2.png", img3: "./img/Universal Travels3.png", title: "✈️🌍 Universal Travels - Explore the World", link: "https://shekhfaisal2110.github.io/UniversalTravels/" },
            { img1: "./img/Tic-Tac-Toe1.png", img2: "./img/Tic-Tac-Toe2.png", img3: "./img/Tic-Tac-Toe3.png", title: "🎮 Tic-Tac-Toe Master", link: "https://shekhfaisal2110.github.io/Tik_Tak_Toe/" },
            { img1: "./img/Floristly.png", img2: "./img/Floristly2.png", img3: "./img/Floristly3.png", title: "🌸 Floristly - Bloom & Beauty", link: "https://shekhfaisal2110.github.io/Floristly/" }
        ],
    ];
    

    let currentPage = 0;
    const totalPages = projects.length;
    const visiblePages = 3; 

    function updateProjects(pageIndex) {
        if (pageIndex < 0 || pageIndex >= totalPages) return;

        // Clear and update project cards
        projectContainer.innerHTML = "";
        projects[pageIndex].forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
                <img src="${project.img1}" alt="${project.title}">
                <img src="${project.img2}" alt="${project.title}">
                <img src="${project.img3}" alt="${project.title}">
                <h3>${project.title}</h3>
                <a href="${project.link}" class="project-link" target="_blank" onclick="buttonClickEffect(event)">Visit Website</a>
            `;
            projectContainer.appendChild(projectCard);
        });

        // Update pagination
        generatePagination(pageIndex);

        currentPage = pageIndex;
    }

    function generatePagination(activePage) {
        paginationContainer.innerHTML = "";

        // Left button
        const prevButton = document.createElement("button");
        prevButton.innerHTML = "◀";
        prevButton.onclick = () => updateProjects(currentPage - 1);
        prevButton.disabled = activePage === 0;
        paginationContainer.appendChild(prevButton);

        // Calculate the range of visible pages
        let startPage = Math.max(0, activePage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages);

        if (endPage - startPage < visiblePages) {
            startPage = Math.max(0, endPage - visiblePages);
        }

        // Create page buttons
        for (let i = startPage; i < endPage; i++) {
            createPageButton(i, activePage);
        }

        // Right button
        const nextButton = document.createElement("button");
        nextButton.innerHTML = "▶";
        nextButton.onclick = () => updateProjects(currentPage + 1);
        nextButton.disabled = activePage === totalPages - 1;
        paginationContainer.appendChild(nextButton);
    }

    function createPageButton(pageIndex, activePage) {
        const pageButton = document.createElement("button");
        pageButton.textContent = pageIndex + 1;
        pageButton.classList.toggle("active", pageIndex === activePage);
        pageButton.onclick = () => updateProjects(pageIndex);
        paginationContainer.appendChild(pageButton);
    }

    // Load first page
    updateProjects(0);
});


function buttonClickEffect(event) {
    let button = event.target;
    // Add Bounce Animation
    button.style.animation = "bounceEffect 0.4s ease";
    // Add Glowing Effect
    button.style.animation = "glowEffect 1s infinite alternate";
    setTimeout(() => {
        button.style.animation = "";
    }, 400);
}


document.addEventListener("DOMContentLoaded", function () {
    // Create the modal dynamically
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img id="modal-image" src="" alt="Project Image">
            <button class="nav-btn prev-btn">◀</button>
            <button class="nav-btn next-btn">▶</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Select elements inside the modal
    const modalImage = document.getElementById("modal-image");
    const closeButton = modal.querySelector(".close-btn");
    const prevButton = modal.querySelector(".prev-btn");
    const nextButton = modal.querySelector(".next-btn");

    let currentImages = []; // Stores images of the selected project
    let currentIndex = 0; // Tracks current image index

    // Function to show image in modal
    function showImage(index) {
        if (index >= 0 && index < currentImages.length) {
            modalImage.src = currentImages[index];
            currentIndex = index;

            // Show or hide navigation buttons based on number of images
            prevButton.style.display = currentIndex === 0 ? "none" : "block";
            nextButton.style.display = currentIndex === currentImages.length - 1 ? "none" : "block";
        }
    }

    // Event listener for all project images
    document.addEventListener("click", function (event) {
        if (event.target.closest(".project-card img")) {
            const projectCard = event.target.closest(".project-card");

            if (!projectCard) return;

            // Collect all images from the clicked project
            const images = projectCard.querySelectorAll("img");
            currentImages = Array.from(images).map(img => img.src).filter(src => src);

            if (currentImages.length === 0) return; // No images found

            showImage(0); // Show the first image
            modal.style.display = "flex"; // Show the modal
            setTimeout(() => modal.classList.add("show"), 10);
        }
    });

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < currentImages.length - 1) showImage(currentIndex + 1);
    });

    // Close modal on close button click
    closeButton.addEventListener("click", () => {
        closeModal();
    });

    // Close modal when clicking outside the content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Function to close the modal
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            modalImage.src = ""; // Reset image source
        }, 300);
    }
});
