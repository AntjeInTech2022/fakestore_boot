import {Alert,Placeholder} from "react-bootstrap";



function LoginRequiredAlert() {



  return (
<div>
<p aria-hidden="true">
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
      </p>
<Alert variant="warning">
    <Alert.Heading>Oh snap!</Alert.Heading>
    <p>To access this section you must log in to your account. </p>
    <Alert.Link href="/login"> Click here to login / register.</Alert.Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="406" height="306" class="illustration styles_illustrationTablet__1DWOa"><g id="_138_password_flatline" data-name="#138_password_flatline"><circle cx="200" cy="150" r="104.25" fill="#fff"></circle><path d="M200,254.75A104.75,104.75,0,1,1,304.75,150,104.87,104.87,0,0,1,200,254.75Zm0-208.5A103.75,103.75,0,1,0,303.75,150,103.86,103.86,0,0,0,200,46.25Z" fill="#d1d3d4"></path><path d="M285.69,230.94S274.85,205.35,272,195.35a71.08,71.08,0,0,1-2.14-20.91l-7.7-39.27S208,107.34,192,97.67,156.65,73,151,76.33s-4.67,10.67,2,18c2.74,3,6.45,6.15,8.72,9.45,1.85,2.68,4.17,11.13,1.94,14.13-2.66,3.59-9.75-7.57-13.45-4-1.95,1.86-2.38,8.47,1.55,14.2a51.44,51.44,0,0,0,7.14,7.32c5.4,4.67,6.55,8.28,10.83,13.91,4.4,5.79,1.06-2.84.71,3.83-.42,8.1-1.55,17.77.74,25.7,3.67,12.67,25.18,28.34,34.51,36.34s4.63,35.35,4.63,35.35Z" fill="#fff"></path><path d="M210.3,251a.51.51,0,0,1-.49-.59c.05-.27,4.55-27.15-4.46-34.88-1.53-1.31-3.43-2.86-5.45-4.5-10.39-8.5-26.11-21.34-29.22-32.08-2-6.78-1.44-14.87-1-22,.09-1.32.17-2.61.23-3.86a8,8,0,0,1,.38-2.29c-.28-.32-.61-.72-1-1.21-1.45-1.92-2.52-3.56-3.56-5.16a35.94,35.94,0,0,0-7.2-8.68c-.53-.47-5.28-4.61-7.22-7.42-4.12-6-3.63-12.79-1.48-14.84s5.28.17,8,2.17a18.46,18.46,0,0,0,3.4,2.2c1.21.51,1.7.15,2-.27,2-2.72-.1-10.86-2-13.55a47.37,47.37,0,0,0-5.57-6.21c-1.11-1.1-2.15-2.14-3.11-3.19-4.28-4.7-6.31-9.42-5.73-13.27a7.62,7.62,0,0,1,3.85-5.5c4.51-2.65,15.91,4.8,29.11,13.43,4.13,2.7,8.39,5.49,12.41,7.91,15.8,9.55,69.62,37.21,70.16,37.48a.49.49,0,0,1,.26.35l7.7,39.27a.62.62,0,0,1,0,.13,71,71,0,0,0,2.12,20.74c2.79,9.86,13.54,35.28,13.65,35.53a.51.51,0,0,1,0,.42.54.54,0,0,1-.33.26L210.43,251Zm-39.19-99.41a9.17,9.17,0,0,0-.19,1.55c-.06,1.26-.15,2.55-.23,3.87-.45,7.05-1,15.05.95,21.66,3,10.44,18.59,23.16,28.9,31.58,2,1.65,3.92,3.21,5.46,4.52,8.67,7.44,5.62,30.47,4.92,35L285,230.6c-1.57-3.73-10.88-26-13.46-35.12-2.71-9.56-2.21-20.07-2.16-21l-7.64-39c-3.76-1.93-54.68-28.14-70-37.4-4-2.43-8.3-5.23-12.44-7.93-11.84-7.74-24.08-15.74-28-13.41a6.51,6.51,0,0,0-3.37,4.79c-.53,3.5,1.47,8,5.48,12.45.94,1,2,2.06,3.07,3.15a47.61,47.61,0,0,1,5.69,6.35c1.85,2.68,4.39,11.4,1.93,14.72-.73,1-1.8,1.18-3.2.59a19.5,19.5,0,0,1-3.6-2.31c-2.51-1.86-5.1-3.78-6.7-2.26s-2.27,7.9,1.62,13.55a51.31,51.31,0,0,0,7,7.23,36.74,36.74,0,0,1,7.39,8.9c1,1.58,2.09,3.21,3.52,5.09.33.43.6.77.83,1a1.11,1.11,0,0,1,.26-.07,1.25,1.25,0,0,1,1.21,1,.72.72,0,0,1-.29.92C171.87,152,171.57,152,171.11,151.62Z" fill="#231f20"></path><rect x="157.45" y="39.74" width="80.23" height="159.92" rx="5.11" transform="translate(395.12 239.41) rotate(-180)" fill="#fff"></rect><path d="M232.56,200.17h-70a5.62,5.62,0,0,1-5.61-5.62V44.86a5.62,5.62,0,0,1,5.61-5.62h70a5.62,5.62,0,0,1,5.62,5.62V194.55A5.62,5.62,0,0,1,232.56,200.17Zm-70-159.93A4.62,4.62,0,0,0,158,44.86V194.55a4.62,4.62,0,0,0,4.61,4.62h70a4.62,4.62,0,0,0,4.62-4.62V44.86a4.62,4.62,0,0,0-4.62-4.62Z" fill="#231f20"></path><rect x="161.49" y="54.21" width="71.8" height="123.08" transform="translate(394.79 231.5) rotate(-180)" fill="#ffc107"></rect><path d="M203.56,195.29H189.9a3.65,3.65,0,0,1-3.64-3.65v-5.22a3.65,3.65,0,0,1,3.64-3.65h13.66a3.65,3.65,0,0,1,3.64,3.65v5.22A3.65,3.65,0,0,1,203.56,195.29ZM189.9,183.77a2.65,2.65,0,0,0-2.64,2.65v5.22a2.65,2.65,0,0,0,2.64,2.65h13.66a2.65,2.65,0,0,0,2.64-2.65v-5.22a2.65,2.65,0,0,0-2.64-2.65Z" fill="#d1d3d4"></path><path d="M212,47.42H191.58a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H212a.5.5,0,0,1,.5.5A.5.5,0,0,1,212,47.42Z" fill="#d1d3d4"></path><path d="M188.71,47.17H186a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h2.74a.5.5,0,0,1,.5.5A.5.5,0,0,1,188.71,47.17Z" fill="#d1d3d4"></path><path d="M171.92,121a7,7,0,0,1-4.21,6.69,14.12,14.12,0,0,1-10.15.51,15.6,15.6,0,0,1-5.21-2.87c-2.64-2.23-4.18-5.22-3.84-8,.56-4.53,6.46-7.36,12.52-6.68C166.69,111.28,171.59,117,171.92,121Z" fill="#fff"></path><path d="M162.12,129.37a15.84,15.84,0,0,1-4.71-.72,16.13,16.13,0,0,1-5.38-3c-2.87-2.42-4.37-5.57-4-8.43.59-4.66,6.45-7.85,13.08-7.11,5.83.66,11,6.44,11.33,10.79h0a7.45,7.45,0,0,1-4.48,7.17A13.15,13.15,0,0,1,162.12,129.37ZM159.23,111c-5.27,0-9.77,2.68-10.22,6.34-.32,2.51,1.06,5.33,3.67,7.53a14.69,14.69,0,0,0,5,2.78,13.5,13.5,0,0,0,9.78-.48,6.48,6.48,0,0,0,3.93-6.2c-.3-3.54-4.81-9.24-10.45-9.87A14.62,14.62,0,0,0,159.23,111Z" fill="#231f20"></path><path d="M170.88,141.17a6.55,6.55,0,0,1,.92,5.67,7.64,7.64,0,0,1-2.09,2.92c-2.4,2.27-5.69,3.88-9,3.39a13.46,13.46,0,0,1-5.52-2.52c-2.89-2-5.67-4.52-6.63-7.89-1.39-4.88,2.15-12,7.88-11.31C161.18,132,168.37,137.28,170.88,141.17Z" fill="#fff"></path><path d="M161.94,153.74a7.68,7.68,0,0,1-1.27-.1A13.83,13.83,0,0,1,155,151c-3.82-2.62-6-5.22-6.83-8.16a10.71,10.71,0,0,1,2.21-9.38,6.89,6.89,0,0,1,6.21-2.57c4.88.61,12.19,6,14.76,10h0a7,7,0,0,1,1,6.11,8.18,8.18,0,0,1-2.21,3.11A12.11,12.11,0,0,1,161.94,153.74Zm-6.24-21.86a6,6,0,0,0-4.61,2.27,9.65,9.65,0,0,0-2,8.45c.77,2.71,2.82,5.13,6.44,7.62a13.1,13.1,0,0,0,5.3,2.44c2.8.41,5.92-.78,8.55-3.27a7.13,7.13,0,0,0,2-2.72,6,6,0,0,0-.87-5.23h0c-2.4-3.72-9.5-8.95-14-9.52A5.79,5.79,0,0,0,155.7,131.88Z" fill="#231f20"></path><path d="M168.05,156.86a9.34,9.34,0,0,1,2.73,2.94,8,8,0,0,1-.89,8.51,11.38,11.38,0,0,1-7.8,4.09,12.71,12.71,0,0,1-9.92-3.07,10.3,10.3,0,0,1-3.15-9.71C151.21,150.44,162.33,152.7,168.05,156.86Z" fill="#fff"></path><path d="M160.63,173a13.08,13.08,0,0,1-8.8-3.28,10.76,10.76,0,0,1-3.3-10.19,8.18,8.18,0,0,1,5.15-6.15c4.53-1.67,10.8.29,14.66,3.1h0a9.7,9.7,0,0,1,2.88,3.1,8.55,8.55,0,0,1-.94,9.05,11.78,11.78,0,0,1-8.14,4.29C161.64,173,161.13,173,160.63,173Zm-3.19-19.25a10,10,0,0,0-3.41.56,7.15,7.15,0,0,0-4.53,5.45,9.74,9.74,0,0,0,3,9.22A12.17,12.17,0,0,0,162,171.9a10.81,10.81,0,0,0,7.46-3.9,7.5,7.5,0,0,0,.85-8,8.65,8.65,0,0,0-2.58-2.77A18.73,18.73,0,0,0,157.44,153.73Z" fill="#231f20"></path><polygon points="280.37 209.21 272.99 193.58 202.29 218.07 206.88 235.12 280.37 209.21" fill="#ffc107"></polygon><polygon points="201.67 228.5 279.67 203.16 301.91 244.27 215.14 270.62 201.67 228.5" fill="#231f20"></polygon><path d="M215.14,271.11a.5.5,0,0,1-.48-.34L201.2,228.65a.49.49,0,0,1,.32-.62l78-25.34a.48.48,0,0,1,.59.23L302.35,244a.49.49,0,0,1-.3.71l-86.77,26.35A.32.32,0,0,1,215.14,271.11ZM202.3,228.82,215.46,270l85.72-26-21.75-40.21Z" fill="#231f20"></path><path d="M269.88,176.82s-.5-42.88-5.5-51.39-20.78-44.26-25-44.51-8.58,12.67-4.83,24.18a69.57,69.57,0,0,0,9.5,19s-10.93,9.51-2.68,41.05" fill="#fff"></path><path d="M269.88,177.32a.5.5,0,0,1-.5-.49c0-.43-.55-42.85-5.43-51.14-1.55-2.63-4.09-7.8-7-13.78-5.59-11.34-14.94-30.33-17.59-30.49A3.2,3.2,0,0,0,236.91,83c-3.07,4-4.69,13.53-1.92,22a69.64,69.64,0,0,0,9.42,18.86.5.5,0,0,1-.07.68c-.11.09-10.58,9.75-2.53,40.54a.5.5,0,0,1-.35.61.49.49,0,0,1-.61-.35c-7.52-28.73.67-39.31,2.5-41.23a72.48,72.48,0,0,1-9.32-18.8c-2.86-8.78-1.14-18.73,2.09-22.91a4,4,0,0,1,3.25-1.91c3,.17,9.54,13,18.44,31,2.94,6,5.47,11.11,7,13.71,5,8.52,5.55,49.88,5.57,51.63a.5.5,0,0,1-.49.51Z" fill="#231f20"></path><circle cx="275.13" cy="228.69" r="5.25" fill="#fff"></circle><path d="M211.56,50.72h-92.7a8.78,8.78,0,0,0-8.78,8.78v46.63a8.79,8.79,0,0,0,8.78,8.79h78.61l12.93,16.45V114.92h1.16a8.79,8.79,0,0,0,8.78-8.79V59.5A8.78,8.78,0,0,0,211.56,50.72Z" fill="#fff"></path><path d="M210.4,131.88a.47.47,0,0,1-.39-.2l-12.79-16.26H118.86a9.3,9.3,0,0,1-9.28-9.29V59.5a9.29,9.29,0,0,1,9.28-9.28h92.7a9.29,9.29,0,0,1,9.28,9.28v46.63a9.3,9.3,0,0,1-9.28,9.29h-.66v16a.49.49,0,0,1-.34.47A.41.41,0,0,1,210.4,131.88ZM118.86,51.22a8.3,8.3,0,0,0-8.28,8.28v46.63a8.3,8.3,0,0,0,8.28,8.29h78.61a.49.49,0,0,1,.39.19l12,15.32v-15a.5.5,0,0,1,.5-.5h1.16a8.29,8.29,0,0,0,8.28-8.29V59.5a8.29,8.29,0,0,0-8.28-8.28Z" fill="#231f20"></path><rect x="151.61" y="66.78" width="27.2" height="17.35" rx="3.64" fill="#ffc107"></rect><path d="M172,70.92H158.42a2,2,0,0,1-2-2V63.53a8.8,8.8,0,1,1,17.59,0v5.39A2,2,0,0,1,172,70.92Zm-11.59-4H170V63.53a4.8,4.8,0,1,0-9.59,0Z" fill="#ffc107"></path><circle cx="165.21" cy="72.75" r="2.6" fill="#231f20"></circle><rect x="164.48" y="73.25" width="1.46" height="6.07" fill="#231f20"></rect><path d="M207.36,104.42H122.67a3.2,3.2,0,0,1-3.2-3.2v-9a3.2,3.2,0,0,1,3.2-3.2h84.69a3.21,3.21,0,0,1,3.21,3.2v9A3.21,3.21,0,0,1,207.36,104.42ZM122.67,90a2.2,2.2,0,0,0-2.2,2.2v9a2.19,2.19,0,0,0,2.2,2.2h84.69a2.2,2.2,0,0,0,2.21-2.2v-9a2.21,2.21,0,0,0-2.21-2.2Z" fill="#d1d3d4"></path><path d="M128.55,97.15l1.13,1.49-1.26.88L127.29,98l-1.11,1.47L125,98.59l1.14-1.46-1.81-.6.49-1.4,1.78.62V93.93h1.53v1.82l1.78-.56.47,1.4Z"></path><path d="M136.78,97.15l1.13,1.49-1.26.88L135.52,98l-1.11,1.47-1.23-.88,1.14-1.46-1.81-.6.49-1.4,1.78.62V93.93h1.53v1.82l1.78-.56.47,1.4Z"></path><path d="M145,97.15l1.13,1.49-1.26.88L143.75,98l-1.11,1.47-1.23-.88,1.14-1.46-1.81-.6.49-1.4,1.78.62V93.93h1.53v1.82l1.78-.56.47,1.4Z"></path><path d="M153.24,97.15l1.13,1.49-1.26.88L152,98l-1.11,1.47-1.22-.88,1.13-1.46-1.81-.6.49-1.4,1.78.62V93.93h1.54v1.82l1.77-.56.48,1.4Z"></path><path d="M161.47,97.15l1.13,1.49-1.26.88L160.21,98l-1.11,1.47-1.22-.88L159,97.13l-1.81-.6.49-1.4,1.78.62V93.93H161v1.82l1.77-.56.48,1.4Z"></path></g></svg>

</Alert>
</div>
   
  )
}

export default LoginRequiredAlert