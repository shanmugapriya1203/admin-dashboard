import React from 'react'
import ColorBox from './ColorBox'
import Progress from './Progress'

function Projects() {
  return (
  <>
     <div class="row">


<div class="col-lg-6 mb-4">

   
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div class="card-body">
 <Progress title="Server Migration" pr="20%" bg="danger" per="20%"/>
  <Progress title="Sales Tracking" pr="40%" bg="warning" per="40%"/>
  <Progress title="Customer Database" pr="60%" bg="primary" per="60%" />
  <Progress title="Payout Details" pr="80%"  bg="info" per="80%"/>
  <Progress title="Account Setup" pr="Complete!"bg="success" per="100%"/>

        </div>
    </div>


    <div class="row">
    <ColorBox title="Primary" bg="primary" text="white"          code="#4e73df"/>
                              <ColorBox title="Success" bg="success"text="white"           code="#1cc88a"/>
                              <ColorBox title="Info" bg="info"text="white"                 code="#36b9cc"/>
                              <ColorBox title="Warning" bg="warning"text="white"           code="#f6c23e"/>
                              <ColorBox title="Danger" bg="danger"text="white"             code="#e74a3b"/>
                              <ColorBox title="Secondary" bg="secondary"text="white"       code="#858796"/>
                              <ColorBox title="Light" bg="light" text="black"              code="#f8f9fc"/>
                              <ColorBox title="Dark" bg="dark" text="white"                code="#5a5c69"/>

        </div>

</div>

<div class="col-lg-6 mb-4">

  
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div class="card-body">
            <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"  alt="..."/>
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a
                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                constantly updated collection of beautiful svg images that you can use
                completely free and without attribution!</p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw &rarr;</a>
        </div>
    </div>

    
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
        </div>
        <div class="card-body">
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                CSS bloat and poor page performance. Custom CSS classes are used to create
                custom components and custom utility classes.</p>
            <p class="mb-0">Before working with this theme, you should become familiar with the
                Bootstrap framework, especially the utility classes.</p>
        </div>
    </div>

</div>
</div>

                    
                        






    </>
  )
}

export default Projects
