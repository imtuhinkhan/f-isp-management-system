class ComponentSlider {

    static init() {
        const horizonPrimary = document.getElementById('horizon-primary');
        const verticalPrimary = document.getElementById('vertical-default');
        const rangeSlider = document.getElementById('range-slider');
        const stepSlider = document.getElementById('step-slider');

        noUiSlider.create(horizonPrimary, {
            start: 60,
            connect: "lower",
            step: 1,
            range: {
                'min': 0,
                'max': 100
            }
        });

        noUiSlider.create(verticalPrimary, {
            start: 60,
            connect: "lower",
            orientation: 'vertical',
            step: 1,
            range: {
                'min': 0,
                'max': 100
            }
        });

        noUiSlider.create(stepSlider, {
            start: 20,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            },
            pips: {
                mode: 'values',
                values: [0,10,20,30,40,50,60,70,80,90,100],
                density: 10
            }
        });

        noUiSlider.create(rangeSlider, {
            connect: true,
            behaviour: 'tap',
            start: [ 300, 800 ],
            range: {
                'min': [ 0 ],
                'max': [ 1000 ]
            }
        });

        const nodes = [
            document.getElementById('range-min'), // 0
            document.getElementById('range-max')  // 1
        ];

        // Display the slider value and how far the handle moved
        // from the left edge of the slider.
        rangeSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            nodes[handle].innerHTML = '$' + values[handle] ;
        });
    }
}

$(() => { ComponentSlider.init(); });

