"use client";
import React, { useRef, useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Model";

const FileUpload = () => {
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpload = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    setSelectedFile(droppedFile);
  };

  return (
    <>
      <div
        className={`w-full animate bg-bhumio-light h-[25vh] rounded flex items-center justify-center cursor-pointer ${
          isDragging ? "border-2 border-dashed border-bhumio-primary" : ""
        }`}
        onClick={handleUpload}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-primary font-medium text-primary text-gray-700">
          {isDragging
            ? "Drop the file here"
            : selectedFile
            ? `File selected: ${selectedFile.name}`
            : "Drag and drop your files here or click to upload"}
        </p>
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>
      <div>
        {selectedFile && (
          <div className="mt-4">
            <Button
              title={"Preview"}
              trigger={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        )}
        <Modal isOpen={isOpen} setOpen={setIsOpen}>
          <div className="my-5 h-[50vh] rounded overflow-hidden border">
            hello
            {selectedFile ? (
              <embed
                src={URL.createObjectURL(selectedFile)}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            ) : null}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default FileUpload;
