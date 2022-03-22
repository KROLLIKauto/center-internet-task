import React from 'react'
import { Box, Modal } from "@mui/material"
import './Modal.scss'

function ModalContainer({ 
  open, 
  handleClose, 
  ImgForModal, 
  numberImage 
}) {

  return (
    <Modal open={open} onClose={handleClose} >
      <Box className="box"> 
        <div className='modal-container'>
          <button onClick={handleClose}>Закрыть</button>
          <div className='image-in-modal'>
            <img src={ImgForModal} />
          </div>
        <div className='number-img'>Картинка {numberImage+1}</div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalContainer