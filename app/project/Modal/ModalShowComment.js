import { Modal } from 'antd'
import Button from 'components/Button'
import React from 'react'

function ModalShowComment({isOpen, onClose, title}) {
  return (
    <Modal title="Trả lời Khang@Pham"
      open={isOpen}
      footer={null}
      closable={true}
      width={400}
      onCancel={onClose}
    >
        <textarea className="w-full h-28 border border-gray-400 outline-none rounded-md bg-gray-100 p-2"> 
        </textarea>
        <div className="w-40 ml-auto">
          <Button title="Gửi"/>
        </div>
    </Modal>
  )
}

export default ModalShowComment