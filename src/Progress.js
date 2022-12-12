import React from 'react'

function Progress({title,pr,bg,per}) {
  return (
  <>

        <h4 class="small font-weight-bold">{title} <span
                class="float-right">{pr}</span></h4>
        <div class="progress mb-4">
            <div class={`progress-bar bg-${bg}`} role="progressbar" style={{width:per}}
                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        
      
  </>
  )
}

export default Progress
