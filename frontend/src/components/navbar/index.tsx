import { Button, Toolbar, Typography } from "@material-ui/core";
import { Navbar } from "./styles";
import { MeetingRoomRounded } from "@material-ui/icons";

export type logoutProps = {
  handleLogout: () => void;
};

export default function NavBar({ handleLogout }: logoutProps) {
  return (
    <Navbar>
      <Toolbar>
        <Typography variant="h6">DevCad</Typography>
        <Button onClick={handleLogout} className="btn-logout">
          Logout
          <MeetingRoomRounded />
        </Button>
      </Toolbar>
    </Navbar>
  );
}
