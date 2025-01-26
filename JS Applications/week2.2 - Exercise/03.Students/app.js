const tbody = document.querySelector('#results tbody');
const url = 'http://localhost:3030/jsonstore/collections/students';

async function solve() {

    window.addEventListener("load", urlRequest);

    const form = document.getElementById('form');
    form.addEventListener('submit', addStudentData);
    async function addStudentData(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newFirstName = formData.get('firstName');
        const newLastName = formData.get('lastName');
        const newFacultyNumber = formData.get('facultyNumber');
        const newGrade = Number(formData.get('grade'));

        // console.log(formData.get('lastName'));

        if (newFirstName && newLastName && newFacultyNumber && newGrade) {
            const newStudentData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    firstName: newFirstName,
                    lastName: newLastName,
                    facultyNumber: newFacultyNumber,
                    grade: newGrade
                })
            })
            urlRequest();
        } else {
            alert('There is an empty field!')
            throw new Error("There is an empty field");

        }


    };
};

async function urlRequest() {
    tbody.innerHTML = '';
    const request = await fetch(url);
    const data = await request.json();

    Object.values(data).forEach((studentData) => {
        const studentTableRow = document.createElement('tr');
        const firstName = studentData.firstName;
        const lastName = studentData.lastName;
        const facultyNumber = studentData.facultyNumber;
        const grade = Number(studentData.grade);

        const firstNameCell = studentTableRow.insertCell(0);
        firstNameCell.textContent = firstName;

        const lastNameCell = studentTableRow.insertCell(1);
        lastNameCell.textContent = lastName;

        const facultyNumberCell = studentTableRow.insertCell(2);
        facultyNumberCell.textContent = facultyNumber;

        const gradeCell = studentTableRow.insertCell(3);
        gradeCell.textContent = grade.toFixed(2);

        tbody.appendChild(studentTableRow);
    });
}

solve();