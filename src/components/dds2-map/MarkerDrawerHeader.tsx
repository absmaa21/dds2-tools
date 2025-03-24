import {ChoosableMarkers} from "../../types/map.ts";
import {Typography} from "@mui/material";

interface Props {
  marker: ChoosableMarkers,
}

function MarkerDrawerHeader({marker}: Props) {

  if (!marker) return null

  return (
    <>
      <Typography variant={"h6"} component={"h3"} fontWeight={700}>{marker.name}</Typography>
      <Typography variant={"subtitle1"} component={"h4"} noWrap fontWeight={700} fontSize={14}
                  letterSpacing={1} color={'#fff5'}>
        {marker.area}
      </Typography>
    </>
  );
}

export default MarkerDrawerHeader;