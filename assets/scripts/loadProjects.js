function storeLocal() {
    const awsProject = {
        imgsrc: "assets/images/awslambda.svg",
        imgalt: "AWS Lambda Logo",
        imgid: "lambda-logo",
        headertext: "AWS Live-Site Operations Tool",
        description: `For my intern project at AWS, I built a live-site operations tool to aid on call developers in 
        root cause analysis. It allowed for the user to put a ticket ID into the tool, and it would automatically retrieve 
        recent related deployments. It also allowed for the data found by the tool to be added to the 
        comments of the ticket for ease of access. (Can't show picture of tool due to confidentiality.)`,
        linktext: "Click here to read more about the work my team does!",
        href: "https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html"
    };

    const pantryPalProject = {
        imgsrc: "assets/images/pantrypal.png",
        imgalt: "PantryPal home screen with different color themes",
        imgid: "pantrypal",
        headertext: "PantryPal",
        description: `PantryPal is an AI recipe generation app written in Java that used ChatGPT's API, Whisper API, and MongoDB. It allows the 
        user to input the type of meal they want and their available ingredients, and have a list of recipes generated only requiring 
        the given ingredients.`,
        linktext: "Click here to visit the GitHub page for the project.",
        href: "https://github.com/ucsd-cse110-fa23/cse-110-project-team-42"
    };

    localStorage.setItem("awsProject", JSON.stringify(awsProject));
    localStorage.setItem("pantryPalProject", JSON.stringify(pantryPalProject));
}

function loadLocal() {
    const awsProjectObject = localStorage.getItem("awsProject");
    const pantryPalProjectObject = localStorage.getItem("pantryPalProject");

    const awsProject = JSON.parse(awsProjectObject);
    const pantryPalProject = JSON.parse(pantryPalProjectObject);

    const awsProjectCard = document.getElementById("aws-project");
    const pantryPalProjectCard = document.getElementById("pantrypal-project");

    awsProjectCard.setAttribute("img-src", awsProject.imgsrc);
    awsProjectCard.setAttribute("img-alt", awsProject.imgalt);
    awsProjectCard.setAttribute("img-id", awsProject.imgid);
    awsProjectCard.setAttribute("header-text", awsProject.headertext);
    awsProjectCard.setAttribute("description", awsProject.description);
    awsProjectCard.setAttribute("link-text", awsProject.linktext);
    awsProjectCard.setAttribute("href", awsProject.href);

    pantryPalProjectCard.setAttribute("img-src", pantryPalProject.imgsrc);
    pantryPalProjectCard.setAttribute("img-alt", pantryPalProject.imgalt);
    pantryPalProjectCard.setAttribute("img-id", pantryPalProject.imgid);
    pantryPalProjectCard.setAttribute("header-text", pantryPalProject.headertext);
    pantryPalProjectCard.setAttribute("description", pantryPalProject.description);
    pantryPalProjectCard.setAttribute("link-text", pantryPalProject.linktext);
    pantryPalProjectCard.setAttribute("href", pantryPalProject.href);
}

function loadRemote() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(req.responseText);

            const awsProject = response.record.cards["aws-project"];
            const pantryPalProject = response.record.cards["pantrypal-project"];

            const awsProjectCard = document.getElementById("aws-project");
            const pantryPalProjectCard = document.getElementById("pantrypal-project");

            awsProjectCard.setAttribute("img-src", awsProject.imgsrc);
            awsProjectCard.setAttribute("img-alt", awsProject.imgalt);
            awsProjectCard.setAttribute("img-id", awsProject.imgid);
            awsProjectCard.setAttribute("header-text", awsProject.headertext);
            awsProjectCard.setAttribute("description", awsProject.description);
            awsProjectCard.setAttribute("link-text", awsProject.linktext);
            awsProjectCard.setAttribute("href", awsProject.href);

            pantryPalProjectCard.setAttribute("img-src", pantryPalProject.imgsrc);
            pantryPalProjectCard.setAttribute("img-alt", pantryPalProject.imgalt);
            pantryPalProjectCard.setAttribute("img-id", pantryPalProject.imgid);
            pantryPalProjectCard.setAttribute("header-text", pantryPalProject.headertext);
            pantryPalProjectCard.setAttribute("description", pantryPalProject.description);
            pantryPalProjectCard.setAttribute("link-text", pantryPalProject.linktext);
            pantryPalProjectCard.setAttribute("href", pantryPalProject.href);
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/67d72b868561e97a50ed3e86/latest", true);
    req.setRequestHeader("X-Access-Key", "$2a$10$Cd/v1ynpCedIYG2hzMlSr.7ORuXA8rJeTl0qNP7fbf3jBqyAiaOGC");
    req.send();
}

storeLocal();