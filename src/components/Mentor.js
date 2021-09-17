import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Brandon from './Brandon.jpg';
import Andrew from './Andrew.jpg';
import Jenny from './Jenny.jpg';
import Lening from './Lening.jpg'

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: 380,
  //   },
  container: {
    display: 'flex',
    backgroundColor: 'black'
  },
  paper: {
    margin: theme.spacing(1),
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,

    root: {
      maxWidth: 155,
      marginTop: '40px',
    },
    media: {
      height: 70,
    },
  },
}));

function Mentor() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <center>
	  <h1>Find Your Mentor</h1>
        <div class="float-container" style={{
          padding: '20px'
        }}>
          <div class="float-child" style={{
            width: '25%',
            float: 'left',
            padding: '20px', marginRight: "80px", marginLeft: "80px"
          }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 440, width: 370 }}
                  className={classes.media}
                  image={Andrew}
                  title="Photo of Founder"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">
                    Andrew McAllister, Software Engineer at JPMorgan
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    I am an entrepreneur and small business owner with a variety of skills in management and business acumen. After growing my business from the ground up for the past 14 years, the pandemic forced my business to close for three months which opened an opportunity for me to focus on building my technical skills and switch careers. I decided to enroll into Flatiron School Bootcamp to become a Full Stack Engineer. As a life long learner, I wanted to challenge myself and further develop my skill set. I have always had a passion for technology, computers, and gaming.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/mnopprapun" target="_blank" >
                  Contact Me
                </Button>
                <Button size="small" color="primary" href="https://www.linkedin.com/in/marc-nopprapun-5626a5214/" target="_blank" >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="float-child" style={{
            width: '25%',
            float: 'left',
            padding: '20px', marginRight: "80px"
          }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 440, width: 370 }}
                  className={classes.media}
                  image="https://media-exp1.licdn.com/dms/image/C5603AQE06YLnG-sz6A/profile-displayphoto-shrink_200_200/0/1564611307314?e=1633564800&v=beta&t=xTlGSicxw8j9_5v01yAWqjShT8CKIRpJiZjN5rwl_hQ"
                  title="Photo of Founder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Selam Degefu, Software Engineer at JPMorgan 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Born and Raised in Addis Ababa, Ethiopia with 6 siblings, I was known in the house for always solving problems and being my dad's "right hand". My love for problem solving pushed me to work with different types of client throught my career journey. Programming has always been something I wanted to pursue so I left my full-time role this year to start software engineering at Flatiron School. I am excited to build cool innovative application that solves real world problems. When I am not coding, I love traveling and spending time with my 5 sisters. So excited to join the workforce soon.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/SealmDegefu" target="_blank" >
                  Contact Me
                </Button>
                <Button size="small" color="primary" href="https://www.linkedin.com/in/selamdegefu/" target="_blank" >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="float-child" style={{
            width: '25%',
            float: 'left',
            padding: '20px'
          }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 440, width: 370 }}
                  className={classes.media}
                  image={Brandon}
                  title="Founder Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Brandon Barnes, Software Engineer at JPMorgan 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    My name is Brandon Barnes and I am a junior full stack developer. I am currently a senior at the University of Houston where i am majoring in Computer Information Systems. I am also a graduate in the Software engineering program at Flatiron school. I have had experience building fullstack application using different languages like Java, React, JS, PostgreSQL, HTML, CSS, and etc... I look forward to applying my experience throughout the projects I have been apart of on the job. When im not typing away at my keyboard you can find me hanging out with family, working out, or reading.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/jaym832" target="_blank" >
                 Contact Me
                </Button>
                <Button size="small" color="primary" href="https://www.linkedin.com/in/javier-j-marin/" target="_blank" >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </div>
		  <div class="float-child" style={{
            width: '25%',
            float: 'left',
            padding: '20px', marginRight: "80px"
          }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 440, width: 370 }}
                  className={classes.media}
                  image={Jenny}
                  title="Photo of Founder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jenny Finch, Software Engineer at JPMorgan 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
				  Jenny is a software engineer with extensive experience and management skills andworks for a hi-tech telecommunication company. The company develops and sellssolutions that enable service providers to efficiently deliver high quality voice anddata services over broadband access networks while leveraging investment in theirnetwork infrastructure. As a senior software engineer she is responsible for the development of management software products produced by the company. Jenny has aB.Sc. in Computer Sciences from the Academic College of Tel-Aviv Jaffa (1997).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/SealmDegefu" target="_blank" >
                  Contact Me
                </Button>
                <Button size="small" color="primary" href="https://www.linkedin.com/in/selamdegefu/" target="_blank" >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </div>
		  <div class="float-child" style={{
            width: '25%',
            float: 'left',
            padding: '20px', marginRight: "80px"
          }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 440, width: 370 }}
                  className={classes.media}
                  image={Lening}
                  title="Photo of Founder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lening Rodas, Software Engineer at JPMorgan 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
				  Lening is a software engineer with extensive experience and management skills andworks for a hi-tech telecommunication company. The company develops and sells solutions that enable service providers to efficiently deliver high quality voice anddata services over broadband access networks while leveraging investment in theirnetwork infrastructure. As a senior software engineer he is responsible for the development of management software products produced by the company. Jenny has aB.Sc. in Computer Sciences from the Academic College of Tel-Aviv Jaffa (1997).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/SealmDegefu" target="_blank" >
                  Contact Me
                </Button>
                <Button size="small" color="primary" href="https://www.linkedin.com/in/selamdegefu/" target="_blank" >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </div>	  
        </div>
      </center>
    </div>
  )
}

export default Mentor;