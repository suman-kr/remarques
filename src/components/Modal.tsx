import * as React from 'react';
export class Modal extends React.Component<Props, {}> {
  render() {
    return (
      <div id='myModal' className='modal'>

      <!-- Modal content -->
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close'>&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div className='modal-body'>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className='modal-footer'>
          <h3>Modal Footer</h3>
        </div>
      </div>

    </div>
    );
  }
}

interface Props {
  modalTitle: string;
  modalContent: React.ReactNode;
}
