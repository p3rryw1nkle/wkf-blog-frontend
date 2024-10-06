import React from 'react'
import Grid from '@mui/material/Grid';
import "./Pages.css"

import voiceGuide from "../pdfs/train_your_voice.pdf"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function VocalGuide() {

  return (
    <div className="humanistic-font">
      <Grid container justifyContent="center" minHeight="2000px" marginTop={10} marginBottom={10} display="flex">
        <Grid container justifyContent="center" xs={12} marginBottom={5}>
          <a href={voiceGuide} className="downloadLink" download>
            Click to download
          </a>
        </Grid>
        <Grid container justifyContent="center" minHeight="1800px" maxHeight="1800px" xs={10}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer fileUrl={voiceGuide} />;
          </Worker>
        </Grid>
      </Grid>
    </div>
  )
}
