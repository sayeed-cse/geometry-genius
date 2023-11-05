function calculateTriangleArea() {
    const base_value = getInputValues('triangle-base');
    const height_value = getInputValues('triangle-height');

    const triangle_area_result = 1 / 2 * base_value * height_value;

    setElementInnerText('triangle-area', triangle_area_result);
}

function calculateRectangleArea() {
    const width_value = getInputValues('rectangle-width');
    const length_value = getInputValues('rectangle-length');

    const rectangle_area_result = width_value * length_value;

    setElementInnerText('rectangle-area', rectangle_area_result);
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