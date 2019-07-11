import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';


class Article extends React.Component {
  render() {
    return (
        <Box p={3}>
      <div>

        <Card>
          <Box m={3}>

          <Grid container spacing={2}>
            <Grid item>
                <img
                  alt={this.props.item.title}
                  src={this.props.item.urlToImage}
                  width="300px"
                  height="auto"
                />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      {this.props.item.title}
                    </Box>
                  </Typography>

                  <Typography max-width="400px" variant="body2">
                    <Box pt={3}>                 
                         {this.props.item.content}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ textAlign: "right", overflow: "hidden" }}
                >
                  {this.props.item.author && (
                    <React.Fragment>{this.props.item.author}</React.Fragment>
                  )}
                </Typography>{" "}
              </Grid>
            </Grid>
          </Grid>
          </Box>
        </Card>
      </div>
      </Box>
    );
  }
}

export default Article;
