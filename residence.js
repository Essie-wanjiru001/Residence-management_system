// Base class for all residences
class Residence {
    constructor(name, address, occupied = false) {
        this.name = name;        // Initialize the name property
        this.address = address;  // Initialize the address property
        this.occupied = occupied; // Initialize the occupied property
    }

    // Assign a student to the residence
    assignStudent() {
        this.occupied = true; // Set occupied status to true
    }

    // Vacate the residence
    vacate() {
        this.occupied = false; // Set occupied status to false
    }
}

// Class representing a dorm room, extends the Residence class
class DormRoom extends Residence {
    constructor(name, address, squareFootage) {
        super(name, address);    // Call the constructor of the base class (Residence)
        this.squareFootage = squareFootage; // Initialize the square footage property
    }

    // Calculate rent based on the size of the dorm room
    calculateRent() {
        return this.squareFootage * 2; // Example calculation: $2 per square foot
    }
}

// Class representing an apartment, extends the Residence class
class Apartment extends Residence {
    constructor(name, address, numberOfBedrooms) {
        super(name, address);       // Call the constructor of the base class (Residence)
        this.numberOfBedrooms = numberOfBedrooms; // Initialize the number of bedrooms property
    }

    // Calculate rent based on the number of bedrooms
    calculateRent() {
        return this.numberOfBedrooms * 500; // Example calculation: $500 per bedroom
    }
}

// Class representing a student
class Student {
    constructor(name, studentID, gender, residence = null) {
        this.name = name;               // Initialize the name property
        this.studentID = studentID;     // Initialize the student ID property
        this.gender = gender;           // Initialize the gender property
        this.residence = residence;     // Initialize the residence property (default is null)
    }

    // Assign a residence to the student
    assignResidence(residence) {
        this.residence = residence;    // Set the residence property
        residence.assignStudent();     // Update the residence status to occupied
    }

    // Vacate the student's current residence
    vacateResidence() {
        if (this.residence) {
            this.residence.vacate(); // Update the residence status to vacant
            this.residence = null;   // Remove the residence assignment
        }
    }
}

// Class representing a maintenance request
class MaintenanceRequest {
    constructor(description, student, status = 'submitted', assignedEmployee = null) {
        this.description = description;     // Initialize the description property
        this.student = student;             // Initialize the student property
        this.status = status;               // Initialize the status property (default is 'submitted')
        this.assignedEmployee = assignedEmployee; // Initialize the assigned employee property (default is null)
    }

    // Update the status of the maintenance request
    updateStatus(newStatus) {
        this.status = newStatus; // Set the status property to the new status
    }

    // Assign an employee to the maintenance request
    assignEmployee(employee) {
        this.assignedEmployee = employee; // Set the assigned employee property
    }
}

// Demonstrate the functionality of the classes
window.addEventListener('DOMContentLoaded', () => {
    // Create instances of DormRoom and Apartment
    const dorm = new DormRoom('Dorm A', '123 College St', 300);
    const apt = new Apartment('Apartment B', '456 University Ave', 3);

    // Create a Student and assign a residence
    const student = new Student('Alice Johnson', 'S12345', 'Female');
    student.assignResidence(dorm);

    // Log student and residence details
    console.log('Student Details:', student);  // Display student details in the console
    console.log('Dorm Rent:', dorm.calculateRent()); // Display calculated rent for the dorm room

    // Create a Maintenance Request
    const request = new MaintenanceRequest('Leaky faucet', student);
    request.updateStatus('in progress');
    console.log('Maintenance Request:', request);  // Display maintenance request details in the console
});
