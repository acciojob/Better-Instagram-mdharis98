//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach(div => {
    // When drag starts
    div.addEventListener('dragstart', function(e) {
        draggedElement = e.target;  
        e.dataTransfer.setData('text/plain', null);  
    });

    div.addEventListener('dragover', function(e) {
        e.preventDefault();  
    });

    div.addEventListener('drop', function(e) {
        e.preventDefault();
        
       
        if (draggedElement !== e.target) {
            const draggedImage = window.getComputedStyle(draggedElement).backgroundImage;
            const targetImage = window.getComputedStyle(e.target).backgroundImage;
            
            draggedElement.style.backgroundImage = targetImage;
            e.target.style.backgroundImage = draggedImage;
        }
    });
});
