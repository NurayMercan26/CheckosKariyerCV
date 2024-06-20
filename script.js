document.addEventListener('DOMContentLoaded', function() {
    var cvModal = document.getElementById('cv-modal');
    var interviewModal = document.getElementById('interview-modal');
    var cvButton = document.getElementById('cv-button');
    var interviewButton = document.getElementById('interview-button');
    var closeButtons = document.querySelectorAll('.modal .close, .modal .btn.close');

    function openCVModal() {
        cvModal.classList.add('show');
    }

    function openInterviewModal() {
        interviewModal.classList.add('show');
    }

    function closeModal() {
        cvModal.classList.remove('show');
        interviewModal.classList.remove('show');
    }

    // Check if cvButton and interviewButton exist before adding event listeners
    if (cvButton) {
        cvButton.addEventListener('click', openCVModal);
    }

    if (interviewButton) {
        interviewButton.addEventListener('click', openInterviewModal);
    }

    // Add event listeners for close buttons
    closeButtons.forEach(function(button) {
        button.addEventListener('click', closeModal);
    });

    // Close modals when clicking outside of modal content
    window.onclick = function(event) {
        if (event.target === cvModal || event.target === interviewModal) {
            closeModal();
        }
    };
});



