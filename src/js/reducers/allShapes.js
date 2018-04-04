export default function(state=[], action) {
    switch (action.type) {
        case 'LOAD_SHAPES': {
            return action.shapes.split('||');
        }

        default: return state;
    }
}
