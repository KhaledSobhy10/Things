import React from "react";
import { useState } from "react";

function SearchResult() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="card w-96 bg-base-200 shadow-2xl shadow-t-2">
          <div className="card-body relative">
            <div className="absolute top-0 right-0 dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-accent btn-xs btn-circle	"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300  rounded-box w-52 "
              >
                <li>
                  <button onClick={() => setIsUpdating(true)}>Update</button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setIsDeleting(true);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>

            <h2 className="card-title">Build create react app</h2>
            <p>npm run build</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">programming</div>
              <div className="badge badge-outline">commands</div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <input type="checkbox" id="delete-thing-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Want delete that thing !! {Math.random()}
          </h3>
          <div className="modal-action">
            <label
              htmlFor="delete-thing-modal"
              className={`btn btn-success ${
                isDeleting ? " btn-disabled " : ""
              }`}
            >
              Cancel
            </label>
            <label
              //   htmlFor="delete-thing-modal"
              //    loading  btn-disabled
              className={`btn btn-error ${
                isDeleting ? " loading  btn-disabled " : ""
              }`}
              onClick={() => {
                console.log("thing deleted");
                setIsDeleting(true);
                setTimeout(() => {
                  const deleteModal =
                    document.getElementById("delete-thing-modal");
                  deleteModal.checked = !deleteModal.checked;
                  setIsDeleting(false);
                }, 1000);
              }}
            >
              Yes
            </label>
          </div>
        </div>
      </div>
      {/* update modal */}
      <div
        className={`modal modal-bottom sm:modal-middle ${
          isUpdating ? " modal-open" : ""
        }`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Thing</h3>

          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn"
              onClick={() => {
                setIsUpdating(false);
              }}
            >
              Yay
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
