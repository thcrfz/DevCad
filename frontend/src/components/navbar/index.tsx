import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Divbutton, Navbar } from "./styles";
import Link from "next/link";
import { MeetingRoomRounded } from "@material-ui/icons";
import { register } from "../../config/routes";

export default function NavBar() {
  return (
    <Navbar>
      <Toolbar>
        <Typography variant="h5">DevCad</Typography>
        <Divbutton>
          <Link href={register}>
            <Button variant="text">Cadastrar desenvolvedor</Button>
          </Link>
        </Divbutton>
        <IconButton>
          <MeetingRoomRounded />
        </IconButton>
      </Toolbar>
    </Navbar>
  );
}
