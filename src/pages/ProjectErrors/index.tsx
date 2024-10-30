import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Navbar from "components/Navbar";
import BugIcon from "icons/BugIcon";
import { cssColor } from "utils/colors";
import ErrorTable from "./components/ErrorTable";
import { useParams } from "react-router-dom";
import Copy from "components/Copy";
import PageContainer from "components/PageContainer";

export default function ProjectErrors() {
  const { projectId } = useParams();

  return (
    <>
      <Navbar />
      <PageContainer>
        <Grid container rowSpacing={3}>
          <Grid size={12}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              color={cssColor("textPrimary")}
            >
              <BugIcon fontSize="large" />
              <Box>
                <Typography variant="h1">Incidents</Typography>
                <Typography color={cssColor("textSecondary")}>
                  List of incidents catched by ErrorSnap connected to your
                  project
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={12}>
            <Box maxWidth={"200px"}>
              <Typography variant="h6">Project Id</Typography>
              <Copy>
                <Typography color="textSecondary">{projectId}</Typography>
              </Copy>
            </Box>
          </Grid>

          <Grid size={12}>
            <ErrorTable />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
