import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Navbar from "components/Navbar";
import AddIcon from "icons/AddIcon";
import { useState } from "react";
import AddProject from "./components/AddProject";
import { cssColor } from "utils/colors";
import ProjectList from "./components/ProjectList";
import PageContainer from "components/PageContainer";

export default function Projects() {
  const [openAddProjectPopup, setOpenAddProjectPopup] = useState(false);

  const handleToggleProjectPopup = () => {
    setOpenAddProjectPopup((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <Box
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography display="block" color="white">
            All Projects
          </Typography>
          <Tooltip title="Add new project">
            <IconButton
              onClick={handleToggleProjectPopup}
              sx={{
                backgroundColor: cssColor("paper"),
                "&:hover": {
                  backgroundColor: cssColor("paper"),
                },
              }}
            >
              <AddIcon color={cssColor("secondary")} />
            </IconButton>
          </Tooltip>
        </Box>

        <ProjectList />
      </PageContainer>
      {openAddProjectPopup ? (
        <AddProject onClose={() => setOpenAddProjectPopup(false)} />
      ) : null}
    </>
  );
}
