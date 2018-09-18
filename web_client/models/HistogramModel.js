import Model from 'girder/models/Model';

var HistogramModel = Model.extend({
    resourceName: 'histogram',
    defaults: {
        hist: [],
        binEdges: [],
        bins: null,
        label: null,
        loading: false,
        bitmask: false
    }
});

export default HistogramModel;
