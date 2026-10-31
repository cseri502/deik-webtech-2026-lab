function calculateYearsSince(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    let years = today.getFullYear() - date.getFullYear();

    // extra
    const anniversaryHasPassed =
        today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() &&
         today.getDate() >= date.getDate());

    return anniversaryHasPassed ? years : years - 1;
}

console.log('Életkor:', calculateYearsSince('1961-07-04'));

const form = document.getElementById('hogwarts-form');

form.dob.addEventListener('input', function (event) {
    console.log('Megadott születési dátum:', form.dob.value);
    const ageInYears = calculateYearsSince(form.dob.value);
    console.log('Életkor:', ageInYears);
    if (ageInYears >= 11) {
        form.dob.setCustomValidity('');
    } else {
        form.dob.setCustomValidity('Túl fiatal vagy még Roxforthoz, az alsó korhatár 11 év');
    }
    form.dob.reportValidity();
});


form.house.addEventListener('change', function (event) {
    const houseColor = form.house.options[form.house.selectedIndex].dataset.colorPrimary;
    console.log(`A ${form.house.value} ház került kiválasztásra, amelynek színe ${houseColor}`);
    document.body.style.backgroundColor = houseColor;
});
