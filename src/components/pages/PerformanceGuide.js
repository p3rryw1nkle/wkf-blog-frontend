import React from 'react'
import Grid from '@mui/material/Grid';
import "./Pages.css"
// import useMatchMedia from '../../tools/matchMedia';

// MATERIAL UI ACCORDIAN STUFF
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import performanceGuide from "../pdfs/performance_guide.pdf"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import "./Pages.css"

export default function PerformanceGuide() {
  // const resize = useMatchMedia(900);
  
  return (
    <div className="humanistic-font">
      <Grid container justifyContent="center" marginTop={10} marginBottom={10} maxHeight="1800px" display="flex">
        <Grid container justifyContent="center" xs={12} marginBottom={5}>
          <a href={performanceGuide} className="downloadLink" download>
            Click to download
          </a>
        </Grid>
        <Grid container justifyContent="center" maxHeight="1800px" xs={10}>
          <Grid container justifyContent="center" maxHeight="1800px" xs={10}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer fileUrl={performanceGuide} />;
            </Worker>
          </Grid>   
        </Grid>
      </Grid>
    </div>
  )
}
