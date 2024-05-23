import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { deleteContact, editContact } from '../../redux/contacts/operations';

export default function Contact (contact) {
  const dispatch = useDispatch();

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const openEditModal = () => {
    setIsModalEditOpen(true);
  };

  const handleSave = () => {
    dispatch(editContact(editedContact));
    setIsModalEditOpen(false);
    toast.success('Contact was edited successfully');
  };

  const cancelEdit = () => {
    setIsModalEditOpen(false);
    setEditedContact({ ...contact });
  };

  useEffect(() => {
    setEditedContact(editedContact);
  }, [editedContact]);

  const confirmDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success('Contact was deleted successfully');
    setIsModalDeleteOpen(false);
  };

  const cancelDelete = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <>
    <div className={css.info}>
      <div className={css.data}>
        <p className={css.item}>
          <IoPersonSharp size={16} />
          <span>{editedContact.name}</span>
        </p>
        <p className={css.item}>
          <FaPhone size={16} />
          <span>{editedContact.number}</span>
        </p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.button} title="Click to edit contact" aria-label="Editing contact" type="submit" onClick={openEditModal}>
          <RiEdit2Fill size={24} color="#ef5c0d" />
        </button>
        <button className={css.button} title="Click to delete contact" aria-label="Deleting contact" type="button" onClick={openModalDelete}>
          <RiDeleteBin2Fill size={24} color="#ef5c0d" />
        </button>
      </div>
      <Modal className={css.modal} isOpen={isModalEditOpen} onRequestClose={() => setIsModalEditOpen(false)}>
        <button type="button" className={css.closeModalBtn} onClick={cancelEdit}>
          <IoClose className={css.closeIcon} />
        </button>
        <h2>Edit Contact</h2>
        <p className={css.modalText}>Do you want to edit contact?</p>
        <form className={css.modalForm}>
          <input className={css.modalInput} label="name:" type="text" value={editedContact.name} onChange={e => setEditedContact({ ...editedContact, name: e.target.value })} />
          <input className={css.modalInput} label="number:" type="text" value={editedContact.number} onChange={e => setEditedContact({ ...editedContact, number: e.target.value })} />
        </form>
        <div className={css.buttonContainerModal}>
          <button title="Click to save editet contact" aria-label="Save edited contact" type="button" className={css.modalBtn} onClick={handleSave}>
            Save
          </button>
          <button title="Click to cancel editing contact" aria-label="Cancel editing contact" type="button" className={css.modalBtn} onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      </Modal>

      <Modal
          className={css.modal}
          isOpen={isModalDeleteOpen}
          onRequestClose={() => setIsModalDeleteOpen(false)}
        >
          <button
            type="button"
            className={css.closeModalBtn}
            onClick={cancelDelete}
          >
            <IoClose className={css.closeIcon} />
          </button>
          <h2>Delete this contact?</h2>
          <p className={css.modalText}>
            Are you sure you want to delete this contact?
          </p>
          <div className={css.contactDataModal}>
            <p className={css.contactInfoItem}>
              <span>{contact.name}</span>
            </p>

            <p className={css.contactInfoItem}>
              <span>{contact.number}</span>
            </p>
          </div>
          <div className={css.buttonContainerModal}>
            <button
              title="Click to delete contact"
              aria-label="Deleting contact"
              type="button"
              className={css.modalBtn}
              onClick={confirmDelete}
            >
              Confirm
            </button>
            <button
              title="Cancel delete"
              aria-label="Cancel delete"
              type="button"
              className={css.modalBtn}
              onClick={cancelDelete}
            >
              Cancel
            </button>
          </div>
        </Modal>
    </div>
    </>
  );
};