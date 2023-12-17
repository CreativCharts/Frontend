// Impressions.jsx
import './Impressions.css';
import {IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Impressions() {
    return (
        <div className="impressions">
            <h1>Impressum</h1>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Patrik Veliki<br/>
                Leogangerstrasse 34<br/>
                Saalfelden am Steinernen Meer<br/>
                A-5760<br/>
            </p>

            <h2>Kontakt</h2>
            <p>Telefon: 0664/25 17185<br/>
                E-Mail: <a href="mailto:  patrik.veliki@presono.com">
                    patrik.veliki@presono.com
                </a>
            </p>
            <div>

            </div>
            <h2>Haftung für Inhalte</h2>
            <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte<br/>
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p>
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,<br/>
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach<br/>
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <div className='github-icon-button'>
                <IconButton
                    href='https://github.com/CreativCharts'
                >
                    <GitHubIcon/>
                </IconButton>
            </div>
        </div>
    );
}
