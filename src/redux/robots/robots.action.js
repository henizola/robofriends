
export const searchRobots=searchField=>({
    type:'SEARCH_ROBOT',
    payload:searchField
})


export const filterRobot=robot=>({
    type:'SET_FILTERD_ROBOT',
    payload:robot
})