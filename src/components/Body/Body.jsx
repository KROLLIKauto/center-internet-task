import { useState } from 'react'
import './Body.scss'
import logo7 from '../../image/BatmanLogo_blog_5f3eca9ca60ab4.01819021.jpg'
import img0 from '../../imgForBlocks#6/0.jpg'
import img1 from '../../imgForBlocks#6/1.jpg'
import img2 from '../../imgForBlocks#6/2.jpg'
import img3 from '../../imgForBlocks#6/3.jpg'
import img4 from '../../imgForBlocks#6/4.jpg'
import img5 from '../../imgForBlocks#6/5.jpg'
import ModalContainer from '../Modal/Modal'

export default function Body() {
  const [arrImg, setArrImg] = useState([
    img0,
    img1,
    img2,
    img3,
    img4,
    img5
  ])
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [ImgForModal, setImgForModal] = useState()
  const [numberImage, setNumberImage] = useState()

  const showImg = (elem, index) => {
    setNumberImage(index)
    setImgForModal(elem)
    setOpen(true)
  }

  return (<>
    <ModalContainer 
      open={open} 
      handleClose={handleClose}
      ImgForModal={ImgForModal}
      numberImage={numberImage}
    />
    <div className='body-main-container'>
      <div className='main-left-container'>
        <div className='top-left-block'></div>
        <div className='bottom-left-block'>
          <img src={logo7} />
        </div>
      </div>
      <div className='main-right-container'>
        <div className='top-right-block'></div>
        <div className='centr-right-block'>
          {arrImg.map((elem, index) => {
            return <div onClick={()=>showImg(elem, index)} key={index} className='image'>
              <img src={elem} />
            </div>
          })}
        </div>
        <div className='bottom-right-block'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </>)
}
