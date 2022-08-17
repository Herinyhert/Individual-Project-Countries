export default function validate(input) {
    let errors = {};

    if (!input.name) { errors.name = "Name is required"; }
    else if (!/^[A-Za-z,.á-ú\s]{5,40}$/.test(input.name)) { errors.name = "Name must be between 5 and 40 characters that are not numbers or special characters"; }

    if (!input.difficulty) { errors.difficulty = "Difficulty is required"; }
    //else if (!(input.expertise >= 1 && input.expertise <= 5)) { errors.expertise = "Difficulty must be a number between 1 and 5"; }

    if (!input.duration) { errors.duration = "Duration is required"; }
    //else if (input.duration > 24) { errors.duration = "Should not lasts more than 24 hours"; } 
    //else if (input.duration < 0) { errors.duration = "Time cannot be negative"; }

    if (input.season.length < 1) { errors.season = "You must identify at least one season"; }
    if (input.country.length < 1) { errors.id = "You must enter at least one country"; }


    return errors;
}