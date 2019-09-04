import * as countries from './countries/countries_svg.json'
import * as countryNames from './countries/country_names.json'

figma.showUI(__html__);

function createFlag (country: String) {
    let nodes: SceneNode[] = []
    let flag = figma.createNodeFromSvg(countries['default'][country.toLocaleLowerCase()])
    flag.name = countryNames['default'][country]
    let markUp: number;
    let targetWidth = flag.width
    
    // Size em, make them width of 1000px to ensure uniform size
    markUp = 1000/targetWidth
    flag.resize(flag.width * markUp, flag.height * markUp)
    nodes.push(flag)
    figma.currentPage.selection = nodes
}

figma.ui.onmessage = (message) => {
    if (message.message === 'create-flag') {
        createFlag(message.country)
    } 
}