function loadModule(pdfFile) {
    const contentList = document.getElementById('content-list');
    const pdfViewer = document.getElementById('pdf-viewer');
    const backArrow = document.getElementById('back-arrow');

    // Hide the module list and show the PDF viewer and back arrow
    contentList.style.display = 'none';
    pdfViewer.style.display = 'block';
    backArrow.style.display = 'block';

    // Load the PDF into the viewer
    pdfViewer.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = pdfFile;
    iframe.width = '100%';
    iframe.height = '100%';
    pdfViewer.appendChild(iframe);
}

function showModules() {
    const contentList = document.getElementById('content-list');
    const pdfViewer = document.getElementById('pdf-viewer');
    const backArrow = document.getElementById('back-arrow');

    // Show the module list and hide the PDF viewer and back arrow
    contentList.style.display = 'block';
    pdfViewer.style.display = 'none';
    backArrow.style.display = 'none';
}
