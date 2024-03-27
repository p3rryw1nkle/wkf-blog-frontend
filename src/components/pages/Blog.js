import React, {useState} from 'react'
import PerformanceVlog1 from "../blogPosts/PerformanceVlog1"
import PerformanceVlog2 from '../blogPosts/PerformanceVlog2';
import PerformanceVlog3 from '../blogPosts/PerformanceVlog3';
import PerformanceVlog4 from '../blogPosts/PerformanceVlog4';
import PerformanceVlog5 from '../blogPosts/PerformanceVlog5';
import VocalAnalysis1 from "../blogPosts/VocalAnalysis1"
import VocalAnalysis2 from '../blogPosts/VocalAnalysis2'
import VocalAnalysis3 from '../blogPosts/VocalAnalysis3'
import VocalAnalysis4 from '../blogPosts/VocalAnalysis4'
import VocalAnalysis5 from '../blogPosts/VocalAnalysis5'
import VocalAnalysis6 from '../blogPosts/VocalAnalysis6'
import SchemaSketch1 from "../blogPosts/SchemaSketch1"
import SchemaSketch2 from "../blogPosts/schemaSketch2"
import SchemaSketch3 from "../blogPosts/schemaSketch3"
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import "./Pages.css"
import useMatchMedia from '../../tools/matchMedia';

// returns a preset of blog posts depending on the 'sortBy' prop.
const getFilteredPosts = (sortBy, posts) => {

  let filteredPosts = posts;

  console.log(sortBy)

  switch (sortBy) {
    case "schema":
      filteredPosts = [<SchemaSketch1/>, <SchemaSketch2/>, <SchemaSketch3/>];
      break;
    case "vlog":
      filteredPosts = [<PerformanceVlog1/>, <PerformanceVlog2/>, <PerformanceVlog3/>, <PerformanceVlog4/>, <PerformanceVlog5/>];
      break;
    case "vocal":
      filteredPosts = [<VocalAnalysis1/>, <VocalAnalysis2/>, <VocalAnalysis3/>, <VocalAnalysis4/>, <VocalAnalysis5/>, <VocalAnalysis6/>];
      break;
    default:
      filteredPosts = posts;
  }

  return filteredPosts;
}

export default function Blog() {
  const posts = [<SchemaSketch1/>, <PerformanceVlog1/>, <VocalAnalysis1/>, 
  <PerformanceVlog2/>, <VocalAnalysis2/>, <PerformanceVlog3/>, 
  <VocalAnalysis3/>,  <SchemaSketch2/>, <VocalAnalysis4/>, <PerformanceVlog4/>,
  <VocalAnalysis5/>, <VocalAnalysis6/>, <SchemaSketch3/>, <PerformanceVlog5/>]

  const [sortBy, setSort] = useState('');
  const filteredPosts = getFilteredPosts(sortBy, posts);

  const renderPosts = filteredPosts.map((post) => {
    return (
        <Grid container item xs={12} justifyContent="center">
            {post}
        </Grid>
    )
  })

  const resize = useMatchMedia(900);

  return (
    <div>
        <Grid item container spacing={2} marginTop={resize ? 10 : 5} marginBottom={resize ? 10 : 5} justifyContent="center">
          <Grid item xs={4}>
            <FormControl fullWidth backgroundColor="#FFFFFF">
                <InputLabel id="sort-select-label" backgroundColor="#FFFFFF">Filter Posts</InputLabel>
                <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    value={sortBy}
                    label="Post Type"
                    onChange={(event: SelectChangeEvent) => {
                        setSort(event.target.value)
                    }}
                    backgroundColor="#FFFFFF"
                >
                    <MenuItem value={"schema"}>Schemas</MenuItem>
                    <MenuItem value={"vocal"}>Vocal Analysis</MenuItem>
                    <MenuItem value={"vlog"}>Performance Vlogs</MenuItem>
                    <MenuItem value={""}>All</MenuItem>
                </Select>
            </FormControl>
          </Grid>
          
          {renderPosts}

        </Grid>
    </div>
  )
}
