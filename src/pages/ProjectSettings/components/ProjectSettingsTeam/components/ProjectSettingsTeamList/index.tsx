import React, { useState } from "react";
import { Box, Button, Divider, List, Paper } from "@mui/material";
import AddIcon from "icons/AddIcon";
import ProjectSettingsTeamAdd from "../ProjectSettingsTeamAdd";
import useProjectTeamList from "hooks/useProjectTeamList";
import ListContainer from "components/ListContainer";
import ProjectSettingsTeamListRow from "../ProjectSettingsTeamListRow";
import useProjectByUser from "hooks/useProjectByUser";

export default function ProjectSettingsTeamList() {
  const [teamAddPopup, setTeamAddPopup] = useState(false);
  const { isLoading, data, error } = useProjectTeamList(true, {
    retry: false,
  });
  const { data: projectByUser, isLoading: isProjectFetching } =
    useProjectByUser();

  const isProjectOwner = !!projectByUser?.length;

  return (
    <>
      <ListContainer loading={isLoading || isProjectFetching} error={error}>
        {isProjectOwner ? (
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
        ) : null}

        <Paper sx={{ mb: 4 }}>
          <List>
            {data?.map((member, index) => (
              <React.Fragment key={member.id}>
                {index > 0 && <Divider />}
                <ProjectSettingsTeamListRow
                  member={member}
                  projectOwner={isProjectOwner}
                />
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
