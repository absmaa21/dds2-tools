import {Hideout} from "../../types/data.ts";
import {Icon, Typography} from "@mui/material";
import Row from "../Row.tsx";
import {AccountBalance, Apartment, LocalParking, Phone, WaterDrop, Yard} from "@mui/icons-material";
import {ReactNode} from "react";


const icons: Map<keyof Hideout, ReactNode> = new Map([
  ['phoneline', <Phone/>],
  ['running-water', <WaterDrop/>],
  ['garden', <Yard/>],
  ['parking-spot', <LocalParking/>],
  ['is_apartment', <Apartment/>],
  ['vault', <AccountBalance/>],
])

interface HideoutDrawerHeaderProps {
  hideout: Hideout,
}

export function HideoutDrawerHeader({hideout}: HideoutDrawerHeaderProps) {

  const iconKeys: (keyof Hideout)[] = ["phoneline", "running-water", "garden", "parking-spot", "is_apartment", "vault"]

  return (<>
    <Typography variant={'h5'} component={'h3'}>B {hideout.price.toLocaleString()}</Typography>

    <Row style={{justifyContent: 'center', marginBottom: 8, gap: 8}}>
      {iconKeys.map(k => hideout[k] && <Icon key={k} title={k} color={'disabled'}>{icons.get(k)}</Icon>)}
    </Row>
  </>)
}


interface HideoutDrawerProps {
  hideout: Hideout,
}

function HideoutDrawer({hideout}: HideoutDrawerProps) {
  // just to prevent unused errors
  return (
    <div>{hideout.name ? '' : 'Name is missing'}</div>
  );
}

export default HideoutDrawer;