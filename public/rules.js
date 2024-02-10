const rules = [
    { id: "A1", rule: "Follow Discord TOS, Terms of Service and Guidelines", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "A1-1", rule: "DM advertising any external Discord Server, paid service, or for commissions is prohibited", punishment: "Immediate ban with little chance of appeal", severity: "red" },
    { id: "A2", rule: "Follow all HoYoverse TOS", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "A2-1", rule: "Clarification: Discussion of leaks are ALLOWED, but make sure to use spoilers", punishment: "N/A", severity: "green" },
    { id: "A3", rule: "The mention/discussion of breaking said either Genshin or Discord TOS (including, but not limited to, selling Genshin Impact accounts, Discord Tokens, etc.) is also prohibited", punishment: "User will be flagged with possible mute", severity: "orange" },
    { id: "B1", rule: "You are not allowed to spam, flood, or send random messages in any channel with the exception of Mudae-related channels & bot commands", punishment: "User will be flagged with possible mute", severity: "green" },
    { id: "B2", rule: "You are not allowed to send any content containing pictures of nudity, sex, pornography, anything that is 'see-through'", punishment: "User will be muted for an extended time. Ban with low chance of appeal is possible", severity: "red" },
    { id: "B3", rule: "Vulgar or violent content (including, but not limited to, self-harm, torture, and death penalties) is prohibited", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "B4", rule: "Do not use NSFW words, phrases, images, gifs or any content strongly used in a sentence. This also extends to profile pictures, bio, emojis etc", punishment: "User will be flagged with possible mute", severity: "orange" },
    { id: "B5", rule: "Discussion about past tragic historical/political events is prohibited", punishment: "User will be flagged with possible mute", severity: "orange" },
    { id: "B6", rule: "Baiting or sending racial slurs and other 'bad slangs' is prohibited", punishment: "Immediate ban with little chance of appeal", severity: "red" },
    { id: "B7", rule: "Visually resembling minors in an erotic setting is strictly prohibited", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "B8", rule: "Do not attempt to bypass our filters", punishment: "Immediate ban with little chance of appeal", severity: "orange" },
    { id: "B9", rule: "Do not incite conflicts between members of the server", punishment: "User will be flagged with possible mute", severity: "orange" },
    { id: "B10", rule: "Do not indulge in acts of pedophilia", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "B11", rule: "The use of macros, automated scripts, or any form of automation for economic gain/benefit is prohibited", punishment: "User may be muted and given a fine", severity: "green" },
    { id: "C1", rule: "Treat all members with respect and dignity. Avoid insults, belittling comments, and aggressive behavior.", punishment: "User may be muted", severity: "orange" },
    { id: "C2", rule: "Refrain from any language that demeans, harasses, or discriminates against individuals based on race, ethnicity, gender identity, sexual orientation, religion, age, disability, or any other characteristic.", punishment: "User may be muted and given a fine", severity: "red" },
    { id: "C3", rule: "Maintain a polite discourse, even in disagreements. No shouting (all caps), excessive swearing, or provocations.", punishment: "User may be muted", severity: "orange" },
    { id: "C4", rule: "Be open to differing views without resorting to personal attacks or dismissive language.", punishment: "User may be muted", severity: "green" },
    { id: "C5", rule: "Joking or suggesting self-harm in any context is strictly forbidden.", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "D1", rule: "Please keep serious channels serious. This includes Appreciations and Suggestions", punishment: "User will be given a 100 Coin fine", severity: "green" },
    { id: "D2", rule: "Please keep bot commands in the appropriate bot commands channel(s)", punishment: "User may be given a fine", severity: "green" },
    { id: "E1", rule: "Doxxing is strictly prohibited - Revealing any private personal information about members without their explicit consent, including but not limited to, real names, addresses, phone numbers, or any other sensitive data, is forbidden", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "E2", rule: "Guilt Tripping is prohibited - Manipulating or coercing others by making them feel guilty to gain attention, favors, or validation is not allowed", punishment: "User will be put on investigation, and will be muted until concluded", severity: "orange" },
    { id: "E3", rule: "Blackmailing is strictly prohibited - Threatening to reveal personal information or exert pressure on someone to act against their will or in a manner that benefits the blackmailer is forbidden", punishment: "User will be put on investigation, and will be muted until concluded", severity: "red" },
    { id: "E4", rule: "Posting content that is INTENTIONALLY designed to trigger phobias, such as images, videos, or texts related to common phobias, without a clear warning and in non-designated areas, is not allowed", punishment: "Possible mute or ban depending on severity", severity: "orange" },
    { id: "F1", rule: "Sending DMs to advertise server content, such as collectables, cards, and other economy related things are not allowed", punishment: "User will be fined up to 500 Coins, and wallet may be locked", severity: "orange" },
    { id: "F2", rule: "Exploting a bug for economic gain is strictly prohibited", punishment: "Investigation. If found guilty, user will be banned with no chance of appeal", severity: "red" },
    { id: "G1", rule: "You may not ban evade", punishment: "Immediate ban with no chance of appeal", severity: "red" },
    { id: "G2", rule: "You may not have an ALT or use them in any way", punishment: "The ALT will be immediately banned with no chance of appeal. Repeat offences may result in the main account being banned too with little chance of appeal.", severity: "orange" },
];