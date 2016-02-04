//Section Bio
var bio = {
    "name": "Imer Desena",
    "role": "Web Developer",
    "contact": {
        "mobile": "928 287 1774",
        "email": "imer.desena@gmail.com",
        "location": "Richmond, In"
    },
    "message": " Bienvenido",
    "skills": ["CSS", "Java", "Mysql", "Html"],
    "biopic": "images/imer.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var fotmattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.message);
        $("#header").prepend(formattedName, fotmattedRole, formattedPic, formattedMessage);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedLocation);
        // skill loop
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            };
        };
    }
};
bio.display();
// section  Work
var work = {
    "jobs": [{
        "employer": "Buffete de Tecnologias y Soluciones Avanzadas",
        "title": "Jr. System Architect",
        "dates": "june 2014 - Aug-2015",
        "description": "• Designed, documented, and integrated  use-cases for a new web  project, as part of my  responsibilities in the design team integrated with  5  designers, I was  trained  to work with  Microsoft .Net technology, and  fulfilled with my duties in time stablished  by design  leader."
    }, {
        "employer": "Espacio Virtual",
        "title": "Pc Technician",
        "dates": "2009-February - Augost  2014",
        "description": " Diagnosed, identified & resolved several computer issues such as Bios configuration, Wi-Fi configuration, virus removal, printers configuration,  pc and  laptop assembling, data capture password recovery, System recovery "
    }, {
        "employer": "Freelance",
        "title": "System Developer",
        "dates": "february 2013 - October 2013",
        "description": "• Designed, documented, and integrated  use-cases for a new web  project, as part of my  responsibilities in the design team integrated with  5  designers, I was  trained  to work with  Microsoft .Net technology, and  fulfilled with my duties in time stablished  by design  leader "
    }],
    display: function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart)
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        };
    }
};
work.display();
// project  section
var projects = {
    "projects": [{
        "title": "My portfolio",
        "dates": "oct 2013",
        "description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree",
        "images": ["http://s24.postimg.org/npzugbwlh/project1.jpg", "http://s10.postimg.org/8ez6jjje1/project2.png"]
    }],
    display: function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                };
            };
        };
    }
};
projects.display();
var workLocation = {
        "job": ["Mexicali,BC"]
    }
    // Section  Education
var education = {
    "schools": [{
        "name": "Universidad Autonoma de Baja California",
        "city": "Mexico",
        "degree": "BS",
        "major": ["Computer Science"],
        "dates": 2013,
        "url": "http://www.uabc.edu"
    }],
    "onlineCourses": [{
        "title": "Architecture Web Applications",
        "school": "Coursera",
        "dates": 2015,
        "url": "https://www.coursera.org"
    },
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com"
    }],
    display: function () { 
        for (edu in education.schools) {
            $("#education").append(HTMLschoolStart); 
            var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name); 
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree); 
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree); 
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            $(".education-entry:last").append(formattedDates); 
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
            $(".education-entry:last").append(formattedLocation); 
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
            $(".education-entry:last").append(formattedMajor);
        } 
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses); 
            for (course in education.onlineCourses) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title); 
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school); 
                var formattedSchoolTitle = formattedTitle + formattedSchool;
                $(".education-entry:last").append(formattedSchoolTitle); 
                var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $(".education-entry:last").append(formattedDates); 
                var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedURL);
            };
        };
    }
};
education.display();
/*
//Internationalize  Buttom
function inName() {
    var oldName = bio.name;
    var finalName = oldName;
    array = oldName.split(' ');
    finalName = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase() + ' ' + array[1].toUpperCase()
    return finalName;
};
$("#main").append(internationalizeButton);
*/
$("#mapDiv").append(googleMap);