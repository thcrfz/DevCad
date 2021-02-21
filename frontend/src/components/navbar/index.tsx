import {
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Divbutton, Navbar } from "./styles";
import Link from "next/link";
import { MeetingRoomRounded } from "@material-ui/icons";

export default function NavBar() {
  return (
    <Navbar>
      <Toolbar>
        <Typography variant="h5">DevCad</Typography>
        <Divbutton>
          <Link href="/register">
            <Button variant="text">Cadastrar desenvolvedor</Button>
          </Link>
        </Divbutton>
        <InputBase placeholder="Search…" />
        <IconButton>
          <MeetingRoomRounded />
        </IconButton>
      </Toolbar>
    </Navbar>
  );
}
