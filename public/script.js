document.addEventListener('DOMContentLoaded', () => {

    const searchBar = document.getElementById('search-bar');
    const rulesList = document.getElementById('rules-list');
    
    function displayRules(rules) {
        const htmlString = rules.map((rule, index) => {
            const example = examples[rule.id];
            const hasExample = example !== undefined;
            const exampleButton = hasExample ? `<button class="example-button" id="example-button-${index}">Example</button>` : '';
            const exampleContent = hasExample ? `
                <div class="example-content" id="example-${index}" style="display: none;">
                    <img src="${example.imgUrl}" alt="Example for ${rule.id}" style="max-width: 100%; height: auto;">
                    <p>${example.text}</p>
                </div>` : '';
    
            return `
                <li id="rule-${index}" class="rule-item">
                    <div class="rule-text">
                        <span class="severity-indicator ${rule.severity}"></span>
                        ${rule.id}: ${convertLinks(rule.rule)}
                    </div>
                    <div class="punishment-content">${rule.punishment}</div>
                    ${exampleButton}
                    ${exampleContent}
                </li>
            `;
        }).join('');
    
        rulesList.innerHTML = htmlString;

        rules.forEach((rule, index) => {
            if(examples[rule.id]) {
                document.getElementById(`example-button-${index}`).addEventListener('click', () => {
                    const exampleElement = document.getElementById(`example-${index}`);
                    exampleElement.style.display = exampleElement.style.display === 'none' ? 'block' : 'none';
                });
            }
        });

        document.querySelectorAll('.example-content img').forEach(img => {
            img.addEventListener('click', () => {
                const modal = document.getElementById('imageModal');
                const modalImg = document.getElementById('modalImg');
                const caption = document.getElementById('caption');
                modal.style.display = "block";
                modalImg.src = img.src;
                caption.textContent = img.alt;
            });
        });
    }

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('imageModal').style.display = "none";
    });

    function convertLinks(text) {
        const urlRegex = /(\s|^)(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (match, space, url) => {
            return `${space === ' ' ? '<br>' : space}<a href="${url}" target="_blank">${url}</a>`;
        });
    }

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredRules = rules.filter((rule) => {
            return (
                rule.rule.toLowerCase().includes(searchString) || 
                rule.id.toLowerCase().includes(searchString) ||
                rule.punishment.toLowerCase().includes(searchString) ||
                searchString.includes(rule.severity)
            );
        });
        displayRules(filteredRules);
    });

    displayRules(rules); // Display all rules initially
});

