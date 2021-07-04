window.addEventListener('load', function() {
    console.log('loaded')

    const g = document.getElementById('g')
    const coeff = document.getElementById('coeff')
    const path = document.getElementById('path')
    const v0Unit1 = document.getElementById('v0Unit1')
    const v0Unit2 = document.getElementById('v0Unit2')

    let valG = g.value
    let valCoeff = coeff.value
    let valPath = path.value
    let valV0Unit1 = 0
    let valV0Unit2 = 0

    CalcAndUpdate(  )
    
    g.addEventListener('keyup', function( event ) {
        valG = event.target.value
        CalcAndUpdate( )
    })
    g.addEventListener('click', function( event ) {
        valG = event.target.value
        CalcAndUpdate( )
    })

    coeff.addEventListener('keyup', function( event ) {
        valCoeff = event.target.value
        CalcAndUpdate( )
    })
    coeff.addEventListener('click', function( event ) {
        valCoeff = event.target.value
        CalcAndUpdate( )
    })

    path.addEventListener('keyup', function( event ) {
        valPath = event.target.value
        CalcAndUpdate( )
    })
    path.addEventListener('click', function( event ) {
        valPath = event.target.value
        CalcAndUpdate( )
    })

    function CalcAndUpdate(  ) {
         valV0Unit1 = Math.sqrt( 2 * valG * valCoeff * valPath )
         valV0Unit2 = valV0Unit1 * 3600 / 1000
         valV0Unit1 = valV0Unit1.toFixed(2)
         valV0Unit2 = valV0Unit2.toFixed(2)
        console.log(valV0Unit1, valV0Unit2)

        v0Unit1.value = valV0Unit1
        v0Unit2.value = valV0Unit2
    }

})