import React, { useState } from "react";
import { Box, Button, Divider, List, Paper } from "@mui/material";
import AddIcon from "icons/AddIcon";
import ProjectSettingsTeamAdd from "../ProjectSettingsTeamAdd";
import useProjectTeamList from "hooks/useProjectTeamList";
import ListContainer from "components/ListContainer";
import ProjectSettingsTeamListRow from "../ProjectSettingsTeamListRow";

export default function ProjectSettingsTeamList() {
  const [teamAddPopup, setTeamAddPopup] = useState(false);
  const { isFetching, data, error } = useProjectTeamList();

  return (
    <>
      <ListContainer loading={isFetching} error={error?.message}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon fontSize={18} />}
            onClick={() => setTeamAddPopup(true)}
          >
            Invite Member
          </Button>
        </Box>

        <Paper sx={{ mb: 4 }}>
          <List>
            {data.map((member, index) => (
              <React.Fragment key={member.id}>
                {index > 0 && <Divider />}
                <ProjectSettingsTeamListRow member={member} />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </ListContainer>

      {teamAddPopup ? (
        <ProjectSettingsTeamAdd onClose={() => setTeamAddPopup(false)} />
      ) : null}
    </>
  );
}
