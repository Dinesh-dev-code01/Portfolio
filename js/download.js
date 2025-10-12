// download.js
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadCvBtn');
  
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function () {
        const url = 'assets/Dineshkumar_Resume.pdf'; // Resume path change pannunga
  
        fetch(url)
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.blob();
          })
          .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Dineshkumar_Resume.pdf';
            document.body.appendChild(link);    
            link.click();
            link.remove();
            URL.revokeObjectURL(link.href);
          })
          .catch(() => {
            // Fallback — open PDF in new tab
            window.open(url, '_blank');
          });
      });
    }
  });