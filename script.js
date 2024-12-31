function toggleDescription(id) {
    // Get all descriptions
    var descriptions = document.querySelectorAll('.description');

    // Loop through all descriptions and hide them
    descriptions.forEach(function(desc) {
        if (desc.id !== id) {
            desc.style.display = 'none';
        }
    });

    // Get the specific description to toggle
    var currentDescription = document.getElementById(id);
    
    // Toggle visibility for the clicked description
    if (currentDescription.style.display === 'none' || currentDescription.style.display === '') {
        currentDescription.style.display = 'block'; // Show the description
    } else {
        currentDescription.style.display = 'none'; // Hide the description
    }
}


function toggleText(id) {
    const content = document.getElementById('content' + id);
    const arrow = content.previousElementSibling.querySelector('.more_facts_button_arrow i');

    // Toggle visibility of the content
    if (content.classList.contains('revealed')) {
        content.classList.remove('revealed'); // Hide the content
        arrow.classList.remove('fa-angle-up');
        arrow.classList.add('fa-angle-down'); // Change arrow to down
    } else {
        content.classList.add('revealed'); // Show the content
        arrow.classList.remove('fa-angle-down');
        arrow.classList.add('fa-angle-up'); // Change arrow to up
    }
}
function showText(buttonNumber) {
    // Hide all text divs
    for (let i = 1; i <= 7; i++) {
        document.getElementById("text" + i).style.display = "none";
    }
    
    // Show the selected text div
    document.getElementById("text" + buttonNumber).style.display = "block";
}

// JavaScript funkcija animuoti box’o issiskleidima ir suskleidima
function toggleDescriptionWithAnimation(button, id) {
    const description = document.getElementById(id);

    if (description.style.display === "block") {
        // Jei atidarytas, uždarome su animacija
        description.style.transition = "max-height 0.5s ease-in-out";
        description.style.maxHeight = "0";

        setTimeout(() => {
            description.style.display = "none";
            button.textContent = "Daugiau";
        }, 500); // Atitinka animacijos trukmę
    } else {
        // Jei uždarytas, atidarome su animacija
        description.style.display = "block";
        description.style.maxHeight = "0"; // Pradinė reikšmė animacijai
        setTimeout(() => {
            description.style.transition = "max-height 0.5s ease-in-out";
            description.style.maxHeight = "500px"; // Nustatyti pakankamą reikšmę
        }, 10); // Nedidelis atidėjimas, kad pradėtų animaciją

        button.textContent = "Mažiau";
    }
}




