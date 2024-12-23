const GRADES = {
    QUINTO: "Quinto curso",
    CUARTO: "Cuarto curso",
    TERCERO: "Tercer curso",
    SEGUNDO: "Segundo curso",
    PRIMERO: "Primer curso",
};
const SUBJECTS = {
    PROB: "PROB",
    INFE2: "INFE2"
};
const TYPES = {
    APUNTES: "Apuntes",
    EJERCICIOS: "Ejercicios"
};

document.addEventListener("DOMContentLoaded", function () {
    const pdfFiles = [
        { name: "Entrega 2 Tema 1", grade: GRADES.TERCERO, subject: SUBJECTS.INFE2, type: TYPES.EJERCICIOS, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/Entrega2Tema1.pdf" },
        { name: "Apuntes Tema 3 Probabilidad", grade: GRADES.SEGUNDO, subject: SUBJECTS.PROB, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema3Prob.pdf" },
        { name: "Apuntes Tema 2 Probabilidad", grade: GRADES.SEGUNDO, subject: SUBJECTS.PROB, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema2Prob.pdf" },
        { name: "Apuntes Tema 1 Inferencia 2", grade: GRADES.TERCERO, subject: SUBJECTS.INFE2, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema1Infe2.pdf" },
        { name: "Apuntes Tema 2 Inferencia 2", grade: GRADES.TERCERO, subject: SUBJECTS.INFE2, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema2Infe2.pdf" },
        { name: "Apuntes Tema 4 Inferencia 2", grade: GRADES.TERCERO, subject: SUBJECTS.INFE2, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema4Infe2.pdf" },
        { name: "Apuntes Tema 5 Inferencia 2", grade: GRADES.TERCERO, subject: SUBJECTS.INFE2, type: TYPES.APUNTES, path: "https://raw.githubusercontent.com/xXaceitunaXx/Apuntes-INdat/WebPage/Bin/ApuntesTema5Infe2.pdf" },
    ];

    const fileList = document.getElementById("fileList");
    const searchBar = document.getElementById("searchBar");
    const gradeFilter = document.getElementById("gradeFilter");
    const subjectFilter = document.getElementById("subjectFilter");
    const typeFilter = document.getElementById("typeFilter");

    // Populate filter dropdowns from constants
    function populateFilters() {
        Object.values(GRADES).forEach(grade => {
            const option = document.createElement("option");
            option.value = grade;
            option.textContent = grade;
            gradeFilter.appendChild(option);
        });

        Object.values(SUBJECTS).forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectFilter.appendChild(option);
        });

        Object.values(TYPES).forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }

    // Display the filtered files with tags
    function displayFiles(files) {
        fileList.innerHTML = ""; // Clear the list
        files.forEach(file => {
            const listItem = document.createElement("li");
            listItem.classList.add("file-item");

            listItem.innerHTML = `<a href="${file.path}" download>${file.name}</a>`;

            const gradeTag = document.createElement("span");
            gradeTag.classList.add("tag");
            gradeTag.textContent = file.grade;
            listItem.appendChild(gradeTag);

            const subjectTag = document.createElement("span");
            subjectTag.classList.add("tag");
            subjectTag.textContent = file.subject;
            listItem.appendChild(subjectTag);

            const typeTag = document.createElement("span");
            typeTag.classList.add("tag");
            typeTag.textContent = file.type;
            listItem.appendChild(typeTag);

            fileList.appendChild(listItem);
        });
    }

    // Filter files based on search and dropdowns
    function filterFiles() {
        const searchText = searchBar.value.toLowerCase();
        const selectedGrade = gradeFilter.value;
        const selectedSubject = subjectFilter.value;
        const selectedType = typeFilter.value;

        const filteredFiles = pdfFiles.filter(file => {
            return (
                file.name.toLowerCase().includes(searchText) &&
                (selectedGrade === "" || file.grade === selectedGrade) &&
                (selectedSubject === "" || file.subject === selectedSubject) &&
                (selectedType === "" || file.type === selectedType)
            );
        });
        displayFiles(filteredFiles);
    }

    // Populate filters and initialize event listeners
    populateFilters();
    searchBar.addEventListener("input", filterFiles);
    gradeFilter.addEventListener("change", filterFiles);
    subjectFilter.addEventListener("change", filterFiles);
    typeFilter.addEventListener("change", filterFiles);

    // Initial load
    displayFiles(pdfFiles);
});
