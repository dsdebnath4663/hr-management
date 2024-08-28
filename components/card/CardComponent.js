
import React, { useRef } from 'react';
import { IconButton, Typography, Card, CardContent } from '@mui/material';

import UploadIcon from '@mui/icons-material/Upload';
import "./card.css"

const CardComponent = () => {

  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="card-container">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="card">
          <Typography className="text-label">Label {index + 1}</Typography>
          <CardContent className="upload-container">
            <IconButton className="upload-icon">
              <UploadIcon onClick={handleFileInputClick}
              />
            </IconButton>
            <Typography
              variant="body1"
              className="upload-text"
              onClick={handleFileInputClick}
            >
              {/* Drag & Drop or choose file to upload */}
              Drag & Drop or <span className="choose-file-text">choose file</span> to upload
            </Typography>
            <input
              type="file"
              className="hidden-file-input"
              ref={fileInputRef}
              onChange={(e) => console.log(e.target.files)} // Handle file selection
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
