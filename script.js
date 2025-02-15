function loadPDF(pdfFile) {
    const pdfViewer = document.getElementById('pdf-viewer');
    // Clear previous content
    pdfViewer.innerHTML = '';
    // Create a new iframe for the PDF
    const iframe = document.createElement('iframe');
    iframe.src = pdfFile;
    iframe.width = '100%';
    iframe.height = '100%';
    // Append the iframe to the PDF viewer
    pdfViewer.appendChild(iframe);
}