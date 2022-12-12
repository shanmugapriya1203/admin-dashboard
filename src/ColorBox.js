import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

function ColorBox({title,bg,text,code}) {
  return (
    <>
    
    <div class="col-lg-6 mb-4">
                                    <div class={`card bg-${bg} text-white shadow`}>
                                        <div class="card-body">
                                           {title}
                                            <div class={`text-${text}-50 small`}>{code}</div>
                                        </div>
                                    </div>
                                    </div>
                                
                               
    </>
  )
}

export default ColorBox
