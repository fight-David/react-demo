import { useContext } from "react"
import Accordian from "../accordian"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tact-toe/video"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"

export default function FeatureFlags() {

    const {
        loading, enabledFlags
    } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
} 