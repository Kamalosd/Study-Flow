import React, { useEffect, useState } from "react";
import { subjectBaseUrl } from "../../axiosInstance";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);

  const [subjectName, setSubjectName] = useState("");
  const [subjectColor, setSubjectColor] =
    useState("#3b82f6");


  // =========================
  // GET SUBJECTS
  // =========================

  const getSubjects = async () => {
    try {
      const { data } =
        await subjectBaseUrl.get("/");

      if (data.success) {
        setSubjects(data.subjects);
      }
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.Message ||
          "Unable to get subjects"
      );
    }
  };


  // Load subjects
  useEffect(() => {
    getSubjects();
  }, []);


  // =========================
  // ADD SUBJECT
  // =========================

  const handleAddSubject = async () => {
    if (!subjectName.trim()) {
      alert("Please enter subject name");
      return;
    }

    try {
      const { data } =
        await subjectBaseUrl.post("/", {
          name: subjectName,
          color: subjectColor,
        });

      if (data.success) {

        setSubjects((prev) => [
          ...prev,
          data.subject,
        ]);

        setSubjectName("");
        setSubjectColor("#3b82f6");

        document
          .getElementById("my_modal_1")
          .close();
      }
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.Message ||
          "Something went wrong"
      );
    }
  };


  // =========================
  // DELETE SUBJECT
  // =========================

  const handleDeleteSubject = async (id) => {
    try {
      const { data } =
        await subjectBaseUrl.delete(
          `/${id}`
        );

      if (data.success) {
        setSubjects((prev) =>
          prev.filter(
            (subject) =>
              subject._id !== id
          )
        );
      }
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.Message ||
          "Unable to delete subject"
      );
    }
  };


  return (
    <div>

      {/* ================= HEADER ================= */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-semibold">
            Subjects
          </h1>

          <p className="text-gray-500">
            Find your subject
          </p>
        </div>


        <button
          className="btn btn-primary"
          onClick={() =>
            document
              .getElementById("my_modal_1")
              .showModal()
          }
        >
          Add Subject
        </button>

      </div>


      {/* ================= CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {subjects.map((subject) => (

          <div
            key={subject._id}
            className="card bg-base-100 shadow-md border border-gray-200"
          >

            <div className="card-body">

              {/* Name + Delete */}

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor:
                        subject.color,
                    }}
                  ></div>

                  <h2 className="text-xl font-semibold">
                    {subject.name}
                  </h2>

                </div>


                <button
                  onClick={() =>
                    handleDeleteSubject(
                      subject._id
                    )
                  }
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>

              </div>


              {/* Progress */}

              <div className="mt-4">

                <div className="flex justify-between items-center mb-2">

                  <h3 className="font-medium">
                    Completion Progress
                  </h3>

                  <span className="font-semibold">
                    {subject.progress || 0}%
                  </span>

                </div>


                <progress
                  className="progress progress-primary w-full"
                  value={
                    subject.progress || 0
                  }
                  max="100"
                ></progress>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================= MODAL ================= */}

      <dialog
        id="my_modal_1"
        className="modal"
      >

        <div className="modal-box">

          <h3 className="font-bold text-xl mb-5">
            Add Subject
          </h3>


          {/* Subject Name */}

          <div className="mb-4">

            <label className="block font-semibold mb-2">
              Subject Name
            </label>

            <input
              type="text"
              placeholder="Enter subject name"
              value={subjectName}
              onChange={(e) =>
                setSubjectName(
                  e.target.value
                )
              }
              className="input input-bordered w-full"
            />

          </div>


          {/* Color */}

          <div className="mb-5">

            <label className="block font-semibold mb-2">
              Color
            </label>

            <input
              type="color"
              value={subjectColor}
              onChange={(e) =>
                setSubjectColor(
                  e.target.value
                )
              }
              className="w-full h-12 border rounded cursor-pointer"
            />

          </div>


          {/* Buttons */}

          <div className="flex justify-end gap-2">

            <button
              onClick={() =>
                document
                  .getElementById("my_modal_1")
                  .close()
              }
              className="btn btn-outline"
            >
              Cancel
            </button>


            <button
              onClick={handleAddSubject}
              className="btn btn-primary"
            >
              Add Subject
            </button>

          </div>

        </div>


        {/* Outside click */}

        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>close</button>
        </form>

      </dialog>

    </div>
  );
};

export default Subject;