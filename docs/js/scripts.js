document.addEventListener("DOMContentLoaded", function () {
    // Mock data to simulate PDF list (since direct directory access isn't available)
    const pdfFiles = [
        { name: "Entrega2Tema1.pdf", grade: "3", subject: "INFE2", path: "https://github.com/xXaceitunaXx/Apuntes-INdat/tree/WebPage/BinEntrega2Tema1.pdf" },
        { name: "ApuntesTema2Prob.pdf", grade: "2", subject: "PROB", path: "https://github.com/xXaceitunaXx/Apuntes-INdat/tree/WebPage/BinApuntesTema2Prob.pdf" },
        // Add more entries as needed
    ];

    const fileList = document.getElementById("fileList");
    const searchBar = document.getElementById("searchBar");
    const gradeFilter = document.getElementById("gradeFilter");
    const subjectFilter = document.getElementById("subjectFilter");

    // Display the filtered files
    function displayFiles(files) {
        fileList.innerHTML = "";
        files.forEach(file => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${file.path}" download>${file.name}</a>`;
            fileList.appendChild(listItem);
        });
    }

    // Filter files based on search and dropdowns
    function filterFiles() {
        const searchText = searchBar.value.toLowerCase();
        const selectedGrade = gradeFilter.value;
        const selectedSubject = subjectFilter.value;

        const filteredFiles = pdfFiles.filter(file => {
            return (
                file.name.toLowerCase().includes(searchText) &&
                (selectedGrade === "" || file.grade === selectedGrade) &&
                (selectedSubject === "" || file.subject === selectedSubject)
            );
        });
        displayFiles(filteredFiles);
    }

    // Event listeners for filtering
    searchBar.addEventListener("input", filterFiles);
    gradeFilter.addEventListener("change", filterFiles);
    subjectFilter.addEventListener("change", filterFiles);

    // Initial load
    displayFiles(pdfFiles);
});
