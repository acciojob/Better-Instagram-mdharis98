 const draggables = document.querySelectorAll(".draggable");
      let draggedItem = null;

      draggables.forEach((draggable) => {
        // When dragging starts
        draggable.addEventListener("dragstart", (e) => {
          draggedItem = e.target;
          // Hide the item being dragged for better UI feedback
          setTimeout(() => {
            e.target.style.opacity = "0.5"; // Making it semi-transparent for better visibility
          }, 0);
        });

        // When dragging ends
        draggable.addEventListener("dragend", (e) => {
          setTimeout(() => {
            e.target.style.opacity = "1"; // Restore the item to full visibility
          }, 0);
          draggedItem = null; // Clear the dragged item
        });

        // Allowing the dragover event (necessary to enable dropping)
        draggable.addEventListener("dragover", (e) => {
          e.preventDefault(); // Prevent the default to allow drop
        });

        // Handling the drop event
        draggable.addEventListener("drop", (e) => {
          e.preventDefault();
          // Ensure that we're not swapping the element with itself
          if (draggedItem !== e.target) {
            // Swapping the background images of the dragged item and the drop target
            let tempImage = draggedItem.src;
            draggedItem.src = e.target.src;
            e.target.src = tempImage;
          }
        });
      });