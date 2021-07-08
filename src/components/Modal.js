import React from 'react';

const Modal = () => {
  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">


            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send</button>

        </div>
      </div>
    </div>
  );
}