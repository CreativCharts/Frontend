import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import ChartDisplay from "../components/displays/chartDisplay/ChartDisplay.jsx";
import {DashboardDisplay} from "../components/displays/dashboardDisplay/DashboardDisplay.jsx";
import App from "../App.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Dashboard">
                <Dashboard/>
            </ComponentPreview>
            <ComponentPreview path="/ChartDisplay">
                <ChartDisplay/>
            </ComponentPreview>
            <ComponentPreview path="/DashboardDisplay">
                <DashboardDisplay/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
