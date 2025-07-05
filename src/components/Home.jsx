import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const   projects = [
  { title: "Flags", path: "/flags", description: "Helps search flag of any country" },
  { title: "States", path: "/states", description: "Helps select city of any country" },
  { title: "Fullname", path: "/fullname", description: "Returns combination of first name and last name" },
  { title: "Calculator", path: "/calculator", description: "Basic Calculator App" },
  { title: "Counter", path: "/counter", description: "Simple counter App" },
  { title: "ClassCounter", path: "/classcounter", description: "Simple counter app as react class components" },
  { title: "Pagination", path: "/pagination", description: "Display paginated Employees data" },
  { title: "Login", path: "/login", description: "Basic login page with preset authentication details" },
  { title: "Stopwatch", path: "/stopwatch", description: "Simple Stop Watch with start and reset feature" },
  { title: "Weather", path: "/weather", description: "Fetch weather details of any city in the world" },
  { title: "SpellCheck", path: "/spellcheck", description: "Basic spell check app with preset words" },
  { title: "Dictionary", path: "/dictionary", description: "Basic dictionary with preset words" },
  { title: "Table", path: "/table", description: "Simple Table for displayig information" },
  { title: "Modal", path: "/modal", description: "Basic Modal" }
]

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects.map((project, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home