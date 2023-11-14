import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Dashboard from "../pages/Dashboard.jsx";
import ChartDisplay from "../components/charts/ChartDisplay.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Dashboard">
                <Dashboard/>
            </ComponentPreview>
            <ComponentPreview path="/ChartDisplay">
                <ChartDisplay/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
