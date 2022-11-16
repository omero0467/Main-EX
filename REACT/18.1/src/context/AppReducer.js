export default function AppReducer (state, action) {
    switch (action.type) {
        case 'remove_listing':
            return {
                listings: state.listings.filter((item)=>item.id!==action.payload)
            }
        case 'add_listing':
            return {
                listings: [action.payload, ...state.listings]
            }

            case 'edit_listing':
                const editedListing = action.payload
                const updatedList= state.listings.map((item)=>{
                    if(item.id === editedListing.id){
                        return editedListing
                    }
                    return item
                })

                return {
                    listings: updatedList
                }
                
        default:
            return state
    }
}
//  AppReducer
