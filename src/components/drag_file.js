import React, { useState, useRef } from "react";

const Drag_Drop_Files = () => {
  const [files, set_Files] = useState(null);
  const inputRef = useRef();

  const Drag = (event) => {
    event.preventDefault();
  };

  const Drop = (event) => {
    event.preventDefault();
    set_Files(event.dataTransfer.files);
  };

  const Upload = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("Files", files[i]);
    }

    // Send the files to the server using a POST request
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error uploading files:", error));
  };

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => set_Files(null)}>Cancel</button>
          <button onClick={Upload}>Upload</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="dropzone"
        onDragOver={Drag}
        onDrop={Drop}
        onClick={() => inputRef.current.click()}
      >
        <h1>Drag and drop your files</h1>
        <input
          type="file"
          multiple
          onChange={(event) => set_Files(event.target.files)}
          hidden
          accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
          ref={inputRef}
        />
        <button>Select Files</button>
      </div>
    </>
  );
};

export default Drag_Drop_Files;
