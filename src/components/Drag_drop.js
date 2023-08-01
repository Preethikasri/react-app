import { useState, useRef } from "react";

const Drag_Drop_Files = () => 
{
  const [files, set_Files] = useState(null);
  const inputRef = useRef();

  const Drag= (event) => {
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
    console.log(formData.getAll("Files")); 
  };

  if (files) 
  {
    return (
      <div class_name="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (<li key={idx}>{file.name}</li>))}
        </ul>
        <div class_name="actions">
          <button onClick={() => set_Files(null)}>Cancel</button>
          <button onClick={Upload}>Upload</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div class_name="dropzone" Drag_file={Drag} Drop_file={Drop}>
        <h1>Drag and drop your files</h1>
        <input
          type="file"
          multiple
          onChange={(event) => set_Files(event.target.files)}
          hidden
          accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>Select Files</button>
      </div>
    </>
  );
};

export default Drag_Drop_Files;
