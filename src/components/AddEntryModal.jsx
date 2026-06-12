import EntryForm from './EntryForm';

const AddEntryModal = () => {
  return (
    <>
      <button
        className="btn bg-[#e990ea] text-inherit mt-2.5"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Add a New Entry
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#EBD6DB] ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-[#e990ea]">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">New Entry</h3>
          <div className="w-[100%] mx-auto ">
            <EntryForm />
          </div>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default AddEntryModal;
