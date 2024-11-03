import { Box, Typography } from "@mui/material";
import TabsContainer from "components/TabsContainer";
import { useState } from "react";
import { cssColor } from "utils/colors";
import ProjectSettingsTeamList from "./components/ProjectSettingsTeamList";
import UsersIcon from "icons/UsersIcon";
import WatchIcon from "icons/WatchIcon";
import ProjectSettingsTeamPendingList from "./components/ProjectSettingsTeamPendingList";

export default function ProjectSettingsTeam() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleChange = (_event, value: number) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Typography mb={1} variant="h5">
        Members
      </Typography>
      <Typography>Members Manage team members and invitations</Typography>
      <Box sx={{ my: 2, borderBottom: 1, borderColor: cssColor("divider") }}>
        <TabsContainer value={currentTab} onChange={handleChange}>
          <TabsContainer.item Icon={UsersIcon} label="Team Members" value={1} />
          <TabsContainer.item
            Icon={WatchIcon}
            label="Pending Invitations"
            value={2}
          />
        </TabsContainer>
      </Box>

      {currentTab === 1 ? (
        <ProjectSettingsTeamList />
      ) : (
        <ProjectSettingsTeamPendingList />
      )}
    </>
  );
}
