document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const rulesList = document.getElementById('rules-list');

    function convertLinks(text) {
        // Adjusted regex to capture URLs
        const urlRegex = /(\s|^)(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (match, space, url) => {
            // Adds a line break before each URL except the first in a sequence
            return `${space === ' ' ? '<br>' : space}<a href="${url}" target="_blank">${url}</a>`;
        });
    }

    function displayRules(rules) {
        const htmlString = rules.map((rule, index) => {
            const exampleText = examples[rule.id] ? examples[rule.id] : '';
            const exampleButton = exampleText ? `<button class="example-button" id="example-button-${index}">Example</button>` : '';
            const exampleContent = exampleText ? `<div class="example-content" id="example-${index}" style="display: none;">${exampleText}</div>` : '';
    
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
