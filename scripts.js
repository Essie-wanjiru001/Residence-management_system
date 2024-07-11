let residences = [];
let students = [];
let maintenanceRequests = [];

function createResidence() {
    const type = document.getElementById('residenceType').value;
    const name = document.getElementById('residenceName').value;
    const address = document.getElementById('residenceAddress').value;
    const additionalInfo = parseInt(document.getElementById('additionalInfo').value, 10);

    let residence;
    if (type === 'dorm') {
        residence = new DormRoom(name, address, additionalInfo);
    } else {
        residence = new Apartment(name, address, additionalInfo);
    }
    residences.push(residence);
    displayOutput(`Created ${type} named ${name} at ${address}`);
}

function createStudent() {
    const name = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const gender = document.getElementById('studentGender').value;

    const student = new Student(name, studentID, gender);
    students.push(student);
    displayOutput(`Created student ${name} with ID ${studentID}`);
}

function assignResidence() {
    const studentName = document.getElementById('studentNameForAssign').value;
    const residenceName = document.getElementById('residenceNameForAssign').value;

    const student = students.find(s => s.name === studentName);
    const residence = residences.find(r => r.name === residenceName);

    if (student && residence) {
        student.assignResidence(residence);
        displayOutput(`Assigned ${residenceName} to ${studentName}`);
    } else {
        displayOutput('Student or Residence not found');
    }
}

function createMaintenanceRequest() {
    const description = document.getElementById('maintenanceDescription').value;
    const studentName = document.getElementById('studentNameForRequest').value;

    const student = students.find(s => s.name === studentName);

    if (student) {
        const request = new MaintenanceRequest(description, student);
        maintenanceRequests.push(request);
        displayOutput(`Created maintenance request: ${description} for ${studentName}`);
    } else {
        displayOutput('Student not found');
    }
}

function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

window.addEventListener('DOMContentLoaded', () => {
    // Initialize any required events or elements if needed
});
