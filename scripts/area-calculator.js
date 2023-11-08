// triangle
function calculateTriangleArea() {
    const base_value = getInputValues('triangle-base');
    const height_value = getInputValues('triangle-height');
    // validation
    if (isNaN(base_value) || isNaN(height_value)) {
        alert('Please insert a Number');
        return;
    }
    const triangle_area_result = 1 / 2 * base_value * height_value;

    setElementInnerText('triangle-area', triangle_area_result);

    addToCalculationEntry('Triangle', triangle_area_result);

}

// rectangle
function calculateRectangleArea() {
    const width_value = getInputValues('rectangle-width');
    const length_value = getInputValues('rectangle-length');

    // validation
    if (isNaN(width_value) || isNaN(length_value)) {
        alert('Please insert a Number');
        return;
    }

    const rectangle_area_result = width_value * length_value;

    setElementInnerText('rectangle-area', rectangle_area_result);

    addToCalculationEntry('Rectangle', rectangle_area_result);

}

// parallelogram
function calculateParallelogramArea() {
    const parallelogram_base = getInputValues('parallelogram-base');
    const parallelogram_height = getInputValues('parallelogram-height');
    // validation
    if (isNaN(parallelogram_base) || isNaN(parallelogram_height)) {
        alert('Please insert a Number');
        return;
    }
    const area_of_parallelogram = parallelogram_base * parallelogram_height;

    setElementInnerText('parallelogram-area', area_of_parallelogram);

    addToCalculationEntry('Parallelogram', area_of_parallelogram);
}

// rhombus
function calculateRhombusArea() {
    const diagonal_one = getInputValues('rhombus-diagonal-1');
    const diagonal_two = getInputValues('rhombus-diagonal-2');
    if (isNaN(diagonal_one) || isNaN(diagonal_two)) {
        alert('please Insert a Number');
        return;
    }
    const rhombus_area_result = .5 * diagonal_one * diagonal_two;
    setElementInnerText('rhombus-area', rhombus_area_result);

    addToCalculationEntry('Rhombus', rhombus_area_result);

}

//pentagon


// ellipse area

function calculateEllipseArea() {
    const major_radius = getInputValues('ellipse-major-radius');
    const minor_radius = getInputValues('ellipse-minor-radius');
    // validation
    if (isNaN(major_radius) || isNaN(minor_radius)) {
        alert('Please insert a Number');
        return;
    }
    const ellipse_area_result = Math.PI * major_radius * minor_radius;
    const area_round_figure = ellipse_area_result.toFixed(3);

    setElementInnerText('ellipse-area', area_round_figure);
    addToCalculationEntry('Ellipse', area_round_figure);
}

function getInputValues(elementId) {
    const input_field = document.getElementById(elementId);
    const input_value = input_field.value;
    return input_value;
}

function setElementInnerText(elementId, area_value) {
    const element = document.getElementById(elementId);
    element.innerText = area_value;
}

//add to calculation entry
function addToCalculationEntry(areaType, area) {
    // console.log(areaType + ' ' + area);
    const calculation_entry = document.getElementById('calculation-entry');

    const p = document.createElement('p');

    // p.innerHTML = areaType +' '+area;

    const count = calculation_entry.childElementCount;
    p.innerHTML = `<table class='table'>
    <tr>
        <td>${count + 1}</td>
        <td>${areaType}</td>
        <td>${area}</td>
        <td><button class='btn btn-primary btn-sm'>Convert To Meter</button></td>
    </tr>
    </table>`;
    calculation_entry.appendChild(p);
}