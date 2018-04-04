export default function(state=true, action) {
    switch (action.type) {
        case 'TOP_LAYER': {
            return action.value;
        }

        default: return state;
    }
}
