import "./Settings.css"
import {faq, Faq} from "../../services/faq.ts";
import useData from "../../hooks/useData.ts";
import {Box, Typography} from "@mui/material";


function FaqComponent({faq}: {faq: Faq}) {

  const answer = faq.answer.replace('Discord', '<a target={"_blank"} href={discordLink}>Discord</a>')

  return (
    <div className={"faq-container"}>
      <Typography variant={'h4'} component={'h4'}>{faq.question}</Typography>
      <Typography variant={'subtitle2'} component={'p'} dangerouslySetInnerHTML={{__html: answer}}/>
    </div>
  )
}

function SettingsPage() {

  const {data} = useData()

  return (
    <Box className={"settings-container"} tabIndex={-1}>
      <div>
        <Typography variant={'h5'} component={'h2'}>Frequently Asked Questions</Typography>
        {faq.map((faq, i) => <FaqComponent faq={faq} key={i}/>)}
      </div>

      <div className={"versions-container"}>
        <p>Version: <span>{data.version}</span></p>
        <p>Game version: <span>{data["game-version"]}</span></p>
        <p>Last updated: <span>{new Date(data["last-update"]).toLocaleString()}</span></p>
      </div>
    </Box>
  );
}

export default SettingsPage;
